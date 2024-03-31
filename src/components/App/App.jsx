import "./App.css";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { ImageModal } from "../ImageModal/ImageModal";
import { useState, useEffect } from "react";
import { getPhotos } from "../../APIService/APIService";

export default function App() {
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        const response = await getPhotos("your_query", 1);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [query, page]);

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
