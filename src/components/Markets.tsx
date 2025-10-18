// src/components/markets.tsx
'use client';

import Image from 'next/image';

export default function Markets() {
  // Franja a todo lo ancho (bg1)
  const ASPECT_W = 1990;
  const ASPECT_H = 750;

  // Desplaza el panel derecho hacia la IZQUIERDA sin cambiar su ancho
  const SHIFT = 17;

  // Safe area del rectángulo interno de bg1 (bordes redondeados)
  const CARD = { left: 6, right: 6, top: 6.5, bottom: 7.5 };

  // Panel derecho (bg2 + textos), relativo al CARD
  const PANEL = {
    left: 55 - SHIFT,
    right: 1.5 + SHIFT,
    top: 16,
    bottom: 6,
  };

  // Posiciones base (en %) de cada texto dentro del PANEL
  const HEAD = { top1: 9, top2: 49 };

  // 🔧 Offsets SOLO para los textos (px)
  //  dx: +derecha / -izquierda,  dy: +abajo / -arriba
  const TEXT1 = { dx: 10, dy: 0 }; // "Marketplace fulfillment…"
  const TEXT2 = { dx: 10, dy: 6 }; // "Direct to client parcel shipping"

  return (
    <section id="markets" className="relative py-2">
      {/* BG1 full-bleed */}
      <div className={`relative w-screen left-1/2 -translate-x-1/2 aspect-[${ASPECT_W}/${ASPECT_H}]`}>
        <Image
          src="/img/markets/bg1.svg"
          alt="Markets base"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        {/* Safe area del rectángulo redondeado */}
        <div
          className="absolute inset-0"
          style={{
            left: `${CARD.left}%`,
            right: `${CARD.right}%`,
            top: `${CARD.top}%`,
            bottom: `${CARD.bottom}%`,
          }}
        >
          {/* Título dentro de bg1 */}
          <h2
            className="mb-3 md:mb-4 text-center font-extrabold tracking-wide text-white
                       drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)]
                       text-[clamp(22px,3.2vw,44px)]"
          >
            MARKETS AND SHIPPING LANES
          </h2>

          {/* Panel derecho (bg2 + textos) */}
          <div
            className="absolute z-10 pointer-events-none px-[clamp(8px,1vw,16px)]"
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
