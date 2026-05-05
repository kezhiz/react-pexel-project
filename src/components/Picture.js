import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <span className="photo-card__author">{data.photographer}</span>
      <a target="_blank" href={data.src.large} rel="noreferrer">
        <div className="imageContainer">
          <img src={data.src.large} alt={data.alt || data.photographer} />
        </div>
      </a>
    </div>
  );
};

export default Picture;
