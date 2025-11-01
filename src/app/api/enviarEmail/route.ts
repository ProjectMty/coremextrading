import { NextResponse } from "next/server";
import React from 'react';
import { Resend } from "resend";
import  EmailTemplate  from "@/components/Plantilla/plantillaEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  return NextResponse.json({
    message: "Endpoint de envío de correos activo 🚀",
    metodo: "GET",
    uso: "Envía un POST a este endpoint para mandar correos.",
  });
}
export async function POST(req: Request) {
    try {
        const destinatarios = [
            "info@coremextrading.com"
            // "it03@cargomty.com"
        ];
        const { name, phone, correo, addition } = await req.json();
        const data = await resend.emails.send({
            from: 'CoreMex Trading <no-reply@coremextrading.com>',
            to: destinatarios,
            subject: name + " Datos para contacto",
            react: EmailTemplate({name: name, phone: phone, email: correo, addition: addition})
});

    // Si el envío fue exitoso
    return NextResponse.json(
      { message: "Correo enviado", data },
      { status: 200 }
    );
    } catch (error) {
        console.error("Error enviando correo", error);
        return NextResponse.json({ message: "FATAL ERROR ENVIANDO CORREO" }, { status: 500 })
    }
}

