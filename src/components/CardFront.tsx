"use client";
import Image from "next/image";
import { CardLogo } from "./icons";
import { useNewUser } from "@/hooks";
import { useContext } from "react";
import { CardContext } from "@/context";

export const CardFront = () => {
  const { cardName, cardNumber, cvv, expDate } = useContext(CardContext);
  console.log({
    cardName,
    cardNumber,
    cvv,
    expDate,
  });

  return (
    <div>
      <div className="absolute mt-5 ml-10">
        <CardLogo />
      </div>
      <Image
        className="object-cover sm:w-[400px] h-52 sm:rounded-lg"
        src="/images/bg-card-front.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <div className="absolute mt-10 ml-10 text-slate-50 top-40 text-2xl font-semibold tracking-widest sm:top-32 sm:mt-2">
        <span>
          {cardNumber.split("").map((char, index) => {
            if(index === 0) {
              return "0000 0000 0000 0000" - char.length;
            }
            if (index < 4) {
              return char;
            }
            if (index % 4 === 0) {
              return " " + char;
            }
            
          }).join("")}

        </span>
      </div>
    </div>
  );
};
