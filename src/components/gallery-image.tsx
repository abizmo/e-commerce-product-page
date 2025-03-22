import { useStore } from "@nanostores/react";
import { gallery } from "@stores/gallery";
import style from "@styles/gallery-image.module.css";
import { useLightbox } from "@hooks/useLightbox";

function GalleryImage() {
  const { selectedImage, images } = useStore(gallery);
  const { open } = useLightbox();
  if (images.length === 0) return null;

  const { src, alt } = images[selectedImage];

  return (
    <button onClick={open} style={{ padding: 0 }}>
      <img src={src} alt={alt} className={style.galleryImage} />
    </button>
  );
}

export default GalleryImage;
