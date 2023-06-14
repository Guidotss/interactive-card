"use client";
import Image from "next/image";
import { CardLogo } from "./icons";;
import { useContext } from "react";
import { CardContext } from "@/context";

export const CardFront = () => {
  const { cardName, cardNumber,expMonth, expYear } = useContext(CardContext);
  return (
    <div className="w-full">  
      <div className="sm:absolute sm:top-24 sm:ml-0 fixed top-32 z-10 ml-10 mt-5">
        <CardLogo />
      </div>
      <Image
        className=" object-cover sm:w-[400px] sm:h-auto rounded-lg w-[286px] h-[157px] fixed top-32 ml-5 sm:top-60 sm:left-32"
        src="/images/bg-card-front.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <div className="ml-3">
        <div className="sm:absolute fixed mt-8 ml-4 top-48 sm:text-2xl sm:top-52 sm:ml-4 sm:mt-6 sm:w-full w-[290px]">
          <span className="text-slate-50 sm:text-2xl text-lg font-semibold sm:tracking-widest tracking-wider">
            {cardNumber.length === 0 && "0000 0000 0000 0000"}
            {cardNumber.split("").map((char, index) => {
              if(index < 4) {
                return char;
              }
              if(index % 4 === 0) {
                return `${char} `;
              }
              return char;
            })}
          </span>
        </div>
        <div className="sm:absolute fixed sm:top-64 top-64 ml-5 sm:ml-4 flex justify-between w-3/4 sm:w-[300px]">
          <span className="text-slate-50 text-xs sm:text-sm font-semibold mt-1 sm:mt-5 tracking-widest">
            { cardName.length === 0 && "JANE APPLESEED"}
            { cardName }
          </span>
          <span className="text-slate-50 sm:text-sm text-xs mt-1 sm:mt-5 font-semibold tracking-widest mr-4">
            { expMonth.length === 0 && "00" }
            {
              expMonth.length === 1 && "0" + expMonth
            }
            {
              expMonth.length === 2 && expMonth
            }
            /
            { expYear.length === 0 && "00" }
            { expYear }
          </span>
        </div>
      </div>
    </div>
  );
};
