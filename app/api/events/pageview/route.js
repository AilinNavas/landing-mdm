
export async function POST(req) {
  try {
    const body = await req.json();

    // IP y User Agent
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "";
    const ua = req.headers.get("user-agent") || "";

    // Generar fbp
    const fbp = `fb.1.${Math.floor(Date.now() / 1000)}.${Math.random()
      .toString(36)
      .substring(2, 10)}`;

    // Si viene fbclid en la URL, armar fbc
    let fbc = "";
    try {
      const urlObj = new URL(body.fullUrl);
      const fbclid = urlObj.searchParams.get("fbclid");
      if (fbclid) {
        fbc = `fb.1.${Math.floor(Date.now() / 1000)}.${fbclid}`;
      }
    } catch {
      // URL inválida o sin fbclid
    }

    const payload = {
      data: [
        {
          event_name: "PageView",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url: body.fullUrl,
          user_data: {
            fbc,
            fbp,
            client_ip_address: ip,
            client_user_agent: ua
          },
          custom_data: {
            metadata: body
          }
        }
      ],
      test_event_code: process.env.META_TEST_EVENT_CODE || undefined
    };


    const res = await fetch(
      `https://graph.facebook.com/v19.0/${process.env.META_PIXEL_ID}/events?access_token=${process.env.META_ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }
    );

    const json = await res.json();
    if (!res.ok) {
      console.error("Meta API Error [PageView]:", json);
      return new Response(JSON.stringify({ error: json }), { status: 500 });
    }

    return new Response(JSON.stringify({ status: "ok", metaResponse: json }), { status: 200 });
  } catch (err) {
    console.error("Server Error [PageView]:", err);
    return new Response(JSON.stringify({ error: "Failed" }), { status: 500 });
  }
}
