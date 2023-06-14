import { CardBack, CardFront, NewCardForm } from "@/components";
import Image from "next/image";


export default function Home() {
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
      <div className="absolute z-10 left-44 top-52 sm:top-28 sm:left-28">
        <CardFront/>
      </div>
      <div className="absolute z-10 left-72 bottom-40 sm:bottom-10 sm:left-40 shadow-2xl">
        <CardBack/>
      </div>
      <div className="flex-1">
        <NewCardForm/>  
      </div>
    </main>
  )
}
