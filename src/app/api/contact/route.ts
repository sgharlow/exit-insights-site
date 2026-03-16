import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Send via Resend if configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Exit Insights <onboarding@resend.dev>",
        to: "sgharlow@gmail.com",
        replyTo: email,
        subject: `Contact form: ${name}${company ? ` (${company})` : ""}`,
        text: [
          `New contact form submission on Exit Insights:`,
          ``,
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || "Not provided"}`,
          `Date: ${new Date().toISOString()}`,
          ``,
          `Message:`,
          message,
        ].join("\n"),
      });
    }

    console.log(`[CONTACT] ${name} <${email}> at ${new Date().toISOString()}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[CONTACT] Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
