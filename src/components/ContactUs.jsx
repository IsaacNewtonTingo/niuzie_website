import React from "react";
import { BsFillSquareFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function ContactUs() {
  return (
    <div className="px-20 py-10">
      <h1 className="text-myOrange font-bold text-[30px]">
        Frequently Asked Questions
      </h1>

      <div className="">
        <div className="mt-10 w-[40%]">
          <div className="flex items-center">
            <FaPhoneSquareAlt className="text-myOrange mr-3" />
            <p className="font-bold">Mobile number</p>
          </div>
          <p className="ml-7">+254712345678</p>
        </div>

        <div className="mt-10 w-[40%]">
          <div className="flex items-center">
            <MdEmail className="text-myOrange mr-3" />
            <p className="font-bold">Email address</p>
          </div>
          <p className="ml-7">info@niuzie@co.ke</p>
        </div>

        <div className="mt-10 w-[40%]">
          <div className="flex items-center">
            <AiFillFacebook className="text-myOrange mr-3" />
            <p className="font-bold">Facebook</p>
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=100088697156705&mibextid=ZbWKwL"
            className="ml-7"
          >
            Niuzie
          </a>
        </div>

        <div className="mt-10 w-[40%]">
          <div className="flex items-center">
            <AiFillTwitterSquare className="text-myOrange mr-3" />
            <p className="font-bold">Twitter</p>
          </div>
          <a
            href="https://twitter.com/niuzie_ke?t=MNXERVnGvZstsMziKlddNw&s=09"
            className="ml-7"
          >
            @niuzie_ke
          </a>
        </div>

        <div className="mt-10 w-[40%]">
          <div className="flex items-center">
            <AiOutlineInstagram className="text-myOrange mr-3" />
            <p className="font-bold">Instagram</p>
          </div>
          <a
            href="https://instagram.com/niuzie_ke?igshid=ZGUzMzM3NWJiOQ=="
            className="ml-7"
          >
            @niuzie_ke
          </a>
        </div>
      </div>
    </div>
  );
}
