import { atom } from "nanostores";

export const isOpen = atom(false);

export const open = () => isOpen.set(true);
