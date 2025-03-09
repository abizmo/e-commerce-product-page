import { useStore } from "@nanostores/react";
import { gallery, selectImage } from "@stores/gallery";

interface ThumbnailsProps {
  className: string;
}

function Thumbnails({ className, ...rest }: ThumbnailsProps) {
  const { images, selectedImage } = useStore(gallery);

  if (images.length === 0) return null;

  return (
    <ul className={className} {...rest}>
      {images.map(({ thumbnail, alt }, idx) => (
        <li key={thumbnail}>
          <button
            onClick={() => selectImage(idx)}
            style={
              idx === selectedImage
                ? { outline: "2px solid var(--clr-primary)" }
                : {}
            }
          >
            <img
              src={thumbnail}
              alt={alt}
              style={idx === selectedImage ? { opacity: 0.7 } : {}}
            />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Thumbnails;
