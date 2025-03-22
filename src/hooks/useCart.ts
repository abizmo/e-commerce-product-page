import { useStore } from "@nanostores/react";
import { useEffect, useRef } from "react";
import { createModalStore } from "../stores/createModalStore";

const cartStore = createModalStore();

export function useCart() {
  const isOpen = useStore(cartStore.isOpen);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.show();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return {
    isOpen,
    open: cartStore.open,
    close: cartStore.close,
    toggle: cartStore.toggle,
    dialogRef,
  };
}
