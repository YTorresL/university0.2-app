import Line from "@/components/Line/page"
import OpacityAnimation from "@/components/OpacityAnimation/page"
import Titulo from "@/components/Title/page"
import { Book, GraduationCap, Users } from "lucide-react"
import Image from "next/image"

const programas = [
  {
    index: 0,
    title: "Carreras",
    description: "Programas de pregrado en diversas áreas del conocimiento.",
    imagen: "/moscu.jpg",
    button: {
      text: "Ver carreras",
      link: "/carreras",
    },
    color: "border-purple-500",
    background: "bg-purple-900/70",
    icon: Users,
  },
  {
    index: 1,
    title: "Maestrías",
    description: "Programas de posgrado para especialización profesional.",
    imagen: "/maestria.jpg",
    button: {
      text: "Ver maestrías",
      link: "/maestrias",
    },
    color: "border-orange-500",
    background: "bg-orange-900/70",
    icon: GraduationCap,
  },
  {
    index: 2,
    title: "Curso de ruso",
    description: "Preparación intensiva del idioma ruso.",
    imagen: "/ruso.jpg",
    button: {
      text: "Ver curso",
      link: "/curso-ruso",
    },
    color: "border-red-500",
    background: "bg-red-900/70",
    icon: Book,
  },
]

export function Program() {
  return (
    <section className="bg-[#f3f9ff]">
      <OpacityAnimation>
        <div className="w-[85%] mx-auto py-16">
          <Titulo>Universidades y programas</Titulo>
          <Line />
          <div className="mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programas.map((item, index) => (
              <div
                key={index}
                className={`relative ${item.color} overflow-hidden rounded-lg shadow-lg border-l-8`}
              >
                <div className="transform hover:scale-105 transition duration-500 ease-in-out hover:shadow-lg">
                  <div className={`${item.background} absolute h-full w-full`}>
                    <div className="flex items-center justify-center h-full flex-col p-6 text-center">
                      <figure
                        className={`w-20 h-20 rounded-full mb-4 ${item.background} flex items-center justify-center`}
                      >
                        <item.icon className="text-white" size={48} />
                      </figure>
                      <h1 className="text-xl font-bold text-white lg:text-4xl sm:text-2xl md:text-3xl">
                        {item.title}
                      </h1>
                      <p className="text-white mb-4 leading-relaxed twxt-lg h-16">
                        {item.description}
                      </p>
                      <a
                        href={item.button.link}
                        className="bg-white text-blue-900 hover:bg-blue-100 px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
                      >
                        {item.button.text}
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="w-full h-96">
                      <Image
                        src={item.imagen}
                        alt={item.description}
                        width={1000}
                        height={1000}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </OpacityAnimation>
    </section>
  )
}
