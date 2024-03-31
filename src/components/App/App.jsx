import "./App.css";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { ImageModal } from "../ImageModal/ImageModal";

export default function App() {
  return (
    <>
      <LoadMoreBtn />
      <SearchBar />
      <ImageGallery />
      <Loader />
      <ErrorMessage />
      <ImageModal />
    </>
  );
}
