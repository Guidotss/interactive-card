import Image from "next/image"

export const CardBack = () => {
  return (
    <Image
        className="sm:w-[400px] h-52 sm:rounded-lg object-cover"
        src="/images/bg-card-back.png"
        alt="Picture of the author"
        width={500}
        height={500}
    />
  )
}