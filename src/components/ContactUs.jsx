import React, { useState, useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import Input from "./Input";
import { Toaster, toast } from "react-hot-toast";

import ReCAPTCHA from "react-google-recaptcha";

export default function ContactUs({ id }) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    message: "",
    recaptchaToken: "",
  });

  const [processing, setProcessing] = useState(false);

  const captchaRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setProcessing(true);

    const token = captchaRef.current.getValue();
    setData({
      ...data,
      recaptchaToken: token,
    });
    captchaRef.current.reset();

    const url = `https://niuzie.ape30technologies.com/api/user/web-contact-us`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      setProcessing(false);

      if (responseData.status === "Success") {
        toast.success("Your message was sent successfully");
        setData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        toast.error(responseData.message);
      }
    } catch (err) {
      toast.error(err.message);
      setProcessing(false);
    }
  }

  return (
    <div
      id={id}
      className="bg-gradient-to-r from-dark via-cardColor to-dark px-10 md:px-20 xl:px-40 py-10 sm:flex justify-between"
    >
      <Toaster />
      <div className="w-full md:w-[50%] xl:w-[40%]">
        <h1 className="text-myOrange font-bold text-[30px]">Contact Us</h1>

        <div className="">
          <div className="mt-10  w-full xl:w-[40%]">
            <div className="flex items-center">
              <FaPhoneSquareAlt className="text-myOrange mr-3" />
              <p className="font-bold">Mobile number</p>
            </div>

            <a
              className="ml-7"
              href="tel:+254750925599"
              target="_blank"
              rel="noreferrer"
            >
              +254750925599
            </a>
          </div>

          <div className="mt-10  w-full xl:w-[40%]">
            <div className="flex items-center">
              <FaPhoneSquareAlt className="text-myOrange mr-3" />
              <p className="font-bold">WhatsApp number</p>
            </div>
            <a
              className="ml-7"
              href="https://wa.me/254750925599"
              target="_blank"
              rel="noreferrer"
            >
              +254750925599
            </a>
          </div>

          <div className="mt-10  w-full xl:w-[40%]">
            <div className="flex items-center">
              <MdEmail className="text-myOrange mr-3" />
              <p className="font-bold">Email address</p>
            </div>
            <a
              className="ml-7"
              href="mailto:info@niuzie@co.ke"
              target="_blank"
              rel="noreferrer"
            >
              info@niuzie@co.ke
            </a>
          </div>

          <div className="mt-10  w-full xl:w-[40%]">
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

          <div className="mt-10  w-full xl:w-[40%]">
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

          <div className="mt-10  w-full xl:w-[40%]">
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

      <div className="w-full md:w-[50%] xl:w-[40%] mt-10 sm:mt-0 bg-dark p-10  rounded-lg flex flex-col">
        <form className="self-center" onSubmit={handleSubmit}>
          <h1 className="text-myOrange font-bold text-[30px] mb-4">
            Get in touch
          </h1>
          <label className="font-semibold">First name</label> <br />
          <Input
            required
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
            required
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
            required
            type="tel"
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
            required
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={data.message}
            onChange={handleChange}
            className={`rounded-lg h-[100px] w-full p-4 my-4 text-sm bg-dark border-[#0085FF] border-[1px]`}
          ></textarea>
          <ReCAPTCHA
            sitekey="6LcFpykmAAAAAKQ8JmAd2x0BEVbFIIRenFwyIOWe"
            ref={captchaRef}
          />
          <button
            disabled={processing}
            className={`bg-myOrange text-sm w-full h-[40px] px-4 mt-4 font-bold text-white rounded-lg flex flex-row items-center justify-center ${
              processing && "opacity-10"
            }`}
          >
            <p>Send message</p>
          </button>
        </form>
      </div>
    </div>
  );
}
