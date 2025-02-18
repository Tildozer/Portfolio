import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { SentMessageInfo } from "nodemailer";
import Cors from "cors";

// Initialize the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  origin: process.env.NEXT_PUBLIC_API_URL,
  optionsSuccessStatus: 200,
});

// Helper method to wait for a middleware to execute before continuing
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function,
) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

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
    <h1>${content.subject}</h1>
    `;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<responseData>,
) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    const content: MailObj = req.body;
    await sendMail("Anthony's resume", content);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
}
