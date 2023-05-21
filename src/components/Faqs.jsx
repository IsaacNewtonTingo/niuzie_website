import React from "react";
import { BsFillSquareFill } from "react-icons/bs";

export default function Faqs({ id }) {
  return (
    <div id={id} className="px-10 sm:px-40 py-10">
      <h1 className="text-myOrange font-bold text-[30px]">
        Frequently Asked Questions
      </h1>

      <div className="sm:flex sm:justify-between">
        <div className="mt-10 w-full sm:w-[40%]">
          <div className="flex items-center">
            <BsFillSquareFill className="text-myOrange mr-3" />
            <p className="font-bold">Who can use our services?</p>
          </div>
          <p className="ml-7">
            For individuals looking to buy products and sellers listing their
            products.
          </p>
        </div>

        <div className="mt-10 w-full sm:w-[40%]">
          <div className="flex items-center">
            <BsFillSquareFill className="text-myOrange mr-3" />
            <p className="font-bold">Do I need to signup?</p>
          </div>
          <p className="ml-7">
            You don’t need to create an account in order to access the platform
            but in order to see seller or buyer details, you’ll need to create
            an account and login.
          </p>
        </div>
      </div>

      <div className="sm:flex justify-between">
        <div className="mt-10 w-full sm:w-[40%]">
          <div className="flex items-center">
            <BsFillSquareFill className="text-myOrange mr-3" />
            <p className="font-bold">Is there a waiting period?</p>
          </div>
          <p className="ml-7">
            After you post a product, you will have to wait for review from our
            admin. The product can either be approved or rejected.
          </p>
        </div>

        <div className="mt-10 w-full sm:w-[40%]">
          <div className="flex items-center">
            <BsFillSquareFill className="text-myOrange mr-3" />
            <p className="font-bold">Is it secure to use?</p>
          </div>
          <p className="ml-7">
            All data and transactions made within the application are safe and
            secure.
          </p>
        </div>
      </div>
    </div>
  );
}
