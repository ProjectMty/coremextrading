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
      className="img-icon-productsR"
    >
      <FontAwesomeIcon
        icon={icon}
        className="text-primaryR"
      />
    </div>
  );
}
