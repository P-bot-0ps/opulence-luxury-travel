export async function POST(req) {
  try {
    const { message } = await req.json();

    // Validate message
    if (!message || typeof message !== "string") {
      return Response.json(
        { error: "Message text is required" },
        { status: 400 }
      );
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return Response.json(
        { error: "Missing Telegram environment variables" },
        { status: 500 }
      );
    }

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    // Send message to Telegram
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: `💬 New Opulence Chat Message:\n\n${message}`,
      }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Send-to-Telegram error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
