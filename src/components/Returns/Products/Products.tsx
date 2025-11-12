"use client";
import "@/components/Returns/Products/Products.css"
import ProductsList from '@/components/extras/products-list';
import {
    faBabyCarriage,
    faBlender,
    faCarBattery,
    faCookieBite,
    faCouch,
    faGem,
    faMugSaucer,
    faPlug,
    faPuzzlePiece,
    faScrewdriverWrench,
    faShirt,
    faTableTennisPaddleBall,
    faToiletPortable,
} from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import clsx from 'clsx';
import { animateFadeIn, animateIconsChild, animateIconsParent } from '@/utils';
import { motion } from 'framer-motion';

const products = [
    {
        id: 'products1',
        icon: faPlug,
        description: 'Consumer electronics',
    },
    {
        id: 'products2',
        icon: faPuzzlePiece,
        description: 'Toys',
    },
    {
        id: 'products3',
        icon: faShirt,
        description: (
            <>
                Apparel <br />
                (clothing and footwear)
            </>
        ),
    },
    {
        id: 'products4',
        icon: faGem,
        description: 'Fashion jewelry',
    },
    {
        id: 'products5',
        icon: faTableTennisPaddleBall,
        description: 'Sporting goods',
    },
    {
        id: 'products6',
        icon: faMugSaucer,
        description: 'Housewares',
    },
    {
        id: 'products7',
        icon: faBabyCarriage,
        description: 'Baby items',
    },
    {
        id: 'products8',
        icon: faCookieBite,
        description: 'Food',
    },
    {
        id: 'products9',
        icon: faScrewdriverWrench,
        description: 'Tools',
    },
    {
        id: 'products10',
        icon: faCarBattery,
        description: 'Small machinery',
    },
    {
        id: 'products11',
        icon: faBlender,
        description: 'Small appliances',
    },
    {
        id: 'products12',
        icon: faCouch,
        description: 'Furniture',
    },
    {
        id: 'products13',
        icon: faToiletPortable,
        description: 'Appliances',
    },
];

const process = [
    {
        id: 'process1',
        icon: "/returns/products/processing-options-1.svg",
        description: 'Return to seller upon arrival',
        color: 'primary',
    },
    {
        id: 'process2',
        icon: "/returns/products/processing-options-5.svg",
        description: 'Resell to wholesalers',
        color: 'secondary',
    },
    {
        id: 'process3',
        icon:
            "/returns/products/processing-options-2.svg",
        description: 'Consolidate and return to seller',
        color: 'primary',
    },
    {
        id: 'process4',
        icon: "/returns/products/processing-options-6.svg",
        description: 'Donate',
        color: 'secondary',
    },
    {
        id: 'process5',
        icon: "/returns/products/processing-options-3.svg",
        description: 'Repackage and ship to 3rd party',
        color: 'primary',
    },
    {
        id: 'process6',
        icon: "/returns/products/processing-options-7.svg",
        description: 'Dispose',
        color: 'secondary',
    },
    {
        id: 'process7',
        icon: "/returns/products/processing-options-4.svg",
        description: 'Repackage, create new SKU, and send to FBA',
        color: 'primary',
    },
];

export default function Products_Returns() {
    return (
        <section className="section-productsR">
         
                <motion.h3 {...animateFadeIn} className='titulo-productsR'>
                    WHAT PRODUCTS DO WE HAVE?
                </motion.h3>
                <motion.h3 {...animateFadeIn} className='subtitulo-productsR'>
                    We service returns from Amazon FBA, Mercado Libre, or parcel shipments direct to client.
                </motion.h3>
                <div className='flex justify-around'>
                    <ProductsList products={products} />
                </div>
                <motion.h3 {...animateFadeIn} className='titulo-productsR'>
                    What are the processing options?
                </motion.h3>
                <div className='flex justify-around'>
                    <motion.ul
                        {...animateIconsParent}
                        className='contenedor-lista-productsR '
                    >
                        {process.map(({ id, icon, description, color }) => (
                            <motion.li key={id} id={id} className='contenedor-item-productsR' {...animateIconsChild}>
                                <Image
                                    src={icon}
                                    alt={description}
                                    width={54}
                                    height={54}
                                    className={clsx(
                                        'img-item-productsR',
                                        color === 'primary' ? 'bg-secondary' : 'bg-primary',
                                    )}
                                />
                                <p className='description-item-productsR'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
          
        </section>
    )
}