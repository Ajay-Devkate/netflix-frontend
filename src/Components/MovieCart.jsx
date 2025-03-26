import React from "react";
import { Banner_Url } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setId, setOpen } from "../redux/movieSlice";
import Login from "./Login";

const MovieCart = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();

  if (posterPath === null) return null;

  const handleOpen = () => {
    dispatch(setId(movieId));
    dispatch(setOpen(true));
  };

  return (
    <div className="md:w-48 w-40 pr-2" onClick={handleOpen}>
      <img src={`${Banner_Url}${posterPath}`} alt="Movie-banner" />
    </div>
  );
};

export default MovieCart;
