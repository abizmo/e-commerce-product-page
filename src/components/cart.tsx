import type { PropsWithChildren } from "react";
import style from "@styles/Cart.module.css";
import { useCart } from "@hooks/useCart";

interface Props {}

function Cart({ children }: PropsWithChildren<Props>) {
  const { dialogRef } = useCart();

  return (
    <dialog className={[style.container, style.cart].join(" ")} ref={dialogRef}>
      {children}
    </dialog>
  );
}

export default Cart;
