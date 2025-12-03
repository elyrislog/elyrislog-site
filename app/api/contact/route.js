import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.formData();

    const nome = data.get("nome");
    const email = data.get("email");
    const mensagem = data.get("mensagem");

    const transporter = nodemailer.createTransport({
      host: "smtp.umbler.com",
      port: 587,
      secure: false,
      auth: {
        user: "contato@elyrislog.com.br",
        pass: process.env.UMBLER_PASS,
      },
    });

    await transporter.sendMail({
      from: `"ElyrisLog Site" <contato@elyrislog.com.br>`,
      replyTo: email,
      to: "contato@elyrislog.com.br",
      subject: `Contato - ${nome}`,
      text: `
Nome: ${nome}
Email: ${email}

Mensagem:
${mensagem}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}
