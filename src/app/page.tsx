import { CardBack, CardFront, NewCardForm } from "@/components";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex items-center bg-slate-100">
      <div>
        
        <Image
          className="h-screen"
          src="/images/bg-main-desktop.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <div className="absolute z-10 left-44 top-52">
        <CardFront/>
      </div>
      <div className="absolute z-10 left-72 bottom-40 shadow-2xl">
        <CardBack/>
      </div>
      <div className="flex-1">
        <NewCardForm/>  
      </div>
    </main>
  )
}
