import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({title,overview}) => {
  return (
    <div className="absolute md:block hidden  text-white pt-[14%] p-12">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="w-1/3">
        {overview}
      </p>
      <div className="mt-8">
        <button className="px-6 py-2 bg-gray-200 opacity-50 rounded-md text-black hover:bg-gray-400 duration-300">
          <FaRegCirclePlay className="inline size-5" /> Play
        </button>
        <button className="px-6 py-2 bg-gray-200 opacity-50 mx-4 rounded-md text-black hover:bg-gray-400 duration-300">
          <IoMdInformationCircleOutline className="inline size-6" /> Watch more
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
