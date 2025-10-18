'use client';

import { useEffect } from "react";
import Image from "next/image";

/* ===============================
   KNOBS: posiciones y tamaños
   =============================== */

// Fondo (SECTION)
const BG_HEIGHT = { base: 510, md: 550, lg: 500 };
const BG_POS = "center 60%";
const BG_SIZE = "cover";

// Imagen izquierda (contact1.png)
const LEFT_POS = {
  width: 370,
  top: 90,
  left: 50,
};

// Imagen derecha (contact2.png)
const RIGHT_POS = {
  width: 650,
  top: 100,
  right: -50,
};

// Textos sobre la tarjeta izquierda
const LEFT_TEXT = {
  titleX: 27,
  titleY: 28,
  titleMaxW: 230,
  phoneX: 108,
  phoneY: 150,
  webX: 108,
  webY: 200,
  mailX: 108,
  mailY: 250,
  titleSizeClamp: "clamp(18px,2.4vw,28px)",
  lineSizeClamp: "clamp(13px,1.3vw,16px)",
};

// Texto sobre la tarjeta derecha (línea de dirección)
const RIGHT_TEXT = {
  x: 40,
  y: 36,
  maxW: 560,
  sizeClamp: "clamp(12px,1.1vw,16px)",
};

// ✨ Logo en la tarjeta derecha (abajo-derecha)
const RIGHT_LOGO = {
  wClamp: "clamp(150px,16vw,260px)", // ancho responsivo
  right: 32,                          // separación desde el borde derecho (px)
  bottom: 26,                         // separación desde el borde inferior (px)
  aspect: 260 / 84,                   // relación de aspecto aproximada del logo
};

export default function Contact() {
  // Revelado al hacer scroll
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('#contact');
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('reveal--visible');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.2 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="contact"
      style={{
        ["--bg-h-base" as any]: `${BG_HEIGHT.base}px`,
        ["--bg-h-md" as any]: `${BG_HEIGHT.md}px`,
        ["--bg-h-lg" as any]: `${BG_HEIGHT.lg}px`,
        ["--left-w" as any]: `${LEFT_POS.width}px`,
        ["--left-top" as any]: `${LEFT_POS.top}px`,
        ["--left-left" as any]: `${LEFT_POS.left}px`,
        ["--right-w" as any]: `${RIGHT_POS.width}px`,
        ["--right-top" as any]: `${RIGHT_POS.top}px`,
        ["--right-right" as any]: `${RIGHT_POS.right}px`,
      }}
      className="
        relative w-full
        min-h-[var(--bg-h-base)]
        md:min-h-[var(--bg-h-md)]
        lg:min-h-[var(--bg-h-lg)]
      "
    >
      {/* Fondo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/img/contact/contact.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: BG_SIZE,
          backgroundPosition: BG_POS,
        }}
      />

      {/* Contenido */}
      <div className="relative mx-auto w-full max-w-[1280px] px-4 md:px-6 lg:px-8 h-full">
        <div className="relative h-full">
          {/* ---------- IZQUIERDA ---------- */}
          <div
            className="
              relative mx-auto mt-8 w-[92%] max-w-[820px]
              md:absolute md:mx-0
              md:w-[var(--left-w)]
              md:top-[var(--left-top)]
              md:left-[var(--left-left)]
              reveal
            "
            style={{
              ["--lt-title-x" as any]: `${LEFT_TEXT.titleX}px`,
              ["--lt-title-y" as any]: `${LEFT_TEXT.titleY}px`,
              ["--lt-title-mw" as any]: `${LEFT_TEXT.titleMaxW}px`,
              ["--lt-phone-x" as any]: `${LEFT_TEXT.phoneX}px`,
              ["--lt-phone-y" as any]: `${LEFT_TEXT.phoneY}px`,
              ["--lt-web-x" as any]: `${LEFT_TEXT.webX}px`,
              ["--lt-web-y" as any]: `${LEFT_TEXT.webY}px`,
              ["--lt-mail-x" as any]: `${LEFT_TEXT.mailX}px`,
              ["--lt-mail-y" as any]: `${LEFT_TEXT.mailY}px`,
              animationDelay: '0ms',
            }}
          >
            <Image
              src="/img/contact/contact1.png"
              alt=""
              width={LEFT_POS.width}
              height={Math.round(LEFT_POS.width * 0.72)}
              priority
              className="w-full h-auto pointer-events-none select-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
            />

            {/* overlay de textos */}
            <div className="pointer-events-none absolute inset-0 text-black/85 reveal" style={{ animationDelay: '120ms' }}>
              <h3
                className="absolute font-extrabold leading-tight"
                style={{
                  left: "var(--lt-title-x)",
                  top: "var(--lt-title-y)",
                  maxWidth: "var(--lt-title-mw)",
                  fontSize: LEFT_TEXT.titleSizeClamp as any,
                }}
              >
                Contact us
                <br />to get started
                <br />today
              </h3>

              <p
                className="absolute"
                style={{
                  left: "var(--lt-phone-x)",
                  top: "var(--lt-phone-y)",
                  fontSize: LEFT_TEXT.lineSizeClamp as any,
                }}
              >
                +1 (210) 774-7644
              </p>

              <p
                className="absolute"
                style={{
                  left: "var(--lt-web-x)",
                  top: "var(--lt-web-y)",
                  fontSize: LEFT_TEXT.lineSizeClamp as any,
                }}
              >
                www.coremextrading.com
              </p>

              <p
                className="absolute"
                style={{
                  left: "var(--lt-mail-x)",
                  top: "var(--lt-mail-y)",
                  fontSize: LEFT_TEXT.lineSizeClamp as any,
                }}
              >
                usamex@coremextrading.com
              </p>
            </div>
          </div>

          {/* ---------- DERECHA ---------- */}
          <div
            className="
              relative mx-auto mt-6 w-[92%] max-w-[1200px]
              md:absolute md:mx-0
              md:w-[var(--right-w)]
              md:top-[var(--right-top)]
              md:right-[var(--right-right)]
              reveal
            "
            style={{
              ["--rt-x" as any]: `${RIGHT_TEXT.x}px`,
              ["--rt-y" as any]: `${RIGHT_TEXT.y}px`,
              ["--rt-mw" as any]: `${RIGHT_TEXT.maxW}px`,
              // vars del logo
              ["--logo-w" as any]: RIGHT_LOGO.wClamp,
              ["--logo-right" as any]: `${RIGHT_LOGO.right}px`,
              ["--logo-bottom" as any]: `${RIGHT_LOGO.bottom}px`,
              animationDelay: '80ms',
            }}
          >
            <Image
              src="/img/contact/contact2.png"
              alt=""
              width={RIGHT_POS.width}
              height={Math.round(RIGHT_POS.width * 0.5)}
              priority
              className="w-full h-auto pointer-events-none select-none drop-shadow-[0_16px_28px_rgba(0,0,0,0.40)]"
            />

            {/* Dirección (arriba-izquierda) */}
            <div className="pointer-events-none absolute inset-0 reveal" style={{ animationDelay: '220ms' }}>
              <p
                className="absolute text-white/90"
                style={{
                  left: "var(--rt-x)",
                  top: "var(--rt-y)",
                  maxWidth: "var(--rt-mw)",
                  fontSize: RIGHT_TEXT.sizeClamp as any,
                }}
              >
                Core Mex Trading · 6019 Riverside DrLaredo, TX 78041
              </p>
            </div>

            {/* ✅ Logo (abajo-derecha) */}
            <div
              className="pointer-events-none absolute reveal"
              style={{
                right: "var(--logo-right)",
                bottom: "var(--logo-bottom)",
                width: "var(--logo-w)",
                aspectRatio: String(RIGHT_LOGO.aspect),
                animationDelay: '200ms',
              }}
            >
              <Image
                src="/img/logo.svg"
                alt="CoreMex Trading"
                fill
                priority
                className="object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
