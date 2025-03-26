import axios from "axios";
import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector } from "react-redux";
import { API_END_POINT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { setToggle } from "../redux/movieSlice";
import toast from "react-hot-toast";
import { MdOutlineLogout } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.app.user);
  const dispatch = useDispatch();
  const toggle = useSelector((store) => store.movie.toggle);
  const reSize = window.innerWidth < 768 ? <MdOutlineLogout /> : "Logout";

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      dispatch(setUser(null));
      navigate("/login");

      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  return (
    <div className="bg-gradient-to-b from-black to-transparent flex w-full  items-center justify-between px-6  fixed z-50">
      <img
        className="md:w-56 w-36 pt-2  cursor-pointer"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
        alt="Netflix logo "
      />

      {user && (
        <div className="flex items-center">
          <IoIosArrowDropdown
            size={24}
            className="text-white mr-2 cursor-pointer md:block hidden"
          />
          <h1 className=" md:block hidden text-lg font-medium text-white cursor-pointer">
            {" "}
            {user.fullName}
          </h1>

          <div className="ml-4">
            <button
              onClick={toggleHandler}
              className="bg-red-700 text-white px-4 py-2 rounded-lg md:mr-4 mr-2 cursor-pointer"
            >
              {toggle ?  (`${window.innerWidth < 768 ? `${"🏠︎"}` : "Home"}`) : (`${window.innerWidth < 768 ? `${"⌕"}` : "Search Movie"}`)}
            </button>
            <button
              onClick={logoutHandler}
              className="bg-red-700 cursor-pointer text-white px-4 py-3 rounded-lg"
            >
              {reSize}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
