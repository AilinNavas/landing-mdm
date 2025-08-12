// app/api/brevo-webhook/route.js
import crypto from "crypto";

function sha256Hex(str) {
  return crypto.createHash("sha256").update(String(str)).digest("hex");
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function normalizePhone(phone) {
  // keep digits only, include country code ideally
  return String(phone || "").replace(/\D+/g, "");
}

function mapEventName(raw) {
  if (!raw) return null;
  const key = String(raw).toLowerCase().replace(/\s+|_+/g, "");
  const map = {
    "scheduled": "Schedule",
    "schedule": "Schedule",
    "attended": "AttendedMeeting",
    "attendedmeeting": "AttendedMeeting",
    "becameclient": "BecameClient",
    "became_client": "BecameClient",
    "became client": "BecameClient"
  };
  return map[key] || raw; // si mandan ya el nombre correcto, lo usa
}

export async function POST(req) {
  try {
    const secret = process.env.BREVO_WEBHOOK_SECRET;
    const headerSecret =
      req.headers.get("x-brevo-secret") ||
      req.headers.get("x-brevo-token") ||
      req.headers.get("x-brevo-signature");

    if (!secret || headerSecret !== secret) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const body = await req.json();

    // Extraer event name
    const incomingName = body.eventName || body.event?.name || body.dealStage || body.stage;
    const eventName = mapEventName(incomingName);
    if (!eventName) {
      return new Response(JSON.stringify({ error: "Missing or invalid eventName" }), { status: 400 });
    }

    // Normalize + hash PII (if present)
    const user_data = {};

    if (body.email) {
      const emNorm = normalizeEmail(body.email);
      if (emNorm) user_data.em = sha256Hex(emNorm);
    }
    if (body.phone) {
      const phNorm = normalizePhone(body.phone);
      if (phNorm) user_data.ph = sha256Hex(phNorm);
    }

    // Optional: first/last names (hash if you want)
    if (body.firstName) user_data.fn = sha256Hex(String(body.firstName).trim().toLowerCase());
    if (body.lastName) user_data.ln = sha256Hex(String(body.lastName).trim().toLowerCase());

    // IP / User-Agent desde headers (Vercel proporcionará x-forwarded-for)
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || req.headers.get("x-real-ip") || "";
    const ua = req.headers.get("user-agent") || "";
    if (ip) user_data.client_ip_address = ip;
    if (ua) user_data.client_user_agent = ua;

    // External id (opcional) - hash si lo vas a enviar a user_data
    if (body.external_id) user_data.external_id = sha256Hex(String(body.external_id));

    // event_time y event_id
    const event_time = body.timestamp ? Math.floor(new Date(body.timestamp).getTime() / 1000) : Math.floor(Date.now() / 1000);
    const event_id = body.eventId || crypto.randomUUID();

    console.log(user_data)

    // Construir payload para Meta CAPI
    const payload = {
      data: [
        {
          event_name: eventName,
          event_time,
          event_id,
          action_source: "website",
          user_data: user_data,
          custom_data: {
            source: "Brevo",
            dealId: body.dealId || body.id || null,
            stage: eventName,
            notes: body.notes || null
            // NO incluir PII en cleartext aquí
          }
        }
      ],
      // usar test code solo para pruebas
      test_event_code: process.env.META_TEST_EVENT_CODE || undefined
    };

    // Enviar a Meta
    const pixelId = process.env.META_PIXEL_ID;
    const accessToken = process.env.META_ACCESS_TOKEN;
    if (!pixelId || !accessToken) {
      console.error("Missing META_PIXEL_ID or META_ACCESS_TOKEN env vars");
      return new Response(JSON.stringify({ error: "Server misconfiguration" }), { status: 500 });
    }

    const res = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const json = await res.json();
    if (!res.ok) {
      console.error("Meta API Error [brevo-webhook]:", json);
      return new Response(JSON.stringify({ error: "Meta API error", detail: json }), { status: 500 });
    }

    // RESPUESTA a Brevo: 200 OK para confirmar recepción
    return new Response(JSON.stringify({ status: "ok", metaResponse: json }), { status: 200 });
  } catch (err) {
    console.error("Server Error [brevo-webhook]:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
