import React, { useCallback } from "react";

const Search = ({ search, setInput, isLoading }) => {
  const handleInputChange = useCallback(
    (e) => {
      setInput(e.target.value);
    },
    [setInput],
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      search();
    },
    [search],
  );

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Search photos..."
        aria-label="Search Pexels photos"
        onChange={handleInputChange}
      />
      <button type="submit" className="button" disabled={isLoading}>
        {isLoading ? "..." : "Search"}
      </button>
    </form>
  );
};

export default Search;
