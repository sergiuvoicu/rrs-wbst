import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(request: Request) {
   console.log("it works");
   return NextResponse.json({ msg: "Hello from server" });
}

const transport = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 587,
   auth: {
      user: "",
      pass: "",
   },
});

export async function POST(request: NextApiRequest) {
   try {
      const result = await transport.sendMail({
         from: "",
         to: "",
         html: `<h1>title</h1> <p>paragraph</p>`,
         subject: "is there a subject here?",
      });
      return Response.json({ sent: "sent" });
   } catch {
      return Response.json({ sent: "NOT sent" });
   }
}
