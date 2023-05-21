import React, { useState } from "react";

import { Link } from "react-scroll";

export default function MenuModal({ linkItems, setOpen }) {
  return (
    <div className="bg-cardColor h-full w-full flex flex-col p-10 fixed top-[80px] left-0">
      {linkItems.map((item, i) => (
        <Link
          onClick={() => setOpen(false)}
          activeClass="active"
          to={item.linkTo}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-lightBlue text-md mb-4 font-semibold mr-8 hover:text-myOrange cursor-pointer"
          key={i}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
