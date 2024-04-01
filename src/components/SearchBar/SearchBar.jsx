import css from "./SearchBar.module.css";
import { useState } from "react";

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
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={saveInput}
            value={query}
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
