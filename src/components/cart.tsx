import style from "@styles/cart.module.css";
import { useCartModal } from "@hooks/useCartModal";
import { useCart } from "@hooks/useCart";
import CartItem from "./cart-item";

interface Props {
  className?: string;
}

function Cart({ className, ...rest }: Props) {
  const { dialogRef } = useCartModal();
  const { cart, totalItems, removeFromCart } = useCart();

  return (
    <dialog
      className={[style.cart, className].join(" ")}
      ref={dialogRef}
      {...rest}
    >
      <header className={style.cartHeader}>
        <h2 className={style.cartTitle}>Cart</h2>
      </header>
      <main
        className={`${style.cartContent} ${totalItems === 0 ? style.cartEmpty : ""}`}
      >
        {totalItems === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((product) => (
                <li key={product.id}>
                  <CartItem {...product} />
                </li>
              ))}
            </ul>
            <button>Checkout</button>
          </>
        )}
      </main>
    </dialog>
  );
}

export default Cart;
