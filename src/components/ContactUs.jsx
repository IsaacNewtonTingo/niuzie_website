import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import Input from "./Input";

export default function ContactUs() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div className="px-20 py-10 flex justify-between">
      <div className="w-[40%]">
        <h1 className="text-myOrange font-bold text-[30px]">Contact Us</h1>

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

      <div className="w-[40%]">
        <h1 className="text-myOrange font-bold text-[30px]">Get in touch</h1>

        <form onSubmit={handleSubmit}>
          <label className="font-semibold">First name</label> <br />
          <Input
            type="text"
            placeholder="e.g John"
            name="firstName"
            id="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
          <br />
          <br />
          <label className="font-semibold">Last name</label> <br />
          <Input
            type="text"
            placeholder="e.g Doe"
            name="lastName"
            id="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
          <br />
          <br />
          <label className="font-semibold">Phone number</label> <br />
          <Input
            type="text"
            placeholder="e.g +254766445522"
            name="phoneNumber"
            id="phoneNumber"
            value={data.phoneNumber}
            onChange={handleChange}
          />
          <br />
          <br />
          <label className="font-semibold">Message</label> <br />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={data.message}
            onChange={handleChange}
            className={`rounded-lg h-[100px] w-1/2 p-4 mt-4 text-sm bg-dark border-[#0085FF] border-[1px]`}
          ></textarea>
          <button className="bg-myOrange text-sm w-1/2 h-[40px] px-4 mt-4 font-bold text-white rounded-lg flex flex-row items-center justify-center ">
            <p>Send message</p>
          </button>
        </form>
      </div>
    </div>
  );
}
