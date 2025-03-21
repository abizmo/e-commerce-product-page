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
    // Si ya está en el carrito, incrementa la cantidad
    cart.set(
      currentCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      )
    );
  } else {
    // Si no está en el carrito, agrégalo
    cart.set([...currentCart, { ...product }]);
  }
}

// Función para eliminar un producto del carrito
export function removeFromCart(id: number) {
  cart.set(cart.get().filter((item) => item.id !== id));
}
