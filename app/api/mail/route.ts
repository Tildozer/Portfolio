import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { SentMessageInfo } from "nodemailer";

type responseData = {
  message: string;
};

interface MailObj {
  subject: string;
  name: string;
  htmlStr: string;
}

const sendMail = async (client: string, content: MailObj | null) => {
  if (content !== null) {
    const mailSentResponse = await sendMailHandler(client, content);
    console.log("email sent, emailResponse: ", mailSentResponse);
  } else {
    throw new Error("Please fill out the information");
  }
};

const sendMailHandler = async (client: string, content: MailObj) => {
  return new Promise((resolve, reject) => {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const emailInfo = {
      from: process.env.EMAIL,
      to: `${process.env.PERSONAL_EMAIL}`,
      subject: content.subject,
      html: getHTMLMessage(client, content),
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const emailResponse = transport.sendMail(
      emailInfo,
      (err: Error | null, result: SentMessageInfo) => {
        if (err) {
          console.error("error sending mail");
          reject(err);
        } else {
          transport.close();
          resolve(result.response);
        }
      },
    );
  });
};

const getHTMLMessage = (client: string, content: MailObj) => {
  return `
      <h1>Inquiry from, ${content.name}!</h1>
    <div>${content.htmlStr}</div>
    `;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<responseData>,
) {
  try {
    const content: MailObj = req.body;
    await sendMail("Anthony's resume", content);

    res.send({ message: "Email sent" });
  } catch (error) {
    throw error;
  }
}
