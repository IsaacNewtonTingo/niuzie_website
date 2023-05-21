import React from "react";
import { FaDownload } from "react-icons/fa";

export default function Intro({ id }) {
  return (
    <div
      id={id}
      className="flex items-center flex-col sm:flex sm:flex-row justify-between bg-gradient-to-r from-dark via-cardColor to-dark px-10px pb-10 sm:px-40 mt-[80px]"
    >
      <div className="w-full sm:w-[50%] p-10  sm:py-20">
        <h1 className="text-[20px] sm:text-[40px] text-lightBlue font-bold">
          <span className="text-myOrange">One platform </span>
          to connect sellers and buyers. List your products and your needs
        </h1>

        <h1 className="text-[16px] sm:text-[18px] text-myGray font-semi-bold mt-10 sm:mt-20">
          Download our <span className="text-myOrange">mobile app</span> and
          access to hundreds of buyers and seller from all over Kenya.
        </h1>

        <a
          href="https://play.google.com/store/search?q=niuzie&c=apps"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-myOrange text-sm h-[40px] px-4 font-bold text-white rounded-lg flex flex-row items-center justify-between mt-10">
            <p>Download the app</p>
            <FaDownload className="ml-4" />
          </button>
        </a>
      </div>

      <img
        src="/lead-img.png"
        alt="niuzie app"
        className="w-[80%] sm:w-[30%] object-contain"
      />
    </div>
  );
}
