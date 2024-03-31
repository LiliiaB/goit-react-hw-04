import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ items }) => {
  return (
    <div>
      <h2>ImageGallery</h2>
      <ImageCard />
    </div>
  );
};

export default ImageGallery;
