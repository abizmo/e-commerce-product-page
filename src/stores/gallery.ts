import { map } from "nanostores";

export interface Image {
  src: string;
  thumbnail: string;
  alt: string;
}

export interface Gallery {
  images: Image[];
  selectedImage: number;
}

export const gallery = map<Gallery>({
  images: [],
  selectedImage: 0,
});

export const initGallery = (images: Image[]) => {
  gallery.set({ images, selectedImage: 0 });
};

export const selectImage = (idx: number) => {
  gallery.setKey("selectedImage", idx);
};

export const changeImage = (mode: "prev" | "next") => {
  const { selectedImage, images } = gallery.get();
  let idx = selectedImage + (mode === "next" ? 1 : -1);
  if (idx < 0) idx = images.length - 1;
  if (idx >= images.length) idx = 0;
  gallery.setKey("selectedImage", idx);
};
