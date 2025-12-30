export async function POST(req) {
  try {
    // 1. Read Telegram's secret header
    const secret = req.headers.get("x-telegram-bot-api-secret-token");

    // 2. Compare with your .env secret
    if (secret !== process.env.TELEGRAM_WEBHOOK_SECRET) {
      return new Response("Unauthorized", { status: 401 });
    }

    // 3. Parse the incoming Telegram update
    const update = await req.json();
    const message = update?.message?.text;

    // 4. Store the message for SSE broadcasting
    if (message) {
      global.latestTelegramMessage = message;
    }

    return new Response("ok");
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
