import "./App.css";
import { useState, useEffect } from "react";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import { getPhotos } from "../../APIService/APIService";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    getPhotos(query, page)
      .then(({ results, total_pages }) => {
        setImages((prev) => [...prev, ...results]);
        setTotalResults(total_pages);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
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
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery images={images} onClick={handleImageClick} />
      )}
      {totalResults > 0 && images.length < totalResults && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      <ImageModal
        images={selectedImage}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      />

      <Toaster />
    </>
  );
}
