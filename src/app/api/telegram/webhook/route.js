export async function POST(req) {
  try {
    // 1. Parse the incoming Telegram update
    const update = await req.json();
    console.log("📩 Incoming Telegram update:", update);

    // 2. Extract text from ANY message type
    const message =
      update?.message?.text ||
      update?.edited_message?.text ||
      update?.channel_post?.text ||
      update?.callback_query?.data ||
      null;

    // 3. Store the message for SSE broadcasting
    if (message) {
      console.log("💬 Storing message for SSE:", message);
      global.latestTelegramMessage = message;
    } else {
      console.log("⚠️ No text message found in update");
    }

    // 4. Always return 200 OK so Telegram stops retrying
    return new Response("ok");
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
