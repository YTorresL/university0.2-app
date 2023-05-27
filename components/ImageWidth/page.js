import Image from "next/image"

export default function ImageWidth({ src, alt }) {
  return (
    <div>
      <div className="md:w-96 md:h-[27rem] w-60 h-60 rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
