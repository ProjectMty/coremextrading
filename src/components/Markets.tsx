// src/components/markets.tsx
'use client';
import "@/style/markets.css"
import Image from 'next/image';

export default function Markets() {
  const Flecha = ({ color = "" }) => {
    return (
      <div className="contenedor-flecha-markets">
        <div className= "linea-flecha-markets" style={{ backgroundColor: color}} />
        <div className="contenedor-triangulo-markets">
          <div className= "linea-arriba-flecha-markets" style={{ backgroundColor: color}} />
          <div className= "linea-abajo-flecha-markets" style={{ backgroundColor: color}} />
        </div>
      </div>
    )
  }

  const Circulos = ({ color = "" }) => {
    return (
      <div className="flex justify-center content-center items-center">
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className= "circulo-markets" style={{ backgroundColor: color }} ></div>
        ))}
      </div>
    )
  }

  const Row = ({ color = "", img1 = "/img/markets/usa.png", img2 = "/img/markets/mexico.png",
    text1 = "USA", text2 = "MEX"
  }) => {
    return (
      <div className="contenedor-row-markets">
        <Image
          src={`${img1}`}
          alt="Resources img"
          width={50}
          height={50}
          className="img-bandera-markets">
        </Image>
        <p className="estado-markets">{text1}</p>
        <Flecha color={`${color}`} />
        <Circulos color={`${color}`} />
        <Flecha color={`${color}`} />
        <p className="estado-markets">{text2}</p>
        <Image
          src={`${img2}`}
          alt="Resources img"
          width={50}
          height={50}
          className="img-bandera-markets">
        </Image>
      </div>
    )
  }
  return (
    // isolate crea un stacking context; mb separa de la siguiente sección
    <section id="markets" className="section-markets">
      {/* Full-bleed; altura mínima + fondo de respaldo por si falla el SVG */}
      <div className="contenedor-fondo-markets">
        {/* Título */}
        <h2
          className="relative z-[2] mb-3 md:mb-4 text-center font-extrabold tracking-wide text-white
                       drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)]
                       text-[clamp(22px,3.2vw,44px)]"
        >
          MARKETS AND SHIPPING LANES
        </h2>

        <div className="contenedor-gradiente-arriba-markets">
          {/* panel izq */}
          <div className="contenedor-izq-markets">
            <Image
              src="/img/markets/flecha-circulo.svg"
              alt="Resources img"
              width={800}
              height={600}
              className="h-full w-full">
            </Image>
          </div>
          {/* Panel derecho (bg2 + textos) */}
          <div className="contenedor-der-markets">

            {/* Texto 1 */}
            <p className="titulo-markets">
              Marketplace fulfillment Amazon, Mercado Libre, Walmart
            </p>
            <Row color="#022640" img1="/img/markets/usa.png" img2="/img/markets/mexico.png"
              text1="USA" text2="MEX" />

            <Row color="#0f9955" img1="/img/markets/usa.png" img2="/img/markets/canada.png"
              text1="USA" text2="CAN" />

            <Row color="#022640" img1="/img/markets/mexico.png" img2="/img/markets/usa.png"
              text1="MEX" text2="USA" />

            {/* Texto 2 */}
            <p className="titulo-markets">
              Direct to client parcel shipping
            </p>
  <Row color="#022640" img1="/img/markets/usa.png" img2="/img/markets/mexico.png"
              text1="USA" text2="MEX" />

            <Row color="#0f9955" img1="/img/markets/usa.png" img2="/img/markets/canada.png"
              text1="USA" text2="CAN" />

            <Row color="#022640" img1="/img/markets/canada.png" img2="/img/markets/mexico.png"
              text1="CAN" text2="MEX" />

          </div>
        </div>
      </div>

    </section>
  );
}
