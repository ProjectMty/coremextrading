import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import "@/components/Returns/Products/Products.css"

type ProductIconProps = {
  icon: IconDefinition;
  color: 'primary' | 'secondary';
};

export default function ProductIcon({ icon, color }: ProductIconProps) {
  return (
    <div
      className={clsx(
        'flex h-[34px] w-[34px] items-center justify-center rounded-full lg:h-[38px] lg:w-[38px] 2xl:h-[52px] 2xl:w-[52px]',
        color === 'primary' ? 'bg-secondary' : 'bg-primary',
      )}
    >
      <FontAwesomeIcon
        icon={icon}
        className={color === 'primary' ? 'text-primaryR' : 'text-secondaryR'}
      />
    </div>
  );
}
