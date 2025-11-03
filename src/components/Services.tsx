'use client';

import { useEffect, useState } from 'react';
import "@/style/services.css";

import Card from "@/components/extras/card"
import { useHoverAnimation } from "@/animate/useHoverAnimation";

type ServiceCard = {
  bg: string;      // color de fondo
  label: string;   // texto encima
  bgClass?: string;
  icon?: string;
};

const ITEMS: ServiceCard[] = [
  { bg: '#006a7a', label: 'Receive parcels from US marketplaces and retailers', icon: '/img/services/Div3.1.svg' },
  { bg: '#007972', label: 'Package consolidation', icon: '/img/services/Div3.2.svg' },
  { bg: '#008866', label: 'Customs clearance into Mexico', icon: '/img/services/Div3.3.svg' },
  {
    bg: '#007972',
    label: 'Label, prep, and deliver to last mile carrier for final delivery to client',
    icon: '/img/services/Div3.4.svg'
  },
  {
    bg: '#006a7a',
    label:
      'Returns logistics: we receive your returns in Mexico and complete reverse logistics to return back to the USA.',
    icon: '/img/services/Div3.5.svg'
  },
];

// Knobs de animación
const REVEAL = {
  baseDelay: 120, // ms
  step: 200,       // ms por tarjeta
};


export default function Services() {
  const [mounted, setMounted] = useState(false);
    const { ref, ScaleEnter, ScaleLeave
   } = useHoverAnimation(null, false);
 
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
          <div className="contenedor-flecha-services"
           ref={ref}
                onMouseEnter={ScaleEnter}
                onMouseLeave={ScaleLeave}
          >
            <div className="linea-flecha-services "></div>
            <div className="contenedor-triangulo-services">
              <div className="linea-arriba-flecha-services "></div>
              <div className="linea-abajo-flecha-services "></div>
            </div>
          </div>

          <div className="mt-8">
            {/* Grid responsivo: auto-fit con tarjetas de 180–220px mínimo */}
            <div className="contenedor-tarjetas-services">
              {ITEMS.map((item, i) => (
                <Card
                  key={i}
                  item={item}
                  delay={REVEAL.baseDelay + (i + 1) * REVEAL.step}
                  mounted={mounted}
                ></Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
