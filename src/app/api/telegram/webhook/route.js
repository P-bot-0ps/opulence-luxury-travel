export async function POST(req) {
  try {
    // 1. Read Telegram's secret header
    const secret = req.headers.get("x-telegram-bot-api-secret-token");

    // 2. Compare with your .env secret
    if (secret !== process.env.TELEGRAM_WEBHOOK_SECRET) {
      console.log("❌ Wrong secret:", secret);
      return new Response("Unauthorized", { status: 401 });
    }

    // 3. Parse the incoming Telegram update
    const update = await req.json();
    console.log("📩 Incoming Telegram update:", update);

    // 4. Extract text from ANY message type
    const message =
      update?.message?.text ||
      update?.edited_message?.text ||
      update?.channel_post?.text ||
      update?.callback_query?.data ||
      null;

    // 5. Store the message for SSE broadcasting
    if (message) {
      console.log("💬 Storing message for SSE:", message);
      global.latestTelegramMessage = message;
    } else {
      console.log("⚠️ No text message found in update");
    }

    return new Response("ok");
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
