export async function GET() {
  return new Response(
    new ReadableStream({
      start(controller) {
        let closed = false;

        // Detect when the client disconnects
        controller.signal?.addEventListener("abort", () => {
          closed = true;
        });

        // Heartbeat every 20 seconds
        const heartbeat = setInterval(() => {
          if (closed) return;
          try {
            controller.enqueue(`:\n\n`);
          } catch (e) {
            console.log("Heartbeat failed:", e.message);
          }
        }, 20000);

        // Check for new Telegram messages every second
        const interval = setInterval(() => {
          if (closed) return;

          if (global.latestTelegramMessage) {
            try {
              controller.enqueue(`data: ${global.latestTelegramMessage}\n\n`);
              global.latestTelegramMessage = null;
            } catch (e) {
              console.log("SSE enqueue failed:", e.message);
            }
          }
        }, 1000);

        // Cleanup when stream closes
        controller.signal?.addEventListener("abort", () => {
          clearInterval(interval);
          clearInterval(heartbeat);
        });
      },
    }),
    {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    }
  );
}
