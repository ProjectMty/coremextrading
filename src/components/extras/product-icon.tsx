import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import "@/components/Returns/Products/Products.css"

type ProductIconProps = {
  icon: IconDefinition;
};

export default function ProductIcon({ icon }: ProductIconProps) {
  return (
    <div
      className="img-icon-productsR"
    >
      <FontAwesomeIcon
        icon={icon}
        className="text-primaryR"
      />
    </div>
  );
}
