"use client";
import Image from "next/image";
import { CardLogo } from "./icons";
import { useNewUser } from "@/hooks";
import { useContext } from "react";
import { CardContext } from "@/context";

export const CardFront = () => {
  const { cardName, cardNumber,expMonth, expYear } = useContext(CardContext);

  return (
    <div className="w-full">
      <div className="absolute mt-5 ml-10">
        <CardLogo />
      </div>
      <Image
        className="object-cover sm:w-[400px] sm:rounded-lg w-full"
        src="/images/bg-card-front.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <div className="ml-3 w-full">
        <div className="absolute mt-5 ml-10 top-32 text-2xl sm:top-32 sm:mt-2 w-full">
          <span className="text-slate-50 text-2xl font-semibold tracking-widest">
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
        <div className="absolute top-44 ml-10 flex justify-between w-3/4">
          <span className="text-slate-50 text-sm font-semibold tracking-widest">
            { cardName.length === 0 && "JANE APPLESEED"}
            { cardName }
          </span>
          <span className="text-slate-50 text-sm font-semibold tracking-widest mr-4">
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
