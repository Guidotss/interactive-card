'use client'
import { CardContext } from "@/context"
import Image from "next/image"
import { useContext } from "react"

export const CardBack = () => {
  const { cvv } = useContext(CardContext); 

  return (
    <div>
      <Image
          className="sm:w-[400px] sm:left-60 sm:top-[500px] sm:h-auto rounded-lg object-cover w-[286px] h-[157px] fixed top-7 right-2 "
          src="/images/bg-card-back.png"
          alt="Picture of the author"
          width={500}
          height={500}
      />
      <div className=" sm:absolute sm:top-[-140px] sm:right-[-300px] fixed top-20 right-11 mt-3 sm:mt-0">
        <span className="text-md font-semibold text-slate-50 tracking-widest">
          {
            cvv.length === 0 && "000"
          }
          { cvv }
        </span>
      </div>
    </div>
  )
}