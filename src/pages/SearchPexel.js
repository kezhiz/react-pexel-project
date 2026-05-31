import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Picture from "../components/Picture";
import Search from "../components/Search";

const AUTH = process.env.REACT_APP_PEXELS_API_KEY;
const PER_PAGE = 15;

const getPhotosUrl = (query, page, perPage = PER_PAGE) => {
  const params = new URLSearchParams({
    page: String(page),
    per_page: String(perPage),
  });

  if (query) {
    params.set("query", query);
    return `https://api.pexels.com/v1/search?${params.toString()}`;
  }

  return `https://api.pexels.com/v1/curated?${params.toString()}`;
};

const SearchPexel = () => {
  const [input, setInput] = useState("");
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPhotos = useCallback(async (query, pageNumber) => {
    if (!AUTH) {
      throw new Error(
        "Missing Pexels API key. Add REACT_APP_PEXELS_API_KEY to .env.",
      );
    }

    const result = await axios.get(getPhotosUrl(query, pageNumber), {
      headers: { Authorization: AUTH },
    });

    return result.data.photos || [];
  }, []);

  const search = useCallback(async () => {
    const query = input.trim();
    setIsLoading(true);
    setError("");

    try {
      const nextPhotos = await fetchPhotos(query, 1);
      setPhotos(nextPhotos);
      setCurrentSearch(query);
      setPage(1);
    } catch (err) {
      setError(err.message || "Unable to load photos.");
    } finally {
      setIsLoading(false);
    }
  }, [fetchPhotos, input]);

  const morePicture = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setError("");

    try {
      const nextPage = page + 1;
      const newPhotos = await fetchPhotos(currentSearch, nextPage);
      const existingIds = new Set(photos.map((photo) => photo.id));
      const uniquePhotos = newPhotos.filter(
        (photo) => !existingIds.has(photo.id),
      );

      setPhotos((prevPhotos) => [...prevPhotos, ...uniquePhotos]);
      setPage(nextPage);
    } catch (err) {
      setError(err.message || "Unable to load more photos.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchPhotos("", 1)
      .then((initialPhotos) => {
        setPhotos(initialPhotos);
      })
      .catch((err) => {
        setError(err.message || "Unable to load photos.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [fetchPhotos]);

  return (
    <section className="pexels-page">
      <header className="pexels-header">
        <p className="eyebrow">API Project</p>
        <h1>Pexels Image Search</h1>
        <p>Pexels API 串接，使用者能快速使用關鍵字搜尋圖片素材。</p>
      </header>

      <Search search={search} setInput={setInput} isLoading={isLoading} />

      {error && <p className="status-message status-message--error">{error}</p>}
      {!error && !isLoading && photos.length === 0 && (
        <p className="status-message">No photos found. Try another keyword.</p>
      )}

      <div className="pictures">
        {photos.map((photo) => (
          <Picture data={photo} key={photo.id} />
        ))}
      </div>

      {photos.length > 0 && (
        <div className="morePicture">
          <button onClick={morePicture} disabled={isLoading}>
            {isLoading ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </section>
  );
};

export default SearchPexel;
