import crypto from "crypto";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("📩 Webhook recibido:", body);

    // 1️⃣ Validar secreto de Brevo
    const brevoSecret = req.headers.get("x-brevo-secret");
    if (brevoSecret !== process.env.BREVO_WEBHOOK_SECRET) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 2️⃣ Mapear stage_name → event_name (solo los permitidos)
    const eventMap = {
      Scheduled: "Schedule",
      Attended: "AttendedMeeting",
      BecameClient: "BecameClient"
    };

    const eventName = eventMap[body.stage_name];
    if (!eventName) {
      console.warn(`⚠️ stage_name desconocido: ${body.stage_name}. Evento ignorado.`);
      return new Response(
        JSON.stringify({ status: "ignored", reason: "Unknown stage_name" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // 3️⃣ Obtener datos del contacto desde Brevo
    const contactId = body.contact_id;
    const brevoApiKey = process.env.BREVO_API_KEY;
    const contactRes = await fetch(`https://api.brevo.com/v3/contacts/${contactId}`, {
      headers: { "api-key": brevoApiKey }
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

    // Función para hashear datos
    const sha256 = (str) =>
      crypto.createHash("sha256").update(str).digest("hex");

    // 4️⃣ Construir payload base
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

    // Si es BecameClient, agregar custom_data
    if (eventName === "BecameClient") {
      payload.data[0].custom_data = {
        value: 3500,
        currency: "USD",
        customer_segmentation: "new_customer_to_business"
      };
    }

    console.log("📦 Payload para Meta:", JSON.stringify(payload, null, 2));

    // 5️⃣ Enviar a Meta CAPI
    const metaPixelId = process.env.META_PIXEL_ID;
    const metaAccessToken = process.env.META_ACCESS_TOKEN;

    const metaRes = await fetch(
      `https://graph.facebook.com/v19.0/${metaPixelId}/events?access_token=${metaAccessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }
    );

    const metaResponseData = await metaRes.json();
    console.log("📤 Respuesta de Meta:", JSON.stringify(metaResponseData, null, 2));

    // 6️⃣ Retornar resultado
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
