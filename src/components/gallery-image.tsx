import { useStore } from "@nanostores/react";
import { gallery } from "@stores/gallery";
import { openLightbox } from "@stores/lightbox";

function GalleryImage() {
  const { selectedImage, images } = useStore(gallery);
  if (images.length === 0) return null;

  const { src, alt } = images[selectedImage];

  return (
    <button onClick={openLightbox} style={{ padding: 0 }}>
      <img src={src} alt={alt} />
    </button>
  );
}

export default GalleryImage;
