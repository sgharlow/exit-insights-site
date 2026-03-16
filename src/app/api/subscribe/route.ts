import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Send notification via Resend if configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Exit Insights <onboarding@resend.dev>",
        to: "sgharlow@gmail.com",
        subject: `New subscriber: ${email}`,
        text: `New email subscriber on Exit Insights:\n\nEmail: ${email}\nDate: ${new Date().toISOString()}`,
      });
    }

    console.log(`[SUBSCRIBE] ${email} at ${new Date().toISOString()}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[SUBSCRIBE] Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
