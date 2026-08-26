import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "DocFlex Site <onboarding@resend.dev>",
      to: "docflex.angola@gmail.com",
      replyTo: email,
      subject: `Contacto de ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro ao enviar" },
      { status: 500 }
    );
  }
}
