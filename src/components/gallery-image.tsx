import { useStore } from "@nanostores/react";
import { gallery } from "@stores/gallery";
import { useModal } from "@hooks/useModal";
import style from "@styles/gallery-image.module.css";

function GalleryImage() {
  const { selectedImage, images } = useStore(gallery);
  const { openLightbox } = useModal();
  if (images.length === 0) return null;

  const { src, alt } = images[selectedImage];

  return (
    <button onClick={openLightbox} style={{ padding: 0 }}>
      <img src={src} alt={alt} className={style.galleryImage} />
    </button>
  );
}

export default GalleryImage;
