import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: Request) => {
  const body = await request.json();
  const { senderEmail, message } = body;

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: senderEmail,
      subject: "New message from contact form",
      react: ContactFormEmail({ senderEmail, message }),
    });

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
};
