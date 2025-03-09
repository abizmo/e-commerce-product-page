import { atom } from "nanostores";

export const isLightboxOpen = atom(false);

export const openLightbox = () => isLightboxOpen.set(true);

export const closeLightbox = () => isLightboxOpen.set(false);
