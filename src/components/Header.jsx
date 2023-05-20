import React from "react";
import { FaDownload } from "react-icons/fa";

export default function Header() {
  const linkItems = [
    {
      name: "About Us",
      linkTo: "aboutUs",
    },
    {
      name: "How it works",
      linkTo: "howItWorks",
    },
    {
      name: "Pricing",
      linkTo: "pricing",
    },
    {
      name: "FAQs",
      linkTo: "faqs",
    },
    {
      name: "Contact Us",
      linkTo: "contactUs",
    },
  ];

  return (
    <div className="bg-almostDark h-[80px] flex items-center justify-between px-20 fixed top-0 left-0 w-full">
      <img
        className="w-[120px] object-contain"
        src="/niuzie-full-logo.png"
        alt="niuzie logo"
      />

      <div className="flex">
        {linkItems.map((item, i) => (
          <p
            className="text-lightBlue text-sm font-semibold mr-8 hover:text-myOrange cursor-pointer"
            key={i}
          >
            {item.name}
          </p>
        ))}
      </div>

      <button className="bg-myOrange text-sm h-[40px] px-4 font-bold text-white rounded-lg flex flex-row items-center justify-between ">
        <p>Download the app</p>
        <FaDownload className="ml-4" />
      </button>
    </div>
  );
}
