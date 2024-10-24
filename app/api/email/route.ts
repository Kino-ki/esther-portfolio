import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

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

  const SendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await SendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
