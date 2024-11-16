import nodemailer from "nodemailer";
import { promises as fs } from "fs";
import path from "path";

const sourceEmail = process.env.SMTP_SOURCE_MAIL
const destinationEmail = process.env.SMTP_DESTINATION_MAIL
const serviceClient = process.env.GOOGLE_API_SERVICE_CLIENT
const privateKey = process.env.GOOGLE_API_PRIVATE_KEY


const transport = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 587,
   auth: {
      type: "OAuth2",
      user: sourceEmail,
      serviceClient: serviceClient,
      privateKey: privateKey
   }
});

export async function POST(request: Request) {
   const filePath = path.join(process.cwd(), "/emails/contact.html");
   let htmlTemplate = await fs.readFile(filePath, "utf8");

   const { name, email, message } = await request.json();

   htmlTemplate = htmlTemplate
      .replace("{{name}}", name)
      .replace("{{email}}", email)
      .replace("{{message}}", message);

   try {
      const result = await transport.sendMail({
         from: sourceEmail,
         to: destinationEmail,
         html: htmlTemplate,
         subject: `Message from ${name}`,
      });
      return new Response(JSON.stringify({ sent: "sent" }), {
         status: 200,
         headers: { "Content-Type": "application/json" },
      });
   } catch(err) {
      console.log(err)
      return new Response(JSON.stringify({ sent: "NOT sent" }), {
         status: 500,
         headers: { "Content-Type": "application/json" },
      });
   }
}
