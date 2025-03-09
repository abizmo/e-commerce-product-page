import { useStore } from "@nanostores/react";
import { isOpen } from "@stores/lightbox";
import type { PropsWithChildren } from "react";

function Lightbox({ children }: PropsWithChildren) {
  const $isOpen = useStore(isOpen);
  if (!$isOpen) return null;
  return <dialog open>{children}</dialog>;
}

export default Lightbox;
