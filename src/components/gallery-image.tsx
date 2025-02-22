import { useStore } from "@nanostores/react";
import { gallery } from "@stores/gallery";

function GalleryImage() {
  const { selectedImage, images } = useStore(gallery);
  if (images.length === 0) return null;

  const { src, alt } = images[selectedImage];

  return <img src={src} alt={alt} />;
}

export default GalleryImage;
