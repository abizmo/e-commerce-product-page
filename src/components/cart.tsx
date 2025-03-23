import style from "@styles/Cart.module.css";
import { useCart } from "@hooks/useCart";

interface Props {
  className?: string;
}

function Cart({ className, ...rest }: Props) {
  const { dialogRef } = useCart();

  return (
    <dialog
      className={[style.cart, className].join(" ")}
      ref={dialogRef}
      {...rest}
    >
      <header className={style.cartHeader}>
        <h2 className={style.cartTitle}>Cart</h2>
      </header>
      <main className={style.cartContent}>
        <p className={style.cartEmpty}>Your cart is empty.</p>
      </main>
    </dialog>
  );
}

export default Cart;
