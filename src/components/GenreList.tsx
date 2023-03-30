import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useData<Genre>("/genres");
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
