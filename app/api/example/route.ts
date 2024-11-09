import nodemailer from "nodemailer";
import { promises as fs } from "fs";
import path from "path";

const transport = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 587,
   auth: {
      // TODO: add noreply@rerise.org
      user: "",
      pass: "",
   },
   tls: {
      rejectUnauthorized: false,
   },
});

// TODO: Rename routes

export async function POST(request: Request) {
   const filePath = path.join(process.cwd(), "/app/api/emails/contact.html");
   let htmlTemplate = await fs.readFile(filePath, "utf8");

   const { name, email, message } = await request.json();

   htmlTemplate = htmlTemplate
      .replace("{{name}}", name)
      .replace("{{email}}", email)
      .replace("{{message}}", message);

   try {
      const result = await transport.sendMail({
         from: "maresgabriel.dev@gmail.com",
         to: "maresgabriel.dev@gmail.com",
         html: htmlTemplate,
         subject: "is there a subject here?",
      });
      return new Response(JSON.stringify({ sent: "sent" }), {
         status: 200,
         headers: { "Content-Type": "application/json" },
      });
   } catch {
      return new Response(JSON.stringify({ sent: "NOT sent" }), {
         status: 500,
         headers: { "Content-Type": "application/json" },
      });
   }
}
