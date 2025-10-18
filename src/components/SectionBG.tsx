import type { ReactNode } from 'react';

type Props = {
  /** Ruta pública, ej: "/img/Div1.png" */
  src: string;
  /** Clase de alto mínimo (Tailwind) */
  minH?: string;
  className?: string;
  /** "bg-left" | "bg-center" | "bg-right" */
  objectPosition?: 'bg-left' | 'bg-center' | 'bg-right';
  children: ReactNode;
};

export default function SectionBG({
  src,
  minH = 'min-h-[400px]',
  className = '',
  objectPosition = 'bg-center',
  children,
}: Props) {
  return (
    <section className={`relative isolate ${minH} ${className}`}>
      {/* Fondo por CSS (no Next/Image) */}
      <div
        className={`absolute inset-0 -z-10 bg-no-repeat bg-cover ${objectPosition}`}
        style={{ backgroundImage: `url('${src}')` }}
        aria-hidden="true"
      />
      {/* Contenido centrado */}
      <div className="site-container h-full flex flex-col">
        {children}
      </div>
    </section>
  );
}
