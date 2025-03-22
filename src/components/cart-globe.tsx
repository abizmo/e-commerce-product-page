import { useCart } from "@hooks/useCart";
import style from "@styles/cart-globe.module.css";

interface CartGlobeProps {
  className: string;
}

function CartGlobe({ className, ...rest }: CartGlobeProps) {
  const { totalItems } = useCart();

  if (totalItems === 0) return null;

  return (
    <span className={[style.cartGlobe, className].join(" ")} {...rest}>
      {totalItems}
    </span>
  );
}

export default CartGlobe;
