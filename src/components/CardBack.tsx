'use client'
import { CardContext } from "@/context"
import Image from "next/image"
import { useContext } from "react"

export const CardBack = () => {
  const { cvv } = useContext(CardContext); 
  return (
    <div>
      <Image
          className="sm:w-[400px] sm:rounded-lg object-cover w-full"
          src="/images/bg-card-back.png"
          alt="Picture of the author"
          width={500}
          height={500}
      />
      <div className="absolute top-24 right-14">
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