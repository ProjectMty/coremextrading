'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // ⬅️ IMPORTANTE
import SectionBG from './SectionBG';

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const TITLE_LINES = [
  'Commercial Parcel',
  'Shipping from USA to',
  'Mexico for Amazon and',
  'Mercado Libre Sales',
];

export default function HeaderHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <SectionBG src="/img/bg1.png" minH="min-h-[800px]" objectPosition="bg-center">
      {/* NAV */}
      <div className="pt-4 flex items-center justify-between text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
        {/* Logo */}
        <Link
          href="/"
          className={[
            'flex items-center gap-2 transition-all duration-700',
            mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4',
          ].join(' ')}
          style={{ transitionDelay: '80ms' }}
        >
          <Image
            src="/img/logo.svg"
            alt="CoreMex Trading"
            width={180}
            height={40}
            priority
            className="h-7 md:h-8 lg:h-9 w-auto select-none"
          />
          <span className="sr-only">CoreMex Trading</span>
        </Link>

        {/* Nav links */}
        <nav
          className={[
            'hidden md:flex items-center gap-8 transition-all duration-700',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2',
          ].join(' ')}
          style={{ transitionDelay: '160ms' }}
        >
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-white/90 hover:text-white text-sm font-semibold transition-colors"
              style={{ transitionDelay: `${220 + i * 80}ms` }}
            >
              {item.label}
            </a>
          ))}
         
        </nav>
      </div>

      {/* HERO TEXT (igual que antes) */}
      <div
        className={[
          'mt-6 md:mt-40 max-w-[820px] text-white transition-all duration-700',
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
        ].join(' ')}
        style={{ transitionDelay: '220ms' }}
      >
        <h1 className="text-[30px] md:text-[50px] lg:text-[50px] font-extrabold leading-tight">
          {TITLE_LINES.map((line, i) => (
            <span
              key={i}
              className={[
                'block transition-all duration-700 will-change-transform',
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
              ].join(' ')}
              style={{ transitionDelay: `${280 + i * 120}ms` }}
            >
              {line}
            </span>
          ))}
        </h1>

        <div className="mt-3 md:mt-4">
          {["We’re not the same guys.", "We’re the ones who get it done!"].map((line, i) => (
            <p
              key={i}
              className={[
                'text-white/90 text-[16px] md:text-[25px] font-medium transition-all duration-700',
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
              ].join(' ')}
              style={{ transitionDelay: `${TITLE_LINES.length * 120 + 340 + i * 120}ms` }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </SectionBG>
  );
}
