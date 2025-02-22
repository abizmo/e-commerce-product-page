import { changeImage } from "@stores/gallery";
import type { PropsWithChildren } from "react";

interface GalleryButtonProps {
  mode: "prev" | "next";
}

function GalleryButton({
  mode,
  children,
}: PropsWithChildren<GalleryButtonProps>) {
  return <button onClick={() => changeImage(mode)}>{children}</button>;
}

export default GalleryButton;
