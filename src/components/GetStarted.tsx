'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import ShowAnimation from "@/animate/showAnimate";
import { useHoverAnimation } from "@/animate/useHoverAnimation";

/** ===== Knobs (ajústalos libremente) ===== */
const STRIP = {
  maxW: 1200,                         // ancho máximo de la banda
  padY: { base: 18, md: 22 },         // padding vertical
  padX: { base: 16, md: 24 },         // padding horizontal
  gradient: 'linear-gradient(135deg, #0f9855 0%, #022640 55%, #0f9855 100%)',
};

// Alto mínimo de cada cuadro y márgenes internos del texto
const CARD = {
  minH: { base: 170, md: 190 },       // alto mínimo de cada SVG card
  textPadX: { base: 20, md: 24 },     // padding horizontal del texto
  textShiftY: 0,                      // desplazamiento global del texto (px)
};

// Flechas entre cuadros (visibles en md+)
const ARROWS = {
  leftX: '33.5%',   // posición horizontal flecha 1-2
  rightX: '66.5%',  // posición horizontal flecha 2-3
  shiftY: 0,        // desplaza flecha arriba/abajo (px)
  size: 54,         // tamaño del contenedor de la flecha
};

/** ===== Ajustes finos SOLO del texto por tarjeta ===== */
const TEXT = {
  c1: { x: 0, y: -6, maxW: 280, align: 'center' as const }, // “Contact us today!”
  c2: { x: 0, y: 0, maxW: 600, align: 'center' as const }, // párrafo
  c3: { x: 0, y: -6, maxW: 280, align: 'center' as const }, // “Start shipping!”
};

export default function GetStarted() {
  // Activa animación: #contact .reveal -> .reveal.reveal--visible
  useEffect(() => {
    const elements = document.querySelectorAll('#contact .reveal');
    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal--visible');
            io.unobserve(e.target as Element);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const {
    ref: ref1,
    ScaleEnter: ScaleEnter1,
    ScaleLeave: ScaleLeave1,
  } = useHoverAnimation(null, false);

  const {
    ref: ref2,
    ScaleEnter: ScaleEnter2,
    ScaleLeave: ScaleLeave2,
  } = useHoverAnimation(null, false);


  return (
    <section id="contact" className="py-10 md:py-14">
      <ShowAnimation
        delay={0}
        lines={[
          <h2 className="reveal text-center text-[28px] md:text-[50px] font-bold tracking-wide text-[#006a7a]">
            HOW TO GET STARTED
          </h2>]}
      >
      </ShowAnimation>


      <div
        className="reveal relative mx-auto mt-6 md:mt-8 rounded-[26px] shadow-[0_16px_30px_rgba(0,0,0,0.35)]
        bg-gradient-to-r from-[#0f9855] via-[#022740]  to-[#0f9655]"
        style={{
          maxWidth: STRIP.maxW,
          padding: `${STRIP.padY.base}px ${STRIP.padX.base}px`,

        }}
      >
        {/* incrementa suavemente el padding en md */}
        <div
          style={{
            padding: `${STRIP.padY.md - STRIP.padY.base}px ${STRIP.padX.md - STRIP.padX.base
              }px`,
          }}
        >
          {/* 3 columnas en md+, stacked en mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* --------- CARD 1 --------- */}
            <article
              className="reveal relative rounded-[18px] md:min-h-[190px]"
              style={{ minHeight: CARD.minH.base }}
              >
              <div className="relative w-full h-full"
                >
                <Image
                  src="/img/how/cuadro1.svg"
                  alt=""
                  fill
                  className="object-contain  select-none"
                  sizes="(min-width: 768px) 33vw, 92vw"

                  priority
                />
              </div>

              {/* TEXTO – usa knobs de TEXT.c1 */}
              <div
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(calc(-50% + ${TEXT.c1.x}px), calc(-50% + ${TEXT.c1.y + CARD.textShiftY
                    }px))`,
                  maxWidth: TEXT.c1.maxW,
                  padding: `0 ${CARD.textPadX.base}px`,
                }}
               
                
              >
                <h3
                  className={[
                    'text-white font-extrabold leading-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)]',
                    TEXT.c1.align === 'center' ? 'text-center' : 'text-left',
                    'text-[clamp(22px,2.1vw,28px)]',
                  ].join(' ')}
                >
                  Contact us
                  <br />
                  today!
                </h3>
              </div>
            </article>

            {/* --------- CARD 2 --------- */}
            <article
              className="reveal relative rounded-[18px] md:min-h-[190px]"
              style={{ minHeight: CARD.minH.base }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/img/how/cuadro2.svg"
                  alt=""
                  fill
                  className="object-contain pointer-events-none select-none"
                  sizes="(min-width: 768px) 33vw, 92vw"
                  priority
                />
              </div>

              {/* TEXTO – usa knobs de TEXT.c2 */}
              <div
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(calc(-50% + ${TEXT.c2.x}px), calc(-50% + ${TEXT.c2.y + CARD.textShiftY
                    }px))`,
                  maxWidth: TEXT.c2.maxW,
                  padding: `0 ${CARD.textPadX.base}px`,
                }}
              >
                <p
                  className={[
                    'text-white font-semibold leading-snug drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)]',
                    TEXT.c2.align === 'center' ? 'text-center' : 'text-left',
                    'text-[clamp(14px,1.0vw,13px)]',
                  ].join(' ')}
                >
                  Core Mex will set up your account so you can ship immediately.
                  We can integrate into your system via API or we can work with
                  our customized solution.
                </p>
              </div>
            </article>

            {/* --------- CARD 3 --------- */}
            <article
              className="reveal relative rounded-[18px] md:min-h-[190px]"
              style={{ minHeight: CARD.minH.base }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/img/how/cuadro3.svg"
                  alt=""
                  fill
                  className="object-contain pointer-events-none select-none"
                  sizes="(min-width: 768px) 33vw, 92vw"
                  priority
                />
              </div>

              {/* TEXTO – usa knobs de TEXT.c3 */}
              <div
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(calc(-50% + ${TEXT.c3.x}px), calc(-50% + ${TEXT.c3.y + CARD.textShiftY
                    }px))`,
                  maxWidth: TEXT.c3.maxW,
                  padding: `0 ${CARD.textPadX.base}px`,
                }}
              >
                <h3
                  className={[
                    'text-white font-extrabold leading-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)]',
                    TEXT.c3.align === 'center' ? 'text-center' : 'text-left',
                    'text-[clamp(22px,2.1vw,28px)]',
                  ].join(' ')}
                >
                  Start
                  <br />
                  shipping!
                </h3>
              </div>
            </article>
          </div>
        </div>

        {/* FLECHAS (solo en md+) */}
        <div className="hidden md:block">
          {/* entre 1 y 2 */}
          <div
            className="reveal absolute -translate-x-1/2 -translate-y-1/2 z-10"
            style={{
              left: ARROWS.leftX,
              top: `calc(50% + ${ARROWS.shiftY}px)`,
              width: ARROWS.size,
              height: ARROWS.size,
            }}
          >
            <Image
              src="/img/how/flecha.svg"
              alt=""
              fill
              className="object-contain drop-shadow-[0_8px_14px_rgba(0,0,0,0.35)] pointer-events-none select-none"
            />
          </div>

          {/* entre 2 y 3 */}
          <div
            className="reveal absolute -translate-x-1/2 -translate-y-1/2 z-10"
            style={{
              left: ARROWS.rightX,
              top: `calc(50% + ${ARROWS.shiftY}px)`,
              width: ARROWS.size,
              height: ARROWS.size,
            }}
          >
            <Image
              src="/img/how/flecha.svg"
              alt=""
              fill
              className="object-contain drop-shadow-[0_8px_14px_rgba(0,0,0,0.35)] pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
