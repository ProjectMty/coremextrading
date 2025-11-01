"use client";

import "@/style/contacto.css";

import { use, useState } from "react";
import Swal from 'sweetalert2'

export default function Formulario() {
    const [nombre, SetNombre] = useState("");
    const [telefono, SetTelefono] = useState("");
    const [correo, SetCorreo] = useState("");
    const [asunto, SetAsunto] = useState("");

    const handleChangeTelefono = (e: React.ChangeEvent<HTMLInputElement>) => {
        // eliminar todo lo que no sea número
        let numeros = e.target.value.replace(/\D/g, "").slice(0, 10);


        if (numeros.length > 6) {
            numeros = `(${numeros.slice(0, 3)}) ${numeros.slice(3, 6)}-${numeros.slice(6)}`;
        } else if (numeros.length > 3) {
            numeros = `(${numeros.slice(0, 3)}) ${numeros.slice(3)}`;
        } else if (numeros.length > 0) {
            numeros = `(${numeros}`;
        }

        SetTelefono(numeros);

    };

    const handleEnvioDatos = async () => {
        try {
            const body = {
                name: nombre,
                phone: telefono,
                correo: correo,
                addition: asunto,
            };

            // Validación simple antes de enviar
            if (!nombre || !telefono || !correo || !asunto) {
                Swal.fire({
                    title: "Campos incompletos",
                    text: "Por favor completa todos los campos requeridos.",
                    icon: "warning",
                    timer: 3000,
                });
                return;
            }
            console.log("Enviando correo con datos:", { name, telefono, correo, asunto });
            // Enviar al backend
            const response = await fetch("/api/enviarEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            // Validar respuesta del servidor
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Error al enviar el correo");
            }

            const data = await response.json();

            Swal.fire({
                title: "Correo enviado 🎉",
                text: data.message || "Tu mensaje fue enviado exitosamente.",
                icon: "success",
                timer: 3000,
            });

            // Limpiar campos del formulario
            SetNombre("");
            SetTelefono("");
            SetCorreo("");
            SetAsunto("");

        } catch (error: any) {
            console.error("Error al enviar el correo:", error);
            Swal.fire({
                title: "Error",
                text: error.message || "No se pudo enviar el correo. Intenta nuevamente.",
                icon: "error",
                timer: 3000,
            });
        }
    };

    return (
        <section id="contacto" className="w-full  h-full ">
            <div className="section-contactanos">
                <div className="  z-10 ">
                    <h1 className="titulo-contatanos">
                        CONTACT US!
                    </h1>

                    {/* contenedor derecho */}
                    <div className="contenedor-der">

                        <div className="contenedor-filas-2">
                            <label htmlFor="ContactName" className="label">NAME: </label>
                            <input type="text" name="name" id="ContactName" className="input"
                                value={nombre}
                                placeholder="Nombre"
                                onChange={(e) => SetNombre(e.target.value)} />
                        </div>

                        <div className="contenedor-filas-2">
                            <label htmlFor="ContactPhone" className="label">TELEPHONE NUMBER: </label>
                            <input type="text" name="phone" id="ContactPhone" className="input"
                                value={telefono}
                                placeholder="(123) 456-7890"
                                onChange={handleChangeTelefono} />
                        </div>

                        <div className="contenedor-filas-2">

                            <label htmlFor="ContactEmail" className="label">EMAIL: </label>
                            <input type="text" name="email" id="ContactEmail" className="input"
                                value={correo}
                                placeholder="Example@correo.com"
                                onChange={(e) => SetCorreo(e.target.value)} />
                        </div>

                        <div className="contenedor-filas-2">

                            <label htmlFor="ContactEmail" className="label">ADDITIONAL INFORMATION: </label>
                            <input type="textarea" name="email" className="input"
                                value={asunto}
                                placeholder=""
                                onChange={(e) => SetAsunto(e.target.value)} />
                        </div>

                        {/* boton pequeño */}
                        <button className="button-forms" onClick={handleEnvioDatos}>
                            SEND
                        </button>
                    </div>


                </div>
            </div>
        </section>
    )
}