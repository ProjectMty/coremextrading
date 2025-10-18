'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${elevated ? 'backdrop-blur-sm' : ''}`}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo simple (placeholder) */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-brand-green to-brand-blue" />
          <span className="text-white font-extrabold">Core<span className="text-brand-green">Mex</span> Trading</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium ${pathname === item.href ? 'text-white' : 'text-white/90 hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
          
        </nav>

        {/* Mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-gray-900 shadow-soft"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Drawer móvil */}
      <div className={`md:hidden overflow-hidden transition-[max-height,opacity] ${open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container bg-white/95 backdrop-blur rounded-b-2xl py-3 shadow-soft">
          <div className="flex flex-col">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-xl">
                {item.label}
              </a>
            ))}
           
          </div>
        </div>
      </div>
    </header>
  );
}
