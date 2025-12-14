"use client"
import Image from "next/image"
import Line from "@/components/Line/page"
import Parrafo from "@/components/Paragraph/page"
import Titulo from "@/components/Title/page"
import ImageWidth from "@/components/ImageWidth/page"
import Link from "next/link"
import OpacityAnimation from "@/components/OpacityAnimation/page"
import { Instagram, TikTok, Youtube } from "@/components/Icons/page"
import { Header } from "@/components/layout/header"
import { Hero } from "@/sections/hero"
import { Language } from "@/sections/language"
import { Program } from "@/sections/program"
import { Process } from "@/sections/process"
import StudentMap from "@/sections/cta"



const link = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/zdorovo.russia/",
    svg: <Instagram className="w-11 h-11" />,
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/@zdorovo.russia",
    svg: <Youtube className="w-11 h-11 -ml-10 sm:ml-1" fill="#fff" />,
  },
  {
    name: "Tik Tok",
    link: "https://www.tiktok.com/@zdorovo.russia?is_from_webapp=1&sender_device=pc",
    svg: (
      <TikTok className="w-[3.5rem] h-[3.5rem] -mt-[0.45rem] -ml-[5.2rem] sm:ml-0" />
    ),
  },
]

const preguntas = [
  {
    title: "¿Cuáles son los requisitos para estudiar en Rusia como extranjero?",
    description:
      "Los requisitos pueden variar según la universidad y el programa, pero generalmente necesitarás presentar una solicitud de admisión, un pasaporte válido, certificados de estudios anteriores, un formulario de solicitud de visa, un seguro médico y pruebas de dominio del idioma ruso (a menos que el programa se imparta en inglés).",
  },
  {
    title:
      "¿Qué opciones de financiamiento están disponibles para estudiar en Rusia?",
    description:
      "Hay varias opciones de financiamiento disponibles, como becas gubernamentales, becas universitarias, programas de intercambio, financiamiento personal o préstamos educativos. Puedes investigar las becas ofrecidas por el gobierno ruso, tu propio gobierno, organizaciones internacionales y fundaciones educativas.",
  },
  {
    title: "¿Es necesario hablar ruso para estudiar en Rusia?",
    description:
      "Depende del programa y la universidad. Algunos programas se imparten completamente en inglés, especialmente a nivel de posgrado, mientras que otros requieren un nivel mínimo de competencia en ruso. Sin embargo, aprender ruso básico puede ser beneficioso para la vida cotidiana y la interacción con los lugareños.",
  },
  {
    title: "¿Cómo es la vida estudiantil en Rusia?",
    description:
      "La vida estudiantil en Rusia es vibrante y diversa. Las universidades ofrecen una amplia gama de actividades extracurriculares, clubes estudiantiles y eventos culturales. Además, hay muchas oportunidades para explorar la cultura rusa, como visitar museos, asistir a festivales y viajar a diferentes ciudades del país durante las vacaciones.",
  },
  {
    title:
      "¿Cuál es el costo de vida en Rusia para los estudiantes extranjeros?",
    description:
      "El costo de vida en Rusia puede variar según la ciudad y el estilo de vida individual. En general, las ciudades más grandes como Moscú y San Petersburgo tienden a ser más costosas que las ciudades más pequeñas. Sin embargo, en comparación con otros destinos de estudio en Europa o América del Norte, Rusia puede ser más asequible en términos de alojamiento, transporte y alimentos.",
  },
]

export default function Home() {
  const flechas = []

  for (let i = 0; i < 3; i++) {
    flechas.push(
      <div key={i} className="h-10">
        <Image
          src="/arrow.png"
          alt="arrow"
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>
    )
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Language />
        <Program />
        <Process />
        
        <div className="bg-[url('/backto.jpg')] bg-center bg-no-repeat bg-cover overflow-hidden">
          <div className="bg-[#001959]/70">
            <div className="w-[85%] mx-auto py-10">
              <StudentMap />
            </div>
          </div>
        </div>
        <div>
          <div className="w-[85%] mx-auto py-16">
            <div className="flex flex-col items-center justify-center md:flex-row">
              <ImageWidth
                src="/idioma.jpg"
                alt="Tienes alguna duda, te invitamos a revisar las preguntas más frecuentes."
              />
              <div className="w-full md:w-1/2 md:ml-10 lg shadow-gray-300:mrl-20">
                <Titulo>FAQ</Titulo>
                <Line />
                <Parrafo>
                  Tienes alguna duda, te invitamos a revisar las preguntas más
                  frecuentes.
                </Parrafo>
                {preguntas.map((item, index) => (
                  <OpacityAnimation key={index}>
                    <details className="mt-1">
                      <summary className="flex leading-6 text-[#001959] border-b border-[#001959] p-2 font-semibold">
                        {item.title}
                      </summary>
                      <div className="m-3">
                        <Parrafo>{item.description}</Parrafo>
                      </div>
                    </details>
                  </OpacityAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-blue-900 text-white">
        <div className="mx-auto w-[95%] md:w-[85%] p-4 pt-6 md:pt-20 lg:pb-0">
          <div className="grid w-full md:justify-items-end grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-4 sm:gap-8">
            <Image
              src="/logoW.png"
              alt="ZDOROVO"
              width={800}
              height={800}
              className="w-48 md:w-72 lg:w-80 mb-6"
            />
            <div className="sm:col-span-2 break-words">
              <ul className="text-base">
                <li className="mb-2">
                  <p>
                    Contáctanos para saber mas información sobre los programas.
                  </p>
                </li>
                <li className="mb-2">
                  <h2 className="mb-2 text-base font-bold uppercase">
                    Numero de contacto
                  </h2>
                  <p>+495 95220935</p>
                </li>
                <li className="mb-2">
                  <h2 className="mb-2 text-base font-bold uppercase">
                    Correo electronico
                  </h2>
                  <p>informacionzdorovo@gmail.com</p>
                </li>
              </ul>
            </div>
            <div className="break-words">
              <h2 className="mb-4 text-base font-bold uppercase">
                Redes sociales
              </h2>
              <ul className="grid grid-cols-3">
                {link.map((item, index) => (
                  <li className="mb-2" key={index}>
                    <Link href={item.link}>{item.svg}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center py-5 md:py-10">
            <span>© 2023 ZDOROVO. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
