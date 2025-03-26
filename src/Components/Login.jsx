import React from "react";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector(store => store.app.isLoading);

  const inputBoxStyle =
    "border border-none bg-gray-900 opacity-[80%] w-[80%] focus:outline-white focus:outline-[1px] rounded text-white py-2 pl-2 ";

  const isLoginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    if (isLogin) {
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (res.data.success) {
          toast.success(res.data.message);
        
      }

      dispatch(setUser(res.data.user));
      navigate("/browse");


      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      } 
      finally {
        dispatch(setLoading(false));
      }
    } else {
      const user = { fullName, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        console.log(res);

        if (res.data.success) {
          toast.success(res.data.message);
        
        }

        setIsLogin(true);

      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
      finally{
        dispatch(setLoading(false));
      }
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-screen h-screen"
          src="/public/netflix-bg.jpg"
          alt="banner"
        />
      </div>

      <form
        onSubmit={getInputData}
        className=" w-[350px] h-auto pb-12 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black opacity-92 p-10 rounded-xl transition duration-500"
      >
        <h1 className="text-2xl text-white font-bold text-center mb-4">
          {isLogin ? "Login" : "Signup"}
        </h1>

        <div className="flex flex-col gap-5">
          <div className=" flex flex-col items-center gap-5">
            {!isLogin && (
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={inputBoxStyle}
                type="text"
                placeholder="Name"
              />
            )}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputBoxStyle}
              placeholder="Email"
              type="email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputBoxStyle}
              placeholder="Password"
              type="password"
            />
            <button type="submit" className="bg-red-600 text-white py-2 w-[80%] rounded cursor-pointer">
              {` ${isLoading ? "loading..." : (isLogin ? "Login" : "Signup") } `}
            </button>
          </div>
          <p className="text-white text-sm text-center cursor-pointer">
            {isLogin ? `New to Netflix? ` : "Already have an account?"}{" "}
            <span onClick={isLoginHandler} className="text-blue-600">
              {isLogin ? "Signup" : " Login"}
            </span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
