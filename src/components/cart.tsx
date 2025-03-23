import style from "@styles/Cart.module.css";
import { useCartModal } from "@hooks/useCartModal";
import { useCart } from "@hooks/useCart";
import formatPrice from "@utils/format-price";

interface Props {
  className?: string;
}

function Cart({ className, ...rest }: Props) {
  const { dialogRef } = useCartModal();
  const { cart, totalItems } = useCart();

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
        {totalItems === 0 ? (
          <p className={style.cartEmpty}>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map(({ id, name, price, image, quantity }) => (
                <li className={style.item} key={id}>
                  <img className={style.itemImage} src={image} alt={name} />
                  <div>
                    <p>{name}</p>
                    <div className={style.price}>
                      <span>
                        {formatPrice(price)} x {quantity}
                      </span>
                      <span className={style.total}>
                        {formatPrice(price * quantity)}
                      </span>
                    </div>
                  </div>
                  <button>B</button>
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
