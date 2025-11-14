"use client";
import Image from 'next/image';
import clsx from 'clsx';
import { animateFadeIn, animateIconsChild, animateIconsParent } from '@/utils';
import { motion } from 'framer-motion';
import "@/components/Returns/Processing/Processing.css"
import DivZoom from '@/components/Animate/DivZoom';

const process = [
    {
        id: '1',
        description: 'Return to seller upon arrival',
        linea: 'linea-processingR'
    },

    {
        id: '2',
        description: 'Consolidate and return to seller',
        linea: 'linea-processingR'
    },
    {
        id: '3',
        description: 'Repackage and ship to 3rd party',
        linea: 'linea-processingR'
    },
    {
        id: '4',
        description: 'Repackage, create new SKU, and send to FBA',
        linea: 'linea-processingR'
    },
    {
        id: '5',
        description: 'Ressell to wholesalers',
        linea: 'linea-processingR'
    },
    {
        id: '6',
        description: 'Donate',
        linea: 'linea-processingR'
    },
    {
        id: '7',
        description: 'Dispose',
        linea: 'flecha-processingR'
    },

];

export default function Processing_Returns() {
    return (
        <section className='section-procesingR'>
            <div className='contenedor-titulo-processingR'>
                <motion.h3 {...animateFadeIn} className='titulo-processingR'>
                    WHAT ARE THE PROCESSING OPTIONS?
                </motion.h3>
                <motion.h3 {...animateFadeIn} className='subtitulo-processingR'>
                    We work with RMA, RGA forms, or any other form of integration to update your returns in real time.
                </motion.h3>
            </div>
            <div>

            </div>
            <div className='flex justify-around'>
                <motion.ul
                    {...animateIconsParent}
                    className='contenedor-lista-processingR'
                >
                    {process.map(({ id, description, linea }) => (
                        <motion.li key={id} id={id} className='contenedor-item-processingR' {...animateIconsChild}>
                            <div className={linea}></div>
                            <DivZoom scale={1.3}>
                                <div className='grafico-processingR'>{id}</div>
                            </DivZoom>
                            <div className='description-item-processingR'>
                                <DivZoom
                                    scale={1.2}>
                                    <p>{description}</p>
                                </DivZoom>
                            </div>

                        </motion.li>
                    ))}
                </motion.ul>
            </div>

        </section>
    )
}