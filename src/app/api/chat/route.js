import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({
        success: false,
        reply: "Message is required.",
      }, { status: 400 });
    }

    // Forward request to n8n
    const n8nResponse = await fetch(process.env.N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!n8nResponse.ok) {
      throw new Error(`n8n error: ${n8nResponse.status}`);
    }

    const data = await n8nResponse.json();

    return NextResponse.json({
      success: true,
      reply: data.reply,
    });
  } catch (error) {
    console.error("Chat API Error:", error.message);
    return NextResponse.json({
      success: false,
      reply: "Server error. Please try again later.",
    }, { status: 500 });
  }
}
