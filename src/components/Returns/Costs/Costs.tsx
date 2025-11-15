"use client";
import Section from '@/components/extras/section';
import returnCostsData from '@/components/extras/return-cost-data';
import { animateFadeIn } from '@/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import "@/components/Returns/Costs/Costs.css"
import { useEffect, useMemo, useRef, useState } from "react";
import "@/style/pricing.css"



/** Ajustes del carrusel */
const CARD = {
  w: 340,     // ancho lógico de la carta centrada (px)
  gap: 150,   // separación horizontal entre cartas (px)
  scaleCenter: 1,
  scaleNear: 0.9,
  scaleFar: 0.8,
  height: { base: 540, md: 620 }, // altura del carrusel
  shadow: "drop-shadow-[0_18px_28px_rgba(0,0,0,0.35)]",
};

/** Opacidad por distancia (más foco en la carta central) */
const OPACITY = {
  center: 1.0,   // 0 de distancia (carta activa)
  near: 0.55,    // ±1
  far: 0.18,     // ±2
  hidden: 0.06,  // ±3 (apenas visible)
};

/** Cantidad de cartas que dibujamos a cada lado (ventana visible) */
const RADIUS = 3; // muestra desde current-3 .. current+3

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function Costs_Returns() {
  // NOTA: 'current' ahora es un índice VIRTUAL que puede crecer indefinidamente.
  const [current, setCurrent] = useState(0);
  const total = returnCostsData.length;
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);

  /** autoplay continuo (incrementa el índice virtual) */
  useEffect(() => {
    autoplayRef.current && clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrent((c) => c + 1);
    }, 5000);
    return () => {
      autoplayRef.current && clearInterval(autoplayRef.current);
    };
  }, []);

  /** navegación por teclado (continuo) */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setCurrent((c) => c - 1);
      if (e.key === "ArrowRight") setCurrent((c) => c + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /** gestos táctiles */
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    if (Math.abs(dx) > 40) {
      if (dx > 0) setCurrent((c) => c - 1);
      else setCurrent((c) => c + 1);
    }
    touch.current = null;
  };

  /** Generamos la “ventana” alrededor del índice virtual */
  const items = useMemo(() => {
    const list: Array<{
      id: string;
      key: string;
      top: any;
      content: React.ReactNode;
      offset: number;
      x: number;
      scale: number;
      z: number;
      opacity: number;
      filter: string;
    }> = [];

    for (let k = -RADIUS; k <= RADIUS; k++) {
      const virtualIndex = current + k;
      const realIndex = mod(virtualIndex, total);
      const data = returnCostsData[realIndex];

      const abs = Math.abs(k);
      const z = 100 - abs;
      const x = k * CARD.gap;
      const scale =
        k === 0 ? CARD.scaleCenter : abs === 1 ? CARD.scaleNear : CARD.scaleFar;

      const opacity =
        abs === 0
          ? OPACITY.center
          : abs === 1
            ? OPACITY.near
            : abs === 2
              ? OPACITY.far
              : OPACITY.hidden;

      const filter = abs === 0 ? 'none' : 'saturate(0.85) brightness(0.92)';

      list.push({
        id: data.id,
        key: `${realIndex}-${virtualIndex}`,
        top: data.top,
        content: data.content,
        offset: k,
        x,
        scale,
        z,
        opacity,
        filter,
      });
    }

    return list;
  }, [current, total]);


  return (
    <Section id='returns-cost' className='space-y-4 section-costsR' withPadding={false}>
    
        <motion.h3 {...animateFadeIn} className='titulo-costsR'>
          HOW MUCH DO RETURNS COST?
        </motion.h3>
        <motion.p {...animateFadeIn} className='desc-costsR'>
          While Core Mex offers several options for returns management, our most popular is the consolidate and return to seller model. We receive your returns on a daily basis, inform you of the inventory status, and consolidate. We ship back to you when you’re ready! 
        </motion.p>

      <div
        className=" relative overflow-hidden w-full h-full"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Pila centrada */}
        <div className="contenedor-carrusel-costsR relative flex items-center justify-center">
          {items.map(({ key, top, content, x, scale, z, opacity, filter }, idx) => (
            <div
              key={key}
              className={`
          absolute ${CARD.shadow}
          transition-all duration-500 ease-[cubic-bezier(.2,.65,.2,1)]
          will-change-transform rounded-[22px] 
          bg-gradient-to-br from-[#098354]/100 via-[#006A7A]/100 to-[#022641]/100
        `}
              style={{
                width: CARD.w,
                transform: `translateX(${x}px) scale(${scale})`,
                zIndex: z,
                opacity,
                filter,
              }}
            >
              <div className="  rounded-[22px] overflow-hidden" >
                {/* Header */}
                <div className="space-y-4  py-6 text-center text-white">
                  <div className="text-[30px] font-bold uppercase tracking-wider w-[80%] mx-auto">{top.title}</div>
                  <div className="text-6xl font-bold">{top.cost}</div>
                  <div className="text-xl font-bold">{top.type}</div>
                </div>

                {/* Contenido */}
                <div className="flex min-h-[630px] flex-col items-center justify-between pb-6 text-white">
                  <div>{content}</div>
                  <Link
                    href="#contact"
                    className="boton-carrusel-costsR"
                  >
                    Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flechas */}
        <button
          aria-label="Previous"
          onClick={() => setCurrent((c) => c - 1)}
          className="
             flecha-carrusel-izq-costsR
          "
        >
          <svg viewBox="0 0 24 24" className="h-15 w-15 text-black/70">
            <path
              fill="currentColor"
              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
            />
          </svg>
        </button>

        <button
          aria-label="Next"
          onClick={() => setCurrent((c) => c + 1)}
          className="
            flecha-carrusel-der-costsR
          "
        >
          <svg viewBox="0 0 24 24" className="h-15 w-15 text-black/70">
            <path
              fill="currentColor"
              d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"
            />
          </svg>
        </button>
      </div>
    </Section>
  );
}





