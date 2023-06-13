'use client'
import Image from "next/image"
import { CardLogo } from "./icons"
import { useNewUser } from "@/hooks"
import { useContext } from 'react';
import { CardContext } from "@/context";

export const CardFront = () => {

  const { cardName,cardNumber,cvv,expDate } =  useContext(CardContext) 
  console.log({
    cardName,
    cardNumber,
    cvv,
    expDate
  })

  return (
    <div>
        <div className="absolute mt-5 ml-10">
            <CardLogo/>
        </div>
        <Image
            className="object-cover"
            src="/images/bg-card-front.png"
            alt="Picture of the author"
            width={500}
            height={500}
        />
        <div className="absolute mt-10 ml-10 text-slate-50 top-40 text-2xl font-semibold tracking-widest">
          { cardNumber.split('').map((number, index) => {
            if (index < 4) {
              return number
            } else if (index % 4 === 0) {
              return ` ${number}`
            } else {
              return number
            }
          })}
        </div>
    </div>
  )
}