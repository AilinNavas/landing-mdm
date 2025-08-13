import crypto from "crypto";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("📩 Webhook recibido:", body);

    // Validar secreto Brevo
    const brevoSecret = req.headers.get("x-brevo-secret");
    if (brevoSecret !== process.env.BREVO_WEBHOOK_SECRET) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Normalizar stage_name
    const stage = body.stage_name?.trim().toLowerCase();
    let eventName = null;

    if (stage === "scheduled") {
      eventName = "Schedule";
    } else if (stage === "attended") {
      eventName = "AttendedMeeting";
    } else if (stage === "becameclient") {
      eventName = "BecameClient";
    }

    // Si no es un evento válido, salir
    if (!eventName) {
      console.log(`⚠️ Evento ignorado: stage_name=${body.stage_name}`);
      return new Response(JSON.stringify({ status: "ignored" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Obtener datos del contacto
    const contactId = body.contact_id;
    const contactRes = await fetch(`https://api.brevo.com/v3/contacts/${contactId}`, {
      headers: { "api-key": process.env.BREVO_API_KEY }
    });

    if (!contactRes.ok) {
      return new Response(
        JSON.stringify({ error: `Error obteniendo contacto: ${contactRes.statusText}` }),
        { status: contactRes.status, headers: { "Content-Type": "application/json" } }
      );
    }

    const contactData = await contactRes.json();
    const email = contactData.email?.trim().toLowerCase();
    const phone = contactData.attributes?.SMS?.trim();
    const firstName = contactData.attributes?.FIRSTNAME?.trim().toLowerCase();
    const lastName = contactData.attributes?.LASTNAME?.trim().toLowerCase();

    const sha256 = (str) => crypto.createHash("sha256").update(str).digest("hex");

    // Construir payload
    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: crypto.randomUUID(),
          action_source: "website",
          user_data: {
            em: email ? [sha256(email)] : [],
            ph: phone ? [sha256(phone)] : [],
            fn: firstName ? [sha256(firstName)] : [],
            ln: lastName ? [sha256(lastName)] : []
          }
        }
      ],
      test_event_code: process.env.META_TEST_EVENT_CODE
    };

    if (eventName === "BecameClient") {
      payload.data[0].custom_data = {
        value: 3500,
        currency: "USD",
        customer_segmentation: "new_customer_to_business"
      };
    }

    console.log("📦 Payload para Meta:", JSON.stringify(payload, null, 2));

    // Enviar a Meta
    const metaRes = await fetch(
      `https://graph.facebook.com/v19.0/${process.env.META_PIXEL_ID}/events?access_token=${process.env.META_ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }
    );

    const metaResponseData = await metaRes.json();
    console.log("📤 Respuesta de Meta:", JSON.stringify(metaResponseData, null, 2));

    return new Response(
      JSON.stringify({ status: "ok", metaResponse: metaResponseData }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("❌ Error en webhook:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
