import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { Link } from "react-scroll";
import MenuModal from "./MenuModal";

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

  const [open, setOpen] = useState(false);

  return (
    <>
      {!open ? (
        <div className="bg-almostDark h-[80px] flex items-center justify-between px-10 sm:px-40 fixed top-0 left-0 w-full">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <img
              className="w-[40%] sm:w-[120px] object-contain"
              src="/niuzie-full-logo.png"
              alt="niuzie logo"
            />
          </Link>

          <div className="hidden sm:flex">
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
            className="hidden sm:block"
          >
            <button className="bg-myOrange text-sm h-[40px] px-4 font-bold text-white rounded-lg sm:flex flex-row items-center justify-between hidden">
              <p>Download the app</p>
              <FaDownload className="ml-4" />
            </button>
          </a>

          <AiOutlineMenu
            onClick={() => setOpen(true)}
            className="text-[120px] block sm:hidden"
          />
        </div>
      ) : (
        <>
          <div className="bg-almostDark h-[80px] flex items-center justify-between px-10 sm:px-40 fixed top-0 left-0 w-full">
            <Link
              activeClass="active"
              to="intro"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              <img
                className="w-[40%] sm:w-[120px] object-contain"
                src="/niuzie-full-logo.png"
                alt="niuzie logo"
              />
            </Link>

            <AiOutlineClose
              onClick={() => setOpen(false)}
              className="text-[120px] text-white"
            />

            <MenuModal linkItems={linkItems} setOpen={setOpen} />
          </div>
        </>
      )}
    </>
  );
}
