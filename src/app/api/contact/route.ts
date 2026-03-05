import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "glen.adamson@modern-software.co.uk";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey || !apiKey.startsWith("re_")) {
      console.error("RESEND_API_KEY is missing or invalid (must start with re_)");
      return NextResponse.json(
        { error: "Contact form is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "UsedBicyclesNI Contact <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Contact from ${name} - UsedBicyclesNI`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
