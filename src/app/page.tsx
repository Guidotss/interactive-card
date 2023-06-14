'use client'
import { CardBack, CardFront, NewCardForm, UserSaved } from "@/components";
import Image from "next/image";
import { useState } from "react";
import 'animate.css'

export default function Home() {

  const [ wasSubmitted, setWasSubmitted ] = useState(false)

  return (
    <main className="flex items-center bg-slate-100 h-screen w-full">
      <div className="w-full sm:w-auto">
        <Image
          className="md:h-screen md:w-[400px] h-52 object-cover absolute top-0"
          src="/images/bg-main-desktop.png"
          alt="Picture of the author" 
          width={500}
          height={500}
        />
      </div>
      <div className="sm:absolute z-10 2xl:left-44 sm:top-36 sm:left-28 w-3/4">
        <CardFront />
      </div>
      <div className="absolute z-8 2xl:left-72 2xl:bottom-56 sm:bottom-10 sm:left-40 shadow-2xl">
        <CardBack />
      </div>
      <div className="flex-1">
        {
          wasSubmitted ? (
            <div className="animate__animated animate__fadeInDown mt-52 w-full sm:mt-0 flex flex-col items-center justify-center">
              <UserSaved continueController={setWasSubmitted} />
            </div>
          )
          :(
            <NewCardForm submitController={setWasSubmitted} />
          )
        }
      </div>
    </main>
  );
}
