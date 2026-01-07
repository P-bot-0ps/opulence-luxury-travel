import Ably from "ably";

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return Response.json({ error: "Message is required" }, { status: 400 });
    }

    const client = new Ably.Rest(process.env.ABLY_API_KEY);
    const channel = client.channels.get("opulence_chat");

    await channel.publish("message", { text: message });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Ably publish error:", error);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
