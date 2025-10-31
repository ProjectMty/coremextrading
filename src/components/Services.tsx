'use client';

import { useEffect, useState } from 'react';
import "@/style/services.css";
import Image from 'next/image';

type ServiceCard = {
  bg: string;      // color de fondo
  label: string;   // texto encima
  bgClass?: string;
  icon?: string;
};

const ITEMS: ServiceCard[] = [
  { bg: '#006a7a', label: 'Receive parcels from US marketplaces and retailers', icon:'/img/services/Div3.1.svg' },
  { bg: '#007972', label: 'Package consolidation', icon:'/img/services/Div3.2.svg' },
  { bg: '#008866', label: 'Customs clearance into Mexico', icon:'/img/services/Div3.3.svg' },
  {
    bg: '#007972',
    label: 'Label, prep, and deliver to last mile carrier for final delivery to client',
    icon:'/img/services/Div3.4.svg'
  },
  {
    bg: '#006a7a',
    label:
      'Returns logistics: we receive your returns in Mexico and complete reverse logistics to return back to the USA.',
      icon:'/img/services/Div3.5.svg'
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
    <section id="services" className="section-services">
      {/* Fondo full-width */}
      <div className='contenedor-fondo-services'>
        <div className="site-container contenedor-gradiente-superior-services">
          <h2
            className={[
              'titulo-section-services',
              'transition-all duration-700',
              mounted ? 'contenedor-entrada' : 'contenedor-salida',
            ].join(' ')}
            style={{ transitionDelay: `${REVEAL.baseDelay}ms` }}
          >
            SERVICES
          </h2>

          <div className="mt-8">
            {/* Grid responsivo: auto-fit con tarjetas de 180–220px mínimo */}
            <div className="contenedor-tarjetas-services">
              {ITEMS.map((item, i) => (
                <article
                  key={i}
                  className={[
                    'contenedor-tarjeta-services',
                    'transform-body',
                    mounted ? 'contenedor-entrada scale-100' : 'contenedor-salida scale-[0.98]',
                  ].join(' ')}
                  style={{ transitionDelay: `${REVEAL.baseDelay + (i + 1) * REVEAL.step}ms` }}
                >
                  {/* Fondo que cubre TODO y 1px extra para eliminar “hairline” */}
                  <div
                    className={[
                      'fondo-tarjeta-services',
                      item.bgClass ?? '',
                    ].join(' ')}
                    style={{ backgroundColor: item.bg }}
                    aria-hidden
                  />

                  <Image
                  src={item.icon || '/img/services/Div3.1.svg'}
                  alt=""
                  fill
                  className="object-contain pointer-events-none select-none"
                  sizes="(min-width: 768px) 33vw, 92vw"
                  
                  />
                  {/* Texto encima */}
                  <p
                    className="texto-tarjeta-services"
                  >
                    {item.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
