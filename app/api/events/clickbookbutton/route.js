export async function POST(req) {
    try {
        const data = await req.json();

        // Send to Meta CAPI
        await fetch("https://graph.facebook.com/v19.0/4241736379388399/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                data: [
                    {
                        event_name: "ClickBookButton",
                        event_time: Math.floor(Date.now() / 1000),
                        action_source: "website",
                        event_source_url: `https://free-preview.mucho-dental-marketing.com/${data.path}`,
                        user_data: { fbc: data.fbclid },
                        custom_data: {
                            metadata: data
                        }
                    }
                ],
                test_event_code: 'TEST46052'
                // access_token: process.env.META_ACCESS_TOKEN
            })
        });

        return new Response(JSON.stringify({ status: "ok" }), { status: 200 });
    } catch (err) {
        console.error("ClickBookButton Error:", err);
        return new Response(JSON.stringify({ error: "Failed" }), { status: 500 });
    }
}
