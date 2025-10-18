'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    // Menos altura y pegado arriba
    <section className="relative flex items-start">
      {/* el fondo global ya viene de globals.css */}
      <div className="container relative w-full pt-[4.25rem] pb-2">
        {/* Panel: pegado a la izquierda y arriba del contenedor */}
        <div
          className={[
            // tamaño y posición
            'w-full max-w-[980px] md:max-w-[920px] lg:max-w-[900px]',
            // sin radios en la izquierda para que “nazca” desde la esquina
            'rounded-l-none',
            // radios suaves arriba/derecha y gran curva abajo-derecha
            'rounded-tr-[42px] rounded-br-[160px] rounded-bl-[18px]',
            // relleno proporcional (menos que antes)
            'px-6 py-6 md:px-8 md:py-7',
            // colores/efectos
            'bg-gradient-to-br from-brand-green to-brand-blue text-white',
            'shadow-soft ring-1 ring-black/20',
            // quitar espacio extra debajo
            'mb-2',
          ].join(' ')}
        >
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[30px] leading-[1.1] font-extrabold md:text-[42px]"
          >
            Commercial Parcel Shipping
            <br />
            from USA to Mexico for
            <br />
            Amazon and Mercado
            <br />
            Libre Sales
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-4 text-[17px] md:text-[18px] font-medium text-white/90"
          >
            We’re not the same guys.
            <br />
            We’re the ones who get it done!
          </motion.p>
        </div>
      </div>
    </section>
  );
}
