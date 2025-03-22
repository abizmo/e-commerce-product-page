import { useStore } from "@nanostores/react";
import { useEffect, useRef } from "react";
import { createModalStore } from "../stores/createModalStore";

const lightboxStore = createModalStore();

export function useLightbox() {
  const isOpen = useStore(lightboxStore.isOpen);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return {
    isOpen,
    open: lightboxStore.open,
    close: lightboxStore.close,
    toggle: lightboxStore.toggle,
    dialogRef,
  };
}
