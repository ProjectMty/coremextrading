// src/components/Resources.tsx
import Image from "next/image";
import "@/style/resources.css";

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
  return (
    <section id="resources" className="section-resources">
      <div className="contenedor-fondo-resources">
        <div className="contenedor-grid1-resources">
          <Image
            src="/img/resources/location.png"
            alt="Resources img"
            width={600}
            height={600}
            className="h-full w-full"

          />
        </div>
        <div className="contenedor-grid2-resources">
          <h1 className="titulo-grid2-resources">RESOURCES</h1>
          <p className="subtitulo-grid2-resources">Count on OUR resources and infrastructure to
            work for you!</p>

          {ITEMS.map((item, i) => (
            <article key={i} className="flex flex-cols-2 px-2">
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
