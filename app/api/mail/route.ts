import { NextResponse } from "next/server.js";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const text = `Email: ${email} \nMessage: \n${message}`;

  // Set up email data
  const mailOptions = {
    from: `${process.env.EMAIL}`,
    to: process.env.EMAIL,
    subject: `${subject} - ${name}`,
    text,
  };

  try {
    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log(info);
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: `Error sending email: ${(error as Error).message}` },
      { status: 500 },
    );
  }
}
