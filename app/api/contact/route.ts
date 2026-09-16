import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, lastName, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email and message are required" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>New contact message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Last name:</strong> ${lastName || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>

        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 },
    );
  }
}
