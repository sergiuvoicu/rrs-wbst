import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 587,
   auth: {
      // TODO: add noreply@rerise.org
      user: "maresgabriel.dev@gmail.com",
      pass: "ldiy bdqa upfe xtfy",
   },
   // TODO, what is this?
   tls: {
      rejectUnauthorized: false,
   },
});

// TODO: Rename routes (this one too!)
// TODO: HTML EMAIL TEMPLATE

export async function POST(request: Request) {
   const { name, email, message } = await request.json();
   console.log(name, email, message);

   try {
      const result = await transport.sendMail({
         from: "maresgabriel.dev@gmail.com",
         to: "maresgabriel.dev@gmail.com",
         html: `<h1>${name}</h1> <p>${email}</p> ${message}`,
         subject: "is there a subject here?",
      });
      return Response.json({ sent: "sent" });
   } catch {
      return Response.json({ sent: "NOT sent" });
   }
}
