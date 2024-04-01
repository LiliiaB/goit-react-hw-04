import css from "./SearchBar.module.css";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  function saveInput(event) {
    const inputValue = event.target.value;
    setQuery(inputValue);
  }
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(query);
    setQuery("");
  }
  return (
    <div>
      <header className={css.header}>
        <form onSubmit={handleSubmit} className={css.bar}>
          <button type="submit" className={css.button}>
            <FiSearch size="16px" />
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={saveInput}
            value={query}
            className={css.input}
          />
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
