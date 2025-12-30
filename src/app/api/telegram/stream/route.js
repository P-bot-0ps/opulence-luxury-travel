export async function GET() {
  return new Response(
    new ReadableStream({
      start(controller) {
        const interval = setInterval(() => {
          if (global.latestTelegramMessage) {
            controller.enqueue(`data: ${global.latestTelegramMessage}\n\n`);
            global.latestTelegramMessage = null;
          }
        }, 1000);

        return () => clearInterval(interval);
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
