import axios from "axios";
import React, { useState } from "react";
import { options, SEARCH_Movie_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovieDetails } from "../redux/searchSlice";
import { setLoading } from "../redux/userSlice";
import MovieList from "./MovieList";

const SearchMovie = () => {
  const isLoading = useSelector((store) => store.app.isLoading);

  const dispatch = useDispatch();
  const [searchMovie, setSearchMovie] = useState("");
  const { movieName, searchedMovie } = useSelector(
    (store) => store.SearchMovie
  );

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        `${SEARCH_Movie_URL}${searchMovie}&include_adult=false&language=en-US&page=1`,
        options
      );
      const movies = res?.data?.results;
      dispatch(setSearchMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  };

  return (
    <>
      <div className="flex justify-center md:pt-[10%] pt-[20%] w-[100%]">
        <form onSubmit={submitHandler} className="md:w-[50%] ">
          <div className=" flex justify-between shadow-md border-2 border-gray-200 rounded-lg w-[100%]">
            <input
              onChange={(e) => {
                setSearchMovie(e.target.value);
              }}
              value={searchMovie}
              className="w-full outline-none rounded-md text-lg  p-2"
              type="text"
              placeholder="Search Movie..."
            />
            <button className="bg-red-700 text-white rounded-md px-4 my-1 cursor-pointer">
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>

      <MovieList
        title={movieName}
        isSearchMovie={true}
        movies={searchedMovie}
      />
      <div className=" text-center">
        {searchedMovie == null || searchedMovie.length == 0 ? "No result available !" : ""}
      </div>
    </>
  );
};

export default SearchMovie;
