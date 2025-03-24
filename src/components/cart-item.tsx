import formatPrice from "@utils/format-price";
import DeleteIcon from "./delete-icon";
import { useCart } from "@hooks/useCart";
import style from "@styles/cart-item.module.css";
import type { Product } from "@stores/cart";

function CartItem({ id, image, name, price, quantity }: Product) {
  const { removeFromCart } = useCart();

  return (
    <div className={style.item}>
      <img className={style.itemImage} src={image} alt={name} />
      <div>
        <p>{name}</p>
        <div className={style.price}>
          <span>
            {formatPrice(price)} x {quantity}
          </span>
          <span className={style.total}>{formatPrice(price * quantity)}</span>
        </div>
      </div>
      <button className={style.deleteButton} onClick={() => removeFromCart(id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default CartItem;
