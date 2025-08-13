import crypto from "crypto";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("📩 Webhook recibido:", body);

    // 1️⃣ Validar secreto de Brevo
    const brevoSecret = req.headers.get("x-brevo-secret");
    if (brevoSecret !== process.env.BREVO_WEBHOOK_SECRET) {
      return new Response("Unauthorized", { status: 401 });
    }

    // 2️⃣ Obtener datos del contacto desde Brevo
    const contactId = body.contact_id;
    const brevoApiKey = process.env.BREVO_API_KEY;
    const contactRes = await fetch(`https://api.brevo.com/v3/contacts/${contactId}`, {
      headers: { "api-key": brevoApiKey }
    });

    if (!contactRes.ok) {
      throw new Error(`Error obteniendo contacto: ${contactRes.statusText}`);
    }

    const contactData = await contactRes.json();
    const email = contactData.email?.trim().toLowerCase();
    const phone = contactData.attributes?.SMS?.trim();
    const last_name = contactData.attributes?.LastName?.trim();
    const first_name = contactData.attributes?.FirstName?.trim();

    // Función para hashear datos como pide Meta
    const sha256 = (str) =>
      crypto.createHash("sha256").update(str).digest("hex");

    // 3️⃣ Mapear stage_name a event_name correcto
    let eventName;
    switch (body.stage_name) {
      case "Scheduled":
        eventName = "Schedule";
        break;
      case "AttendedMeeting":
        eventName = "AttendedMeeting";
        break;
      case "BecameClient":
        eventName = "BecameClient";
        break;
      default:
        eventName = "CustomEvent";
    }

    // 4️⃣ Construir payload base
    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000), // ahora mismo
          action_source: "website",
          user_data: {
            em: email ? [sha256(email)] : [],
            ph: phone ? [sha256(phone)] : [],
            fn: first_name ? [sha256(first_name)] : [],
            ln: last_name ? [sha256(last_name)] : []
          }
        }
      ]
    };

    // Si es BecameClient, agregar custom_data
    if (eventName === "BecameClient") {
      payload.data[0].custom_data = {
        value: 3500,
        currency: "USD",
        customer_segmentation: "new_customer_to_business"
      };
    }

    // 5️⃣ Si existe código de evento de prueba, agregarlo
    if (process.env.META_TEST_EVENT_CODE) {
      payload.test_event_code = process.env.META_TEST_EVENT_CODE;
    }

    console.log("📦 Payload para Meta:", JSON.stringify(payload, null, 2));

    // 6️⃣ Enviar a Meta CAPI
    // const metaPixelId = process.env.META_PIXEL_ID;
    // const metaAccessToken = process.env.META_ACCESS_TOKEN;

    // const metaRes = await fetch(
    //   `https://graph.facebook.com/v19.0/${metaPixelId}/events?access_token=${metaAccessToken}`,
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(payload)
    //   }
    // );

    // const metaResponseData = await metaRes.json();
    // console.log("📤 Respuesta de Meta:", JSON.stringify(metaResponseData, null, 2));

    // return Response.json({ status: "ok", metaResponse: metaResponseData });
  } catch (error) {
    console.error("❌ Error en webhook:", error);
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
}
