import { initGallery, type Image } from "@stores/gallery";
import { useEffect, type PropsWithChildren } from "react";

interface GalleryProps {
  className: string;
  images: Image[];
}

function Gallery({
  children,
  className,
  images,
  ...rest
}: PropsWithChildren<GalleryProps>) {
  useEffect(() => {
    initGallery(images);
  }, [images]);

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}

export default Gallery;
