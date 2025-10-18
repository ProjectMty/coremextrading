// src/components/markets.tsx
'use client';

import Image from 'next/image';

export default function Markets() {
  const ASPECT_W = 1990;
  const ASPECT_H = 750;

  const SHIFT = 17;

  // Safe area dentro del rectángulo de bg1
  const CARD = { left: 6, right: 6, top: 6.5, bottom: 7.5 };

  // Panel derecho (bg2 + textos)
  const PANEL = {
    left: 45 - SHIFT,
    right: 1.5 + SHIFT,
    top:19,
    bottom: 6,
  };

  const HEAD = { top1: -2, top2: 49 };

  const TEXT1 = { dx: 250, dy: -20 };
  const TEXT2 = { dx: 250, dy: 6 };

  return (
    // isolate crea un stacking context; mb separa de la siguiente sección
    <section id="markets" className="relative isolate py-2 mb-14">
      {/* Full-bleed; altura mínima + fondo de respaldo por si falla el SVG */}
      <div
        className={`relative z-0 overflow-hidden w-screen left-1/2 -translate-x-1/2
                    aspect-[${ASPECT_W}/${ASPECT_H}] min-h-[520px]
                    bg-gradient-to-br from-[#12925e] via-[#0a6b56] to-[#062b3a]`}
      >
        {/* BG1: si el archivo está bien, cubrirá el gradiente de respaldo */}
        <Image
          src="/img/markets/bg1.svg"
          alt="Markets base"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        {/* Safe area (bordes internos del rectángulo redondeado) */}
        <div
          className="absolute inset-0"
          style={{
            left: `${CARD.left}%`,
            right: `${CARD.right}%`,
            top: `${CARD.top}%`,
            bottom: `${CARD.bottom}%`,
          }}
        >
          {/* Título */}
          <h2
            className="relative z-[2] mb-3 md:mb-4 text-center font-extrabold tracking-wide text-white
                       drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)]
                       text-[clamp(22px,3.2vw,44px)]"
          >
            MARKETS AND SHIPPING LANES
          </h2>

          {/* Panel derecho (bg2 + textos) */}
          <div
            className="absolute z-[1] px-[clamp(8px,1vw,16px)]"
            style={{
              left: `${PANEL.left}%`,
              right: `${PANEL.right}%`,
              top: `${PANEL.top}%`,
              bottom: `${PANEL.bottom}%`,
            }}
          >
            {/* BG2: barras */}
            <Image
              src="/img/markets/bg2.svg"
              alt=""
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />

            {/* Texto 1 */}
            <p
              className="absolute left-0 right-0 text-white font-extrabold leading-[1.15]
                         drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)]
                         text-[clamp(13px,1.6vw,24px)] max-w-[min(52ch,760px)]"
              style={{
                top: `calc(${HEAD.top1}% + ${TEXT1.dy}px)`,
                transform: `translateX(${TEXT1.dx}px)`,
              }}
            >
              Marketplace fulfillment Amazon, Mercado Libre, Walmart
            </p>

            {/* Texto 2 */}
            <p
              className="absolute left-0 right-0 text-white font-extrabold leading-[1.15]
                         drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)]
                         text-[clamp(13px,1.6vw,24px)] max-w-[min(52ch,760px)]"
              style={{
                top: `calc(${HEAD.top2}% + ${TEXT2.dy}px)`,
                transform: `translateX(${TEXT2.dx}px)`,
              }}
            >
              Direct to client parcel shipping
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
