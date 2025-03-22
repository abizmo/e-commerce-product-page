import { atom } from "nanostores";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export const cart = atom<Product[]>([]);

export function addToCart(product: Product) {
  const currentCart = cart.get();
  const existingProduct = currentCart.find((item) => item.id === product.id);

  if (existingProduct) {
    cart.set(
      currentCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      )
    );
  } else {
    cart.set([...currentCart, { ...product }]);
  }
}

export function removeFromCart(id: number) {
  cart.set(cart.get().filter((item) => item.id !== id));
}

export function clearCart() {
  cart.set([]);
}
