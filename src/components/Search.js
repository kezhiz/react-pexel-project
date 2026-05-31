import React from "react";

const Search = ({ search, setInput, isLoading }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <div className="search">
      <input
        className="input"
        onChange={inputHandler}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Search photos..."
        aria-label="Search Pexels photos"
      />
      <button className="button" onClick={search} disabled={isLoading}>
        {isLoading ? "..." : "Search"}
      </button>
    </div>
  );
};

export default Search;
