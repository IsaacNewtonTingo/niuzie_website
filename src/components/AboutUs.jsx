import React from "react";

export default function AboutUs({ id }) {
  //
  return (
    <div id={id} className="px-10 sm:px-40 py-10">
      <h1 className="text-myOrange font-bold text-[30px]">About Us</h1>

      <p className="mt-10">
        Niuzie platform was established in January 2023 and seeks to be a
        reliable, credible and safe platform that brings together buyers and
        sellers of preloved items. We strive to ensure our buyers and sellers
        get value for money. Our story has just begun and we look forward to
        serving you the best way we can, one item at a time.
      </p>
    </div>
  );
}
