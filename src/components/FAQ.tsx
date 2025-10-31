'use client';

import { useState } from 'react';
import "@/style/faq.css"
type QAItem = { q: string; a: string };

const QA: QAItem[] = [
  {
    q: 'Does Core Mex use a platform for shipping? What if I have my own shipping account?',
    a: `Core Mex works with over 600+ sellers who sell on Amazon, Mercado Libre, Walmart, and other retail outlets.
Each client works differently and we tailor our workflow to that. We can work within your platform, we can work
with your shipping account, or we can sell you shipping labels for the last mile delivery.`,
  },
  {
    q: 'What products can we ship with you?',
    a: `Core Mex handles all products sold on Amazon Mexico, Mercado Libre, or other online marketplaces.
With certain exceptions such as weapons, live animals, and high value jewelry, our team processes over
8,000 different packages every day.`,
  },
  {
    q: 'How long does the process take from start to finish?',
    a: `Your buyer in Mexico will receive their package within 10 days from the arrival of their package to our Texas warehouse.`,
  },
  {
    q: 'How is your service different from all the other options?',
    a: `Core Mex is different from all of the other proxy or virtual warehouses in the market today because we are a US and Mexico
based company with real warehouses, real vehicles, and a complete team of industry professionals who process more than 8,000
parcels and 110 pallets each day. We manage international logistics for diverse sales channels, marketplaces, and sellers.
Many virtual warehouses resell our services and rely on us for the answers and logistics processing of your packages. There is
no need to wait for information to be relayed. Get it right from the source. Your package is in our hands, not in a virtual warehouse!`,
  },
  {
    q: 'How does your team service our needs?',
    a: `As soon as you launch operations with us, you will be assigned a logistics concierge who will oversee all of your logistics
and the communication between our teams. We grow with you. Your assigned team with Core Mex grows as your operations grow.
Maybe you need two logistics specialists today, and tomorrow you need 7. We’ve got you covered!`,
  },
  {
    q: 'What happens if my products are lost?',
    a: `Your packages are insured at 100% of the declared value.`,
  },
  {
    q: 'How does billing work?',
    a: `Core Mex invoices you for all of your processed packages once per week. Your payment is due within 2 business days.
Payment options include Zelle, ACH, or wires.`,
  },
];

export default function FAQ() {
  // índice abierto, o null si todos están cerrados
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative pt-10 text-white content-center">
      {/* Fondo full width (se adapta automáticamente a la altura) */}
      <div
        className="absolute inset-0 -z-10 fondo-degradado"
      />
        <h2 className="titulo-section-faq">
          THE MOST IMPORTANT THINGS TO KNOW AND THE REAL ANSWERS!
        </h2>
      <div className="absolute inset-0 -z-10 bg-black/15 fondo-degradado" aria-hidden />

      {/* Contenedor centrado con ancho cómodo para texto largo */}
      <div className="site-container max-w-[1150px] mx-auto fondo-degradado-arriba-faq">
      

        <div className="mt-6 space-y-4">
          {QA.map(({ q, a }, i) => (
            <details
              key={q}
              open={openIndex === i}
              onToggle={(e) => {
                const el = e.currentTarget as HTMLDetailsElement;
                if (el.open) setOpenIndex(i);
                else if (openIndex === i) setOpenIndex(null);
              }}
              className="
                group overflow-hidden
                rounded-2xl md:rounded-3xl
                bg-white/10 backdrop-blur-sm
                ring-1 ring-white/15
                open:bg-white/12
                transition-colors
              "
            >
              <summary
                className="
                  list-none marker:content-none
                  cursor-pointer
                  flex items-center justify-between gap-4
                  px-5 md:px-6
                  min-h-[56px] md:min-h-[60px]
                  py-3
                  text-[15px] md:text-[16px] font-semibold
                "
              >
                <span className="pr-2">{q}</span>
                {/* Chevron */}
                <span
                  className="
                    shrink-0 inline-flex h-8 w-8 items-center justify-center
                    rounded-full bg-white/10 ring-1 ring-white/15
                    transition-transform duration-200
                    group-open:rotate-180
                  "
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </summary>

              <div className="px-5 md:px-6 pb-5 md:pb-6">
                {/* Mantenemos saltos de línea del texto original */}
                <p className="text-white/90 leading-relaxed whitespace-pre-line">
                  {a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
