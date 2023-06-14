'use client'
import { CardBack, CardFront, NewCardForm, UserSaved } from "@/components";
import Image from "next/image";
import { useState } from "react";
import 'animate.css'

export default function Home() {

  const [ wasSubmitted, setWasSubmitted ] = useState(false)

  return (
    <main className="flex items-center bg-slate-100">
      <div>
        <Image
          className="h-screen sm:w-[400px] object-cover"
          src="/images/bg-main-desktop.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <div className="absolute z-10 2xl:left-44 2xl:top-56 sm:top-28 sm:left-28">
        <CardFront />
      </div>
      <div className="absolute z-10 2xl:left-72 2xl:bottom-56 sm:bottom-10 sm:left-40 shadow-2xl">
        <CardBack />
      </div>
      <div className="flex-1">
        {
          wasSubmitted ? (
            <div className="animate__animated animate__fadeInDown">
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
