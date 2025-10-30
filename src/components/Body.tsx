'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import "@/style/body.css"
export default function Body() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="about" className="section-body">
      <div className="site-container py-14 md:py-16">
        {/* ========== Fila 1 ========== */}
        <div className="contenedor-fila-body">
          {/* Texto */}
          <div
            className={[
              "transform-body",
              mounted ? "contenedor-entrada" : "contenedor-salida",
            ].join(" ")}
            style={{ transitionDelay: "100ms" }}
          >
            <h3 className="titulo-texto-body">
              The direct source for parcel shipping to Mexico at a fraction of the cost.
            </h3>
            <p className="acomodo-titulo-texto-body">
              We are not a <span className='strong-text-color-body'>third party</span>, 
              we are not a <span className='strong-text-color-body'>virtual warehouse</span>, and we are not a{" "}
              <span className='strong-text-color-body'>fancy software company</span>. We are the team that operates the warehouse in Texas, receives your
              packages, crosses the merchandise into Mexico, applies labels, and delivers your packages to the final carrier
              in Mexico.
            </p>
          </div>

          {/* Card derecha (caja) */}
          <div
            className={[
              "md:pl-2 transform-body",
              mounted ? "contenedor-entrada" : "contenedor-salida",
            ].join(" ")}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="contenedor-capsula-body">
              {/* Fondo cápsula (sin recorte) */}
              <div
                className="fondo-capsula-body"
                aria-hidden="true"
              />
              {/* Ilustración (zoom-in sutil) */}
              <Image
                src="/img/body/div2.1.svg"
                alt=""
                fill
                sizes="(min-width: 768px) 580px, 100vw"
                className={[
                  "object-contain md:object-right pointer-events-none select-none",
                  "translate-x-[6px] translate-y-[10px] md:translate-x-[-70px] md:translate-y-[10px]",
                  mounted ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]",
                  "",
                ].join(" ")}
                priority
              />
            </div>
          </div>
        </div>

        <div className="h-10 md:h-16" />

        {/* ========== Fila 2 ========== */}
        <div className="contenedor-fila-body">
          {/* Card izquierda (plataforma) — sin recorte */}
          <div
            className={[
              "md:pr-2 order-1 md:order-none transition-all duration-700 will-change-transform",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
            style={{ transitionDelay: "140ms" }}
          >
            <div className="contenedor-capsula-body">
              {/* Fondo cápsula */}
              <div
                className="fondo-capsula-body" aria-hidden="true"
              />
              {/* Ilustración (levísimo slide) */}
              <Image
                src="/img/body/div2.3.svg"
                alt=""
                fill
              
                className={[
                  "object-contain object-left md:object-center pointer-events-none select-none",
                  // si quieres microajustes, descomenta y ajusta:
                  // "translate-x-[10px] translate-y-[6px] md:translate-x-[60px] md:translate-y-[-20px]",
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[6px]",
                  "transform-body",
                ].join(" ")}
                priority
              />
            </div>
          </div>

          {/* Texto */}
          <div
            className={[
              "transform-body",
              mounted ? "contenedor-entrada" : "contenedor-salida",
            ].join(" ")}
            style={{ transitionDelay: "240ms" }}
          >
            <p className="titulo-texto-body">
              Forget the explanations of missing pallets or delayed packages. Do business directly with the team that does
              the work.
            </p>
            <p className="acomodo-titulo-texto-body">
              Obtain lower shipping costs when you bypass 
              <span className='strong-text-color-body'> virtual teams</span> who are more than
              <span className='strong-text-color-body'> 10,000 kilometers</span> away from the packages!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
