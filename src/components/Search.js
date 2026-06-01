import React, { useRef, useCallback } from "react";

const Search = ({ search, setInput, isLoading }) => {
  const inputRef = useRef(null);
  const handleSearchTrigger = useCallback(() => {
    if (!inputRef.current) return;

    const queryValue = inputRef.current.value.trim();
    if (queryValue) {
      setInput(queryValue);
      search();
    }
  }, [search, setInput]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleSearchTrigger();
      }
    },
    [handleSearchTrigger],
  );

  return (
    <div className="search">
      <input
        ref={inputRef}
        className="input"
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
