import { useStore } from "@nanostores/react";
import {
  cart as $cart,
  addToCart,
  clearCart,
  removeFromCart,
} from "@stores/cart";

export function useCart() {
  const cart = useStore($cart);
  const totalItems = cart.reduce((total, { quantity }) => total + quantity, 0);

  return {
    cart,
    totalItems,
    addToCart,
    removeFromCart,
    clearCart,
  };
}
