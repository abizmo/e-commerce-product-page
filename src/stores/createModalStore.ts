import { atom } from "nanostores";

export function createModalStore(initialState: boolean = false) {
  const isOpen = atom<boolean>(initialState);

  const open = () => isOpen.set(true);
  const close = () => isOpen.set(false);
  const toggle = () => isOpen.set(!isOpen.get());

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}
