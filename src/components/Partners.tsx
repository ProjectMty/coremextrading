// src/components/Resources.tsx
"use client";
import Image from "next/image";
import "@/style/parthners.css"
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import Amazon from "@/assets/partnership/Amazon.png"
import Walmart from "@/assets/partnership/walmart.png"
import MercadoLibreLogo from "@/assets/partnership/mercado.png";
import Estafeta from "@/assets/partnership/estafeta.png";
import PaqueteExpress from "@/assets/partnership/paqueteExpress2.png";
import TresGuerrasLogo from "@/assets/partnership/tres-guerras.png";
import EnviaLogo from "@/assets/partnership/envia.png";
import FedexLogo from "@/assets/partnership/fedex.png";

const parthners = [
  {
    id:1,
    name: Amazon,
    href: "https://Amazon.com",
    width: 800,
    height: 600
  },
  {
    id:2,
    name: Walmart,
    href: "https://Walmart.com",
     width: 800,
    height: 600
  },
  {
    id:3,
    name: MercadoLibreLogo,
    href: "https://mercadolibre.com",
     width: 100,
    height: 100
  },
  {
    id:4,
    name: Estafeta,
    href: "https://Estafeta.com",
     width: 800,
    height: 600
  },
  {
    id:5,
    name: PaqueteExpress,
    href: "https://PaqueteExpress.com",
     width: 300,
    height: 100
  },
  {
    id:6,
    name: TresGuerrasLogo,
    href: "https://TresGuerrasLogo.com",
     width: 800,
    height: 600
  },
  {
    id:7,
    name: EnviaLogo,
    href: "https://EnviaLogo.com",
     width: 800,
    height: 600
  },
  {
    id:8,
    name: FedexLogo,
    href: "https://FedexLogo.com",
     width: 800,
    height: 600
  },
];
export default function Partners() {
  // Ajusta estos números a la razón de aspecto real del SVG.
  // Mira el viewBox del SVG (por ejemplo, "0 0 1920 960" -> usa aspect-[1920/960]).

  return (
    <section id="partners" className="relative content-center h-full w-full">
      <div className="contenedor-parth">
        <div className="contenedor-fondo-parth">

          <div className="carrusel-movil">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="w-full h-full "
            >
              {parthners.map((logo) => (
                <SwiperSlide key={logo.id}>
                  <div className="logo-hover-path">
                    <Link
                      href={logo.href}
                      target="_blank"
                      rel="noopener noreferrer">
                      <Image
                        src={logo.name}
                        alt="logo"
                        width={logo.width}
                        height={logo.height}
                        className="w-[80%] h-[80%]"
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="carrusel-desktop">


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
      </div>
    </section>
  );
}
