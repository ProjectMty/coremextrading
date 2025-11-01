import { Head, Body, Container, Heading, Html, Img, Preview, Section, Tailwind, Text } from '@react-email/components';
import * as React from "react";
interface WelcomeEmailProps {
    name?: string;
    phone?: string;
    email?: string;
    addition?: string;
}

export default function EnvioDatos({
    name = "User",
    phone = "(123) 456-7890",
    email = "prueba@coreMex.com",
    addition = "comentarios",
}: WelcomeEmailProps) {
    const previewText = `Datos de contacto en CoreMex Trading, para ${name}!`;


    return (
        <Html>
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Head></Head>

                <Body className="bg-[#0a684c] text-[#1a1a1a] font-sans py-10">
                    <Container className="bg-white shadow-lg rounded-2xl mx-auto mt-10 mb-10 p-8 max-w-[520px] border border-gray-200">
                        {/* logo */}
                        <Section className=" text-center mb-6">
                            <Img
                                src="https://coremextrading.com/_next/image?url=%2Fimg%2Fhero%2Fplaneta.png&w=384&q=75"
                                width="200"
                                height="100"
                                alt="CoreMex logo"
                                className="my-0 mx-auto"
                            />
                        </Section>

                        <Heading className="text-xl font-bold text-center text-[#0f172a] my-8">
                            Datos de contacto para <span className='text-[#006a7a]'>{name}</span>.
                        </Heading>
                        <Text className="text-gray-700 text-base leading-relaxed mb-4">
                            Te compartimos los datos de contacto para una cotización personalizada, mediante{" "}
                            <span className="font-bold text-[#006a7a]">coremextrading.com</span>.

                        </Text>
                        <Text className="text-gray-700 text-base leading-relaxed mb-4">
                            Nombre:{" "}
                            <span className="font-bold text-[#006a7a]">{name}</span>.
                        </Text>
                        <Text className="text-gray-700 text-base leading-relaxed mb-4">
                            Teléfono:{" "}
                            <span className="font-bold text-[#006a7a]">{phone}</span>.

                        </Text>

                        <Text className="text-gray-700 text-base leading-relaxed mb-4">
                            Correo:{" "}
                            <span className="font-bold text-[#006a7a]">{email}</span>.

                        </Text>

                        <Text className="text-gray-700 text-base leading-relaxed mb-4">
                            Información Adicional:{" "}
                            <span className="font-bold text-[#006a7a]">{addition}</span>.

                        </Text>
                     

                        {/* Footer */}
                        <Text className="text-sm text-gray-500 text-center">
                            Saludos cordiales,
                            <br />
                            <span className="font-semibold text-[#006a7a]">El equipo de CoreMex Trading Web</span>
                        </Text>

                        <Text className="text-xs text-gray-400 text-center mt-4">
                            © {new Date().getFullYear()} CoreMex Trading. Todos los derechos reservados.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};



