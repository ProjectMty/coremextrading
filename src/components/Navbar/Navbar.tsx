'use client';

import Link from 'next/link';
import { useEffect, useState, Fragment, useRef } from 'react';
import Image from 'next/image'; // ⬅️ IMPORTANTE
import "@/style/headerHero.css"
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
  { label: 'Returns', href: '/returns'}
];


export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section>
      <div className="navbar">
        {/* Logo */}
        <Link
          href="/"
          className={[
            'logo-navbar',
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
            className={mobileMenuOpen ? "hidden" : "img-navbar"}
          />
          <span className="sr-only">CoreMex Trading</span>
        </Link>

        {/* Nav links */}
        <nav className={[
          'contenedor-links-navbar',
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2',
        ].join(' ')}
          style={{ transitionDelay: '160ms' }}
        >
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="link-navbar"
              style={{ transitionDelay: `${220 + i * 80}ms` }}
            >
              {item.label}
            </a>
          ))}

        </nav>
        <button ></button>
        <div className="lg:hidden p-2 rounded-md">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-white"
            aria-label="Abrir menú"
          >
            <Bars3Icon className={`h-10 w-10 ${mobileMenuOpen ? "hidden" : " block"}`} ></Bars3Icon>
          </button>
        </div>
      </div>
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="block"
          onClose={setMobileMenuOpen}
        >
          {/* Fondo oscuro */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 z-40" />
          </Transition.Child>

          {/* Panel*/}
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-out duration-300"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transform transition ease-in duration-200"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-full opacity-0"
          >
            <Dialog.Panel className="contenedor-panle-navbar">
              <div className="panel-navbar">

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-blue-900"
                  aria-label="Cerrar menú"
                >
                  <XMarkIcon className="icon-xmark-navbar" />
                </button>
              </div>

              <div className="contenedor-links-panel-navbar">
                {NAV.map((item, i) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="link-panel-navbar"
                    style={{ transitionDelay: `${220 + i * 80}ms` }}
                  >
                    {item.label}
                  </a>
                ))}

              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>


    </section>
  );
}
