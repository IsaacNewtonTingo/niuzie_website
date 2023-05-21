import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Header({ scrollToSection }) {
  const linkItems = [
    {
      name: "Home",
      linkTo: "intro",
    },
    {
      name: "About Us",
      linkTo: "about-us",
    },
    {
      name: "How it works",
      linkTo: "how-it-works",
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
      linkTo: "contact-us",
    },
  ];

  return (
    <div className="bg-almostDark h-[80px] flex items-center justify-between px-40 fixed top-0 left-0 w-full">
      <img
        className="w-[120px] object-contain"
        src="/niuzie-full-logo.png"
        alt="niuzie logo"
      />

      <div className="flex">
        {linkItems.map((item, i) => (
          <Link
            activeClass="active"
            to={item.linkTo}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-lightBlue text-sm font-semibold mr-8 hover:text-myOrange cursor-pointer"
            key={i}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <a
        href="https://play.google.com/store/search?q=niuzie&c=apps"
        target="_blank"
        rel="noreferrer"
      >
        <button className="bg-myOrange text-sm h-[40px] px-4 font-bold text-white rounded-lg flex flex-row items-center justify-between ">
          <p>Download the app</p>
          <FaDownload className="ml-4" />
        </button>
      </a>
    </div>
  );
}
