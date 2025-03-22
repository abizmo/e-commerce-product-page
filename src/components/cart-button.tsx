import type { PropsWithChildren } from "react";
import CartGlobe from "./cart-globe";
import style from "@styles/cart-button.module.css";
import { useCart } from "@hooks/useCart";

function CartButton({ children }: PropsWithChildren) {
  const { toggle } = useCart();

  return (
    <button className={style.cartButton} onClick={toggle}>
      <CartGlobe className={style.notification} />
      {children}
    </button>
  );
}

export default CartButton;
