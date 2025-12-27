// app/api/consultant/route.js
import { supabaseClient } from "@/lib/supabaseClient";

export async function POST(req) {
  const { userId, content } = await req.json();

  // Simple scripted reply logic
  let reply;
  if (content.toLowerCase().includes("price")) {
    reply = "Our packages start at premium rates tailored to your journey.";
  } else if (content.toLowerCase().includes("hello")) {
    reply = "Hello! Welcome to Opulence Concierge.";
  } else {
    reply = "Thanks for your message. A consultant will assist you shortly.";
  }

  // Insert consultant reply into Supabase
  const { error } = await supabaseClient
    .from("messages")
    .insert([{ user_id: userId, role: "consultant", content: reply }]);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ status: "ok", reply }), { status: 200 });
}
