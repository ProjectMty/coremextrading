import { animateIconsChild, animateIconsParent } from '@/utils';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import ProductIcon from './product-icon';

type ProductsListProps = {
  products: {
    id: string;
    icon: IconDefinition;
    description: string | ReactNode;
  }[];
};

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <motion.ul
      {...animateIconsParent}
      className='grid w-2/3 gap-x-0 gap-y-4 lg:grid-cols-2 lg:gap-x-20 lg:text-xl 2xl:grid-cols-3 2xl:gap-x-32 2xl:gap-y-14 2xl:text-2xl'
    >
      {products.map(({ id, icon, description }, index) => (
        <motion.li id={id} key={id} className='flex items-center gap-x-7' {...animateIconsChild}>
          <ProductIcon icon={icon} color={index % 2 === 0 ? 'primary' : 'secondary'} />
          <p className='w-fit text-left'>{description}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
