import { useModal } from "@hooks/useModal";
import type { PropsWithChildren } from "react";
import CloseIcon from "@components/close-icon";
import style from "@styles/lightbox.module.css";

interface Props {}

function Lightbox({ children }: PropsWithChildren<Props>) {
  const { dialogRef, closeLightbox } = useModal();
  return (
    <dialog
      className={[style.container, style.lightbox].join(" ")}
      ref={dialogRef}
    >
      <button className={style.btnClose} onClick={closeLightbox}>
        <CloseIcon height={22} width={21} />
        <span className="visually-hidden">close</span>
      </button>
      {children}
    </dialog>
  );
}

export default Lightbox;
