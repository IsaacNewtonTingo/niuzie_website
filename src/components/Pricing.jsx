import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

export default function Pricing({ id }) {
  const basicBenefits = [
    {
      name: "Post 2 free products",
      iconType: "check",
    },
    {
      name: "Ksh. 50 per subsequent product",
      iconType: "check",
    },
    {
      name: "View other seller products",
      iconType: "check",
    },
    {
      name: "Free product renewal",
      iconType: "check",
    },
    {
      name: "24hr support",
      iconType: "check",
    },
    {
      name: "View buyer product requests",
      iconType: "cross",
    },
    {
      name: "High product visibility",
      iconType: "cross",
    },
  ];

  const platinumBenefits = [
    {
      name: "Post unlimited products",
      iconType: "check",
    },
    {
      name: "Free subsequent products",
      iconType: "check",
    },
    {
      name: "View other seller products",
      iconType: "check",
    },
    {
      name: "Free product renewal",
      iconType: "check",
    },
    {
      name: "24hr support",
      iconType: "check",
    },
    {
      name: "View buyer product requests",
      iconType: "check",
    },
    {
      name: "High product visibility",
      iconType: "check",
    },
  ];
  return (
    <div
      id={id}
      className="bg-gradient-to-r from-dark via-cardColor to-dark px-10  md:px-20 xl:px-40 py-10"
    >
      <h1 className="text-myOrange font-bold text-[30px]">Pricing</h1>

      <div className="sm:flex sm:items-center sm:justify-between mt-10">
        <div className="bg-dark p-8 rounded-lg flex-row items-center">
          <h1 className="text-center font-bold text-[20px] sm:text-[30px]">
            Basic
          </h1>
          <h1 className="text-center font-bold text-[20px] text-myGray mb-6 sm:mb-10">
            Ksh. 00.00
          </h1>

          {basicBenefits.map((item, i) => (
            <div key={i} className="flex items-center">
              {item.iconType === "check" ? (
                <AiFillCheckCircle color="#00FF66" />
              ) : (
                <RxCrossCircled color="red" />
              )}
              <p className="ml-2 text-sm">{item.name}</p>
            </div>
          ))}
        </div>

        {/* <div className="bg-dark p-10 rounded-lg flex-row items-center">
          <h1 className="text-center font-bold text-[30px]">Gold</h1>
          <h1 className="text-center font-bold text-[20px] text-myGray mb-10">
            Ksh. 00.00
          </h1>

          {basicBenefits.map((item, i) => (
            <div key={i} className="flex items-center">
              {item.iconType === "check" ? (
                <AiFillCheckCircle color="#00FF66" />
              ) : (
                <RxCrossCircled color="red" />
              )}
              <p className="ml-2">{item.name}</p>
            </div>
          ))}
        </div> */}

        <div className="bg-dark p-10 rounded-lg flex-row items-center mt-10 sm:mt-0">
          <h1 className="text-center font-bold text-[20px] sm:text-[30px]">
            Platinum
          </h1>
          <h1 className="text-center font-bold text-[20px] text-myGray mb-6 sm:mb-10">
            Ksh. 500.00/week
          </h1>

          {platinumBenefits.map((item, i) => (
            <div key={i} className="flex items-center">
              {item.iconType === "check" ? (
                <AiFillCheckCircle color="#00FF66" />
              ) : (
                <RxCrossCircled color="red" />
              )}
              <p className="ml-2 text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
