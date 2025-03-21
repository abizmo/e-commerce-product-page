import { useStore } from "@nanostores/react";
import { cart as cartStore } from "@stores/cart";
import style from "@styles/cart-globe.module.css";

interface CartGlobeProps {
  className: string;
}

function CartGlobe({ className, ...rest }: CartGlobeProps) {
  const cart = useStore(cartStore);

  if (cart.length === 0) return null;
  const totalItems = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  console.log(cart);
  return (
    <span className={[style.cartGlobe, className].join(" ")} {...rest}>
      {totalItems}
    </span>
  );
}

export default CartGlobe;
