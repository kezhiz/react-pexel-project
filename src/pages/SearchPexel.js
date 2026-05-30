import React, { useState, useEffect, useCallback } from "react";
import Search from "../components/Search";
import axios from "axios";
import Picture from "../components/Picture";

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

const Homepage = () => {
  const [input, setInput] = useState("");
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchPhotos = useCallback(async (query, pageNumber) => {
    const result = await axios.get(getPhotosUrl(query, pageNumber), {
      headers: { Authorization: AUTH },
    });

    return result.data.photos || [];
  }, []);

  const search = useCallback(async () => {
    const query = input.trim();
    const nextPhotos = await fetchPhotos(query, 1);

    setPhotos(nextPhotos);
    setCurrentSearch(query);
    setPage(1);
  }, [fetchPhotos, input]);

  const morePicture = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const nextPage = page + 1;
      const newPhotos = await fetchPhotos(currentSearch, nextPage);
      const existingIds = new Set(photos.map((photo) => photo.id));
      const uniquePhotos = newPhotos.filter(
        (photo) => !existingIds.has(photo.id),
      );

      setPhotos((prevPhotos) => [...prevPhotos, ...uniquePhotos]);
      setPage(nextPage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos("", 1).then((initialPhotos) => {
      setPhotos(initialPhotos);
    });
  }, [fetchPhotos]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search search={search} setInput={setInput} />
      <div className="pictures">
        {photos.map((photo) => (
          <Picture data={photo} key={photo.id} />
        ))}
      </div>
      <div className="morePicture">
        <button onClick={morePicture} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load more"}
        </button>
      </div>
    </div>
  );
};

export default Homepage;
