import React from "react";
import MovieCart from "./MovieCart";

const MovieList = ({ title, movies, isSearchMovie = false }) => {
  return (
    <div className="px-8">
      <h1
        className={
          isSearchMovie
            ? "text-3xl py-4 text-black"
            : "md:text-3xl text-xl py-4  text-white"
        }
      >
        {false ? "No Result Found!" : title}
      </h1>
      <div className="overflow-x-auto cursor-pointer no-scrollbar flex">
        <div className="flex items-center mb-4">
          {movies?.map((movie) => {
            if (movie && movie.poster_path) {
              return (
                <MovieCart
                  key={movie.id}
                  movieId={movie.id}
                  posterPath={movie.poster_path}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
