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
  const [images, setImages] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) return;
    getPhotos(query, page)
      .then(({ results, total_pages }) => {
        setImages((prev) => [...prev, ...results]);
        setTotalResults(total_pages);
      })
      .catch((error) => setError(error.message));
  }, [query, page]);

  function handleSubmit(query) {
    setImages([]);
    setPage(1);
    setError(null);
    setTotalResults(0);
    setQuery(query);
  }
  function handleLoadMore() {
    setPage(page + 1);
  }
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      {error && <ErrorMessage textAlign="center">{error}🔎</ErrorMessage>}
      {totalResults > 0 && images.length < totalResults && (
        <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
      )}
      <Loader />
      <ImageModal />
    </>
  );
}
