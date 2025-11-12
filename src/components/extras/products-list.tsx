import { animateIconsChild, animateIconsParent } from '@/utils';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import ProductIcon from './product-icon';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
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
     modules={[Navigation, Autoplay, Scrollbar]}
      spaceBetween={30}
      slidesPerView={6}
      loop
      grabCursor
    
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
       scrollbar={{
          draggable: true, 
          hide: false,    
        }}
      className='w-[70%] mx-auto h-[400px] pb-10 group'
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
