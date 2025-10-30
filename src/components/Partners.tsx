// src/components/Resources.tsx
import Image from "next/image";
import "@/style/parthners.css"
import Link from "next/link";

import Amazon from "@/assets/partnership/Amazon.png"
import Walmart from "@/assets/partnership/walmart.png"
import MercadoLibreLogo from "@/assets/partnership/mercado.png";
import Estafeta from "@/assets/partnership/estafeta.png";
import PaqueteExpress from "@/assets/partnership/paqueteExpress.png";
import TresGuerrasLogo from "@/assets/partnership/tres-guerras.png";
import EnviaLogo from "@/assets/partnership/envia.png";
import FedexLogo from "@/assets/partnership/fedex.png";


export default function Partners() {
  // Ajusta estos números a la razón de aspecto real del SVG.
  // Mira el viewBox del SVG (por ejemplo, "0 0 1920 960" -> usa aspect-[1920/960]).
  return (
    <section id="partners" className="relative content-center">
      <div
        className="
          relative mx-auto w-full
          max-w-[3000px]           /* limite opcional del ancho máximo */
          aspect-[2080/450]       /* AJUSTA según el viewBox de tu SVG */
        "
      >
        <div className="contenedor-fondo-parth">
          {/* AMAZON */}
          <div className="logo-hover-path">
            <Link
              href="https://mercadolibre.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Amazon}
                alt="Amazon Logo"
                width={800}
                height={600}
                className="w-full"
              />
            </Link>
          </div>

          {/* WALMART */}
          <div className="logo-hover-path">
            <Link
              href="https://mercadolibre.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Walmart}
                alt="MercadoLibre Logo"
                width={800}
                height={600}
                className="w-full"
              />
            </Link>
          </div>

          {/* MERCADO LIBRE */}
          <div className="logo-hover-path">
            <Link
              href="https://mercadolibre.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={MercadoLibreLogo}
                alt="MercadoLibre Logo"
                width={800}
                height={600}
                className="w-full"
              />
            </Link>
          </div>

          {/* ESTAFETA */}
          <div className="logo-hover-path">
            <Link
              href="https://mercadolibre.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Estafeta}
                alt="estafeta Logo"
                width={800}
                height={600}
                className="w-full"
              />
            </Link>
          </div>

          {/* PAQUETE EXPRESS */}
          <div className="logo-hover-path">
            <Link
              href="https://mercadolibre.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={PaqueteExpress}
                alt="PaqueteExpress Logo"
                width={800}
                height={600}
                className="w-full"
              />
            </Link>
          </div>
<div></div>
          {/* Fedex */}
          <div className="logo-hover-path">
            <Link
              href="https://fedex.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={FedexLogo}
                alt="Fedex Logo"
                width={800}
                height={600}
                className="w-full"
              />
            </Link>
          </div>

          {/* TRESGUERRAS */}
          <div className="logo-hover-path">
            <Link
              href="https://www.tresguerras.com.mx/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={TresGuerrasLogo}
                alt="TresGuerras Logo"
                width={800}
                height={600}
                className="w-full"
              />
            </Link>
          </div>
          {/* Envia */}
          <div className="logo-hover-path">
            <Link
              href="https://envia.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={EnviaLogo}
                alt="Envia Logo"
                width={475}
                height={106}
                className="w-full"
              />
            </Link>
          </div>




        </div>
      </div>
    </section>
  );
}
