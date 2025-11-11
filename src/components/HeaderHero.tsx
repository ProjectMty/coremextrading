'use client';

import { useEffect, useState, Fragment, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // ⬅️ IMPORTANTE
import "@/style/headerHero.css"
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useHoverAnimation } from "@/animate/useHoverAnimation";


const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const TITLE_LINES = [
  'Commercial Parcel Shipping',
  'from USA to Mexico for',
  'Amazon and Mercado',
  'Libre Sales',
];

export default function HeaderHero() {
  const [mounted, setMounted] = useState(false);
  const { ref, ScaleEnter, ScaleLeave } = useHoverAnimation(null, false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);


  return (

    <section className='fondo-section'>
    

      {/* #region HERO */}
      <div className='fondo-titulo'>
        <div
          className={['contenedor-titulo-hero',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
          ].join(' ')}
          style={{ transitionDelay: '220ms' }}
        >
          <h1 className="contenedor-text-titulo-hero">
            {TITLE_LINES.map((line, i) => (
              <span
                key={i}
                className={[
                  'texto-titulo-hero',
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
                ].join(' ')}
                style={{ transitionDelay: `${280 + i * 120}ms` }}
              >
                {line}
              </span>
            ))}
          </h1>

          <div className="contenedor-subtitulo-hero">
            {["We’re not the same guys.", "We’re the ones who get it done!"].map((line, i) => (
              <p
                key={i}
                className={[
                  'subtitulo-hero',
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
                ].join(' ')}
                style={{ transitionDelay: `${TITLE_LINES.length * 120 + 340 + i * 120}ms` }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <Image
        ref={ref}
        src="/img/hero/planeta.png"
        alt="planeta"
        width={300}
        height={300}
        className='img-planeta'
        onMouseEnter={ScaleEnter}
        onMouseLeave={ScaleLeave}
      />

      {/* #endregion */}
    </section>
  );
}
