import Image from "next/image"

export const CardBack = () => {
  return (
    <Image
        src="/images/bg-card-back.png"
        alt="Picture of the author"
        width={500}
        height={500}
    />
  )
}