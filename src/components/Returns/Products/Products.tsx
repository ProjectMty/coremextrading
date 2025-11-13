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


export default function Products_Returns() {
    return (
        <section className="section-productsR">

            <motion.h3 {...animateFadeIn} className='titulo-productsR'>
                WHAT PRODUCTS DO WE HAVE?
            </motion.h3>
            <motion.h3 {...animateFadeIn} className='subtitulo-productsR'>
                We service returns from Amazon FBA, Mercado Libre, or parcel shipments direct to client.
            </motion.h3>
            <div className=' relative w-[70%] mx-auto h-[400px] pb-10 group'>
                <ProductsList products={products} />
            </div>

        </section>
    )
}