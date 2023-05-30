import Image from "next/image"

export default function ImageWidth({ src, alt }) {
  return (
    <div>
      <div className="lg:w-96 md:h-[27rem] md:w-[18rem] w-full h-60 rounded-lg overflow-hidden mb-5 md:mb-0">
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={1000}
          className="object-cover w-full h-full transform hover:scale-105 transition duration-500 ease-in-out"
        />
      </div>
    </div>
  )
}
