import type { PropsWithChildren } from "react";
import CloseIcon from "@components/close-icon";
import style from "@styles/lightbox.module.css";
import { useLightbox } from "@hooks/useLightbox";

interface Props {}

function Lightbox({ children }: PropsWithChildren<Props>) {
  const { dialogRef, close } = useLightbox();

  return (
    <dialog
      className={[style.container, style.lightbox].join(" ")}
      ref={dialogRef}
    >
      <button className={style.btnClose} onClick={close}>
        <CloseIcon height={22} width={21} />
        <span className="visually-hidden">close</span>
      </button>
      {children}
    </dialog>
  );
}

export default Lightbox;
