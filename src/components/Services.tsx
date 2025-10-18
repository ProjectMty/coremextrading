'use client';

import { useEffect, useState } from 'react';

type ServiceCard = {
  bg: string;      // imagen para el fondo (svg/png)
  label: string;   // texto encima
  bgClass?: string;
};

const ITEMS: ServiceCard[] = [
  { bg: '/img/services/Div3.1.svg', label: 'Receive parcels from US marketplaces and retailers' },
  { bg: '/img/services/Div3.2.svg', label: 'Package consolidation' },
  { bg: '/img/services/Div3.3.svg', label: 'Customs clearance into Mexico' },
  {
    bg: '/img/services/Div3.4.svg',
    label: 'Label, prep, and deliver to last mile carrier for final delivery to client',
  },
  {
    bg: '/img/services/Div3.5.svg',
    label:
      'Returns logistics: we receive your returns in Mexico and complete reverse logistics to return back to the USA.',
  },
];

// Knobs de animación
const REVEAL = {
  baseDelay: 120, // ms
  step: 90,       // ms por tarjeta
};

export default function Services() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="services" className="relative py-12 md:py-16">
      {/* Fondo full-width */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/img/services/bg2.png')" }}
        aria-hidden
      />

      <div className="site-container">
        <h2
          className={[
            'text-center text-white font-extrabold tracking-wide',
            'text-[28px] md:text-[40px]',
            'transition-all duration-700',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
          ].join(' ')}
          style={{ transitionDelay: `${REVEAL.baseDelay}ms` }}
        >
          SERVICES
        </h2>

        <div className="mt-8">
          {/* Grid responsivo: auto-fit con tarjetas de 180–220px mínimo */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5 md:gap-7">
            {ITEMS.map((item, i) => (
              <article
                key={i}
                className={[
                  'relative isolate overflow-hidden rounded-[22px]',
                  'shadow-[0_8px_18px_rgba(0,0,0,0.28)]',
                  'transition-all duration-700 will-change-transform',
                  'hover:-translate-y-0.5',
                  'h-[200px] sm:h-[210px] md:h-[230px] lg:h-[240px]',
                  'bg-transparent',
                  mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-[0.98]',
                ].join(' ')}
                style={{ transitionDelay: `${REVEAL.baseDelay + (i + 1) * REVEAL.step}ms` }}
              >
                {/* Fondo que cubre TODO y 1px extra para eliminar “hairline” */}
                <div
                  className={[
                    'absolute -inset-[1px] rounded-[22px]',
                    'bg-center bg-no-repeat',
                    'bg-[length:102%_102%]',        // estira un poco para tapar bordes
                    'pointer-events-none select-none',
                    item.bgClass ?? '',
                  ].join(' ')}
                  style={{ backgroundImage: `url('${item.bg}')` }}
                  aria-hidden
                />

                {/* Texto encima */}
                <p
                  className="
                    absolute inset-x-3 bottom-3
                    text-center text-white
                    text-[12.5px] md:text-[13px] leading-snug
                    drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]
                  "
                >
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
