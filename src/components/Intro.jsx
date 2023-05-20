import React from "react";
import { FaDownload } from "react-icons/fa";

export default function Intro() {
  //--------
  //--------
  return (
    <div className="flex justify-between bg-gradient-to-r from-dark via-cardColor to-dark px-20 mt-[80px]">
      <div className="w-[50%] pt-20">
        <h1 className="text-[40px] text-lightBlue font-bold">
          <span className="text-myOrange">One platform </span>
          to connect sellers and buyers. List your products and your needs
        </h1>

        <h1 className="text-[18px] text-myGray font-semi-bold mt-20">
          Download our <span className="text-myOrange">mobile app</span> and
          access to hundreds of buyers and seller from all over Kenya.
        </h1>

        <button className="bg-myOrange text-sm h-[40px] px-4 font-bold text-white rounded-lg flex flex-row items-center justify-between mt-10">
          <p>Download the app</p>
          <FaDownload className="ml-4" />
        </button>
      </div>

      <img
        src="/lead-img.png"
        alt="niuzie app"
        className="w-[30%] object-contain"
      />
    </div>
  );
}
