import { animateIconsChild, animateIconsParent } from '@/utils';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import ProductIcon from './product-icon';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "@/components/Returns/Products/Products.css"

type ProductsListProps = {
  products: {
    id: string;
    icon: IconDefinition;
    description: string | ReactNode;
  }[];
};

export default function ProductsList({ products }: ProductsListProps) {
  return (
     <Swiper
     modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={5}
      loop
      grabCursor
       navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className='w-[70%] mx-auto h-[400px] group'
    >
      {products.map(({ id, icon, description }, index) => (
          <SwiperSlide key={id}>
        <div className="contenedor-items-productsR">
            <ProductIcon
              icon={icon}
              color={index % 2 === 0 ? "primary" : "secondary"}
            />
            <p className="desc-icon-productsR">{description}</p>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
  );
}
