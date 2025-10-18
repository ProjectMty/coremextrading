// src/components/Resources.tsx
import Image from "next/image";

export default function Partners() {
  // Ajusta estos números a la razón de aspecto real del SVG.
  // Mira el viewBox del SVG (por ejemplo, "0 0 1920 960" -> usa aspect-[1920/960]).
  return (
    <section id="partners" className="relative">
      <div
        className="
          relative mx-auto w-full
          max-w-[3000px]           /* limite opcional del ancho máximo */
          aspect-[2080/450]       /* AJUSTA según el viewBox de tu SVG */
        "
      >
        <Image
          src="/img/partners/bg7.svg"
          alt="Partners, how to get started, and contact"
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
