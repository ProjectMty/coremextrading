'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";

export default function Body() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="about" className="bg-white text-gray-800 anchor">
      <div className="site-container py-14 md:py-16">
        {/* ========== Fila 1 ========== */}
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
          {/* Texto */}
          <div
            className={[
              "transition-all duration-700 will-change-transform",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
            style={{ transitionDelay: "100ms" }}
          >
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">
              The direct source for parcel shipping to Mexico at a fraction of the cost.
            </h3>
            <p className="mt-4 leading-relaxed md:text-[17px]">
              We are not a <strong>third party</strong>, we are not a <strong>virtual warehouse</strong>, and we are not a{" "}
              <strong>fancy software company</strong>. We are the team that operates the warehouse in Texas, receives your
              packages, crosses the merchandise into Mexico, applies labels, and delivers your packages to the final carrier
              in Mexico.
            </p>
          </div>

          {/* Card derecha (caja) */}
          <div
            className={[
              "md:pl-2 transition-all duration-700 will-change-transform",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative h-[230px] md:h-[265px]">
              {/* Fondo cápsula (sin recorte) */}
              <div
                className="absolute inset-0 bg-no-repeat bg-contain bg-center md:bg-right transition-all duration-700"
                style={{ backgroundImage: "url('/img/body/div2.4.svg')" }}
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
                  "transition-all duration-700 will-change-transform",
                ].join(" ")}
                priority
              />
            </div>
          </div>
        </div>

        <div className="h-10 md:h-12" />

        {/* ========== Fila 2 ========== */}
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
          {/* Card izquierda (plataforma) — sin recorte */}
          <div
            className={[
              "md:pr-2 order-1 md:order-none transition-all duration-700 will-change-transform",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
            style={{ transitionDelay: "140ms" }}
          >
            <div className="relative h-[230px] md:h-[265px]">
              {/* Fondo cápsula */}
              <div
                className="absolute inset-0 bg-no-repeat bg-contain bg-left md:bg-center transition-all duration-700"
                style={{ backgroundImage: "url('/img/body/div2.4.svg')" }}
                aria-hidden="true"
              />
              {/* Ilustración (levísimo slide) */}
              <Image
                src="/img/body/div2.3.svg"
                alt=""
                fill
                sizes="(min-width: 768px) 520px, 100vw"
                className={[
                  "object-contain object-left md:object-center pointer-events-none select-none",
                  // si quieres microajustes, descomenta y ajusta:
                  // "translate-x-[10px] translate-y-[6px] md:translate-x-[60px] md:translate-y-[-20px]",
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[6px]",
                  "transition-all duration-700 will-change-transform",
                ].join(" ")}
                priority
              />
            </div>
          </div>

          {/* Texto */}
          <div
            className={[
              "transition-all duration-700 will-change-transform",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
            style={{ transitionDelay: "240ms" }}
          >
            <p className="text-xl md:text-2xl font-extrabold text-gray-900">
              Forget the explanations of missing pallets or delayed packages. Do business directly with the team that does
              the work.
            </p>
            <p className="mt-4 leading-relaxed md:text-[17px]">
              Obtain lower shipping costs when you bypass <strong>virtual teams</strong> who are more than
              <strong> 10,000 kilometers</strong> away from the packages!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
