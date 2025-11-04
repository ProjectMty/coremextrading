// src/components/Resources.tsx
'use client';

import Image from "next/image";
import "@/style/resources.css";
import { useHoverAnimation } from "@/animate/useHoverAnimation";
import { useEffect, useState, Fragment, useRef } from 'react';
import ShowAnimation from "@/animate/showAnimate";


type cardRow = {
  bg: string;
  label: string;
};

const ITEMS: cardRow[] = [
  { bg: '#0f9855', label: 'Four dedicated warehouses in the United States' },
  { bg: '#008866', label: 'Seven operations segmented warehouses in Mexico' },
  {
    bg: '#007972',
    label: 'Dependable fleet of 71 vehicles including dry vans, 53 trailers, and box trucks.'
  },
  {
    bg: '#006a7a',
    label: 'Experienced team of 80+ industry professionals',
  },
  {
    bg: '#002c58',
    label:
      'Vast network of local industry contacts, suppliers, and service providers',
  },
];


export default function Resources() {
  // Ajusta estos números a la razón de aspecto real del SVG.
  // Mira el viewBox del SVG (por ejemplo, "0 0 1920 960" -> usa aspect-[1920/960]).
  const { ref, ScaleEnter, ScaleLeave } = useHoverAnimation(null, false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="resources" className="section-resources">
      <div className="contenedor-fondo-resources">
        <div className="contenedor-grid1-resources">
          <Image
            ref={ref}
            src="/img/resources/location.png"
            alt="Resources img"
            width={600}
            height={600}
            className="img-grid1-resources"
            onMouseEnter={ScaleEnter}
            onMouseLeave={ScaleLeave}
          />
        </div>
        <div className="contenedor-grid2-resources group">
          <ShowAnimation
            lines={[
              <h2 key={1} className="titulo-grid2-resources">
                RESOURCES
              </h2>]}
          >
          </ShowAnimation>

          <ShowAnimation
            delay={350}
            lines={[
              <h2 key={1} className="subtitulo-grid2-resources">
                Count on OUR resources and infrastructure to
                work for you!
              </h2>]}
          >
          </ShowAnimation>



          {ITEMS.map((item, i) => (
            <article key={i}
              className={['contenedor-paso-resource transition-all duration-1000',
                mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3',
              ].join(' ')}
              
            >
              <div className="contenedor-flecha-resources">
                <div className="linea-flecha-resources shadow-flecha-resources"
                  style={{ backgroundColor: item.bg }}></div>
                <div className="contenedor-triangulo-resources">
                  <div className="linea-arriba-flecha-resources shadow-flecha-resources"
                    style={{ backgroundColor: item.bg }}></div>
                  <div className="linea-abajo-flecha-resources shadow-flecha-resources"
                    style={{ backgroundColor: item.bg }}></div>
                </div>
              </div>
              <div
                className="contenedor-paso-grid2-resources"
                style={{ backgroundColor: item.bg }}
              >
                <p className="label-grid2-resources">
                  {item.label}
                </p>

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
