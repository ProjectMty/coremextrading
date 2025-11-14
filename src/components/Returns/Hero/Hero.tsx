"use client";
import "@/components/Returns/Hero/Hero.css"
import { motion } from 'framer-motion';
import { animateFadeIn } from '@/utils';
import Image from "next/image";

export default function Hero_Returns() {
    return (
        <section className="section-heroR">
            <Image
                src="/img/hero/hero-bg.jpg"
                alt="Fondo"
                fill
                className="img-fondo-heroR">

            </Image>
            <div className="bg-heroR">
                <div className="contenedor-titulo-heroR">
                    <motion.h2 {...animateFadeIn} className="titulo-heroR">
                     RETURNS <br /> MANAGEMENT
                    </motion.h2>
                   
                </div>
                <div className="contenedor-inf-heroR">


                    <motion.h2 {...animateFadeIn} className="subtitulo-heroR">
                        Your sales are growing - yay!! <br /> but so are your returns...
                    </motion.h2>
                    <div >
                        <motion.p {...animateFadeIn} className="texto-heroR">
                            Returns can be overwhelming and burdensome to your business. CoreMex saves you time,
                            increases your bottom line and your client&apos;s satisfaction.
                        </motion.p>
                    </div>
                </div>
            </div>

        </section>
    )
}