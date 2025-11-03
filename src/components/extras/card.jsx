
import { useUpAnimation } from "@/animate/useUpAnimation"
import { useEffect, useState } from 'react';
import "@/style/services.css";
import Image from 'next/image';

export default function Card({ item, delay, mounted }) {
    const { ref } = useUpAnimation(null);

    return (
        <article
            ref={ref}
            className={[
                    'contenedor-tarjeta-services',
                    mounted ? 'contenedor-entrada scale-100' : 'contenedor-salida scale-[0.98]',
                  ].join(' ')}
                  >
            <div
                className='fondo-tarjeta-services'
                style={{ backgroundColor: item.bg }}
                aria-hidden />

            <Image
                src={item.icon}
                alt=""
                fill
                className="object-contain select-none"
                sizes="(min-width: 768px) 33vw, 92vw" />

            {/* Texto encima */}
            <p className="texto-tarjeta-services">
                {item.label}
            </p>
        </article>
    )
}
