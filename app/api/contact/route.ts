import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, message, phone } = body;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "skdp.ecp19@uea.edu.br",
      subject: `Novo contato de ${name}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Erro ao enviar email" }, { status: 500 });
  }
}
