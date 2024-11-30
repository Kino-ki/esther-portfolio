import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { errorMonitor } from "stream";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });
  if (!process.env.MY_EMAIL) {
    throw new Error("Environment variable MY_EMAIL is not defined.");
  }

  const mailOptions: Mail.Options = {
    from: {
      name: "Esther Portfolio",
      address: process.env.MY_EMAIL,
    },
    to: process.env.MY_EMAIL,
    subject: `Message from ${name} (${email})`,
    text: `${message}`,
  };

  try {
    // Use the Promise version of sendMail
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ error: err || "Unknown error" }, { status: 500 });
  }
}