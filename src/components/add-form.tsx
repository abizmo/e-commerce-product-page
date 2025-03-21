import { useStore } from "@nanostores/react";
import { addToCart, type Product } from "@stores/cart";
import { counter as counterStore } from "@stores/counter";
import type { PropsWithChildren } from "react";

interface AddFormProps {
  className: string;
}

export function AddForm({
  className,
  children,
  ...rest
}: PropsWithChildren<AddFormProps>) {
  const counter = useStore(counterStore);
  const product: Omit<Product, "quantity"> = {
    id: 1,
    name: "Fall Limited Edition sneakers",
    price: 125.0,
    image: "/images/thumbnail-1.jpg",
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    addToCart({ ...product, quantity: counter });
  };

  return (
    <form className={className} {...rest} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
