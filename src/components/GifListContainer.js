import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);

  const serchGifsFromServer = (searchValue) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=qizDTpyy5trNl4NenfwzzChr91Rd8uD9`
    )
      .then((resp) => resp.json())
      .then((gifs) => setGifs([...gifs.data.slice(0, 3)]));
  };

  const onSubmit = (searchValue) => {
    serchGifsFromServer(searchValue);
  };

  return (
    <div>
      <GifSearch onSubmit={onSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;
