import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "roxtechsolutions@gmail.com",
        pass: "zrmq yapl sztk dhpd",
      },
    });

    const mailOptions = {
      from: `"ROX Tech Website" <roxtechsolutions@gmail.com>`,
      to: "roxtechsolutions@gmail.com",
      replyTo: email,
      subject: `📥 New Inquiry: ${name} (${service || "General"})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 8px; border-top: 4px solid #f97316;">
            <h2 style="color: #111827; margin-top: 0;">New Website Inquiry</h2>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Service:</strong> ${service || "General Inquiry"}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #f9fafb; padding: 15px; border-radius: 6px;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Inquiry sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ error: "Failed to send email inquiry." }, { status: 500 });
  }
}