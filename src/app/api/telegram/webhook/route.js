let clients = []; // all connected chat widgets

// 🔥 1. SSE endpoint — ChatWidget connects here
export function GET() {
  return new Response(
    new ReadableStream({
      start(controller) {
        const client = { controller };
        clients.push(client);

        // Send initial connection event
        controller.enqueue(`data: ${JSON.stringify({ connected: true })}\n\n`);
      },
      cancel() {
        clients = clients.filter((c) => c.controller !== controller);
      },
    }),
    {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    }
  );
}

// 🔥 2. Telegram webhook — receives consultant replies
export async function POST(req) {
  const body = await req.json();

  const message = body?.message?.text;
  const chatId = body?.message?.chat?.id;

  // Only accept messages from your own Telegram
  if (String(chatId) !== process.env.TELEGRAM_CHAT_ID) {
    return Response.json({ ok: true });
  }

  // Broadcast to all connected ChatWidgets
  clients.forEach((client) => {
    client.controller.enqueue(`data: ${JSON.stringify({ text: message })}\n\n`);
  });

  return Response.json({ ok: true });
}
