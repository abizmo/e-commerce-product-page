import { useStore } from "@nanostores/react";
import { useEffect, useRef } from "react";
import {
  closeLightbox,
  isLightboxOpen,
  openLightbox,
} from "../stores/lightbox";

export function useModal() {
  const open = useStore(isLightboxOpen);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  return { open, openLightbox, closeLightbox, dialogRef };
}
