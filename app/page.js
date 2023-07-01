"use client"
import Image from "next/image"
import Line from "@/components/Line/page"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Parrafo from "@/components/Paragraph/page"
import Titulo from "@/components/Title/page"
import ImageWidth from "@/components/ImageWidth/page"
import Link from "next/link"
import OpacityAnimation from "@/components/OpacityAnimation/page"
import { Instagram, TikTok, Youtube } from "@/components/Icons/page"

const sliderPrincipal = [
  {
    image: "/1.jpg",
  },
  {
    image: "/2.jpg",
  },
  {
    image: "/3.jpg",
  },
  {
    image: "/4.jpg",
  },
  {
    image: "/5.jpg",
  },
  {
    image: "/6.jpg",
  },
  {
    image: "/7.jpg",
  },
  {
    image: "/8.jpg",
  },
]

const proceso = [
  {
    title: "Inscripción",
    description: `Regístrate fácilmente en línea o visita nuestras oficinas en tu país.`,
  },
  {
    title: "Visado",
    description: `Te ayudamos con la carta de invitación estudiantil y el proceso de visa.`,
  },
  {
    title: "Viaje e instalación",
    description: `Te recibimos en el aeropuerto y te instalamos en tu residencia universitaria.`,
  },
  {
    title: "Preuniversitario",
    description: ` Aprende el idioma ruso y prepárate para tu carrera.`,
  },
  {
    title: "Inicia tu carrera",
    description: `Estudia en las mejores universidades de Rusia y alcanza tus metas.`,
  },
]

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

const programas = [
  {
    index: 0,
    title: "Carreras",
    description:
      "La Universidad Estatal de Moscú es una universidad pública de investigación ubicada en Moscú, Rusia. Fundada en 1755 por Mijaíl Lomonósov, es la universidad más antigua de Rusia y una de las más prestigiosas del mundo.",
    imagen: "/moscu.jpg",
  },
  {
    index: 1,
    title: "Maestrías",
    description:
      "La Universidad Estatal de Kaerov es una universidad pública de investigación ubicada en Kaerov, Rusia. Fundada en 1724 por Pedro el Grande, es la universidad más antigua de Rusia y una de las más prestigiosas del mundo.",
    imagen: "/maestria.jpg",
  },
  {
    index: 2,
    title: "Curso de ruso",
    description:
      "La Universidad Estatal de Kaerov es una universidad pública de investigación ubicada en Kaerov, Rusia. Fundada en 1724 por Pedro el Grande, es la universidad más antigua de Rusia y una de las más prestigiosas del mundo.",
    imagen: "/ruso.jpg",
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
  const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

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

  const settings3 = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }
  return (
    <>
      <header className="sm:h-24 h-20 w-[85%] mx-auto">
        <div className="flex items-center justify-between h-full">
          <Image
            src="/logoO.png"
            alt="ZDOROVO"
            width={800}
            height={800}
            className="w-24 sm:w-28 lg:w-36"
          />
        </div>
      </header>
      <main>
        <div className="w-[85%] mx-auto">
          <div className="rounded-3xl overflow-hidden">
            <div className="relative h-[35rem]">
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-r from-[#001959]/80 to-transparent z-30"></div>
              <Slider {...settings}>
                {sliderPrincipal.map((item, index) => (
                  <div className="h-[35rem]" key={index}>
                    <Image
                      src={item.image}
                      alt="DILE HOLA A RUSIA, sin importar si tienes un conocimiento mínimo del idioma y obtén tu visado en menos de 90 días"
                      width={2000}
                      height={2000}
                      className="object-cover object-center w-full h-full -z-10"
                    />
                  </div>
                ))}
              </Slider>
              <div className="absolute top-0 bottom-0 right-0 left-0 z-50">
                <div className="flex flex-col justify-center h-full lg:w-[50%] md:w-[60%] w-[90%] ml-[7%]">
                  <h1 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                    DILE HOLA A RUSIA
                  </h1>
                  <h1 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                    Sin importar si tienes un conocimiento mínimo del idioma y
                    obtén tu visado en menos de 90 días
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16 flex flex-col justify-center items-center">
          <div className="mb-8 grid grid-cols-3 gap-2">{flechas}</div>
        </div>
        <OpacityAnimation>
          <div className="w-[85%] md:w-[50%] mx-auto">
            <YoutubeEmbed embedId="OlI_glpNGUY " />
          </div>
        </OpacityAnimation>
        <div>
          <div className="sm:w-[60%] mx-auto py-16 w-[85%]">
            <div className="text-center">
              <OpacityAnimation>
                <Titulo>¿IDIOMA? Не волнуйся</Titulo>
                <Line center />
                <Parrafo>
                  ¿No entendiste verdad? Tranquilo yo estaba igual al principio
                  y ya pase por ese proceso, es mas sencillo de lo que crees.
                  Uno de los primeros pasos que realizaremos será en la
                  inscripción de la facultad de idioma, por cierto, no te
                  olvides, tenemos la comunidad ZDOROVO en rusia que hara mas
                  agradable tu experiencia.
                </Parrafo>
              </OpacityAnimation>
            </div>
          </div>
        </div>

        <div className="bg-[#f3f9ff]">
          <OpacityAnimation>
            <div className="w-[85%] mx-auto py-16">
              <Titulo>Universidades y programas</Titulo>
              <Line />
              <Slider {...settings3}>
                {programas.map((item, index) => (
                  <div key={index} className="px-4 py-6 relative">
                    <div className="overflow-hidden rounded-lg transform hover:scale-105 transition duration-500 ease-in-out hover:shadow-lg">
                      <div className="bg-[#001959]/30 absolute h-full w-full">
                        <div className="flex items-center justify-center h-full">
                          <h1 className="text-xl font-bold text-white lg:text-4xl sm:text-2xl md:text-3xl">
                            {item.title}
                          </h1>
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
              </Slider>
            </div>
          </OpacityAnimation>
        </div>
        <div>
          <div className="w-[85%] mx-auto py-16">
            <div className="flex flex-col items-center justify-center md:flex-row">
              <ImageWidth
                src="/wwww.png"
                alt="Paso a paso desde que estas en tu país hasta que llegas a RUSIA"
              />
              <div className="w-full md:w-1/2 md:ml-10 lg shadow-gray-300:mrl-20">
                <ul className="mt-8">
                  <OpacityAnimation>
                    <Titulo>
                      Paso a paso desde que estas en tu país hasta que llegas a
                      RUSIA
                    </Titulo>
                    <Line />
                    {proceso.map((item, index) => (
                      <li className="flex my-3 leading-6" key={index}>
                        <div>
                          <div className="px-4 py-2 mr-5 font-bold text-white bg-[#6083D4] hover:bg-[#001959] transition duration-500 ease-in-out rounded-full">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <h1 className="my-0 text-lg font-semibold text-[#001959]">
                            {item.title}
                          </h1>
                          <Parrafo>{item.description}</Parrafo>
                        </div>
                      </li>
                    ))}
                  </OpacityAnimation>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[url('/backto.jpg')] bg-center bg-no-repeat bg-cover overflow-hidden">
          <div className="bg-[#001959]/70">
            <div className="w-[85%] mx-auto py-10">
              <div className="flex flex-col items-center justify-center md:flex-row">
                <div className="w-full md:w-1/2 md:mr-10 lg:mr-20">
                  <ImageWidth
                    src="/estudiante.jpg"
                    alt="Ellos ya están viviendo la experiencia de pertenecer en la comunidad latina de mas rapido crecimiento en Rusia con ZDOROVO"
                  />
                </div>
                <OpacityAnimation>
                  <div className="my-6">
                    <h1 className="text-xl font-bold text-white sm:text-2xl md:text-3xl m-0">
                      Ellos ya están viviendo la experiencia de pertenecer en la
                      comunidad latina de mas rapido crecimiento en Rusia con
                      ZDOROVO
                    </h1>
                    <button className="px-6 py-2 mt-6 text-white bg-[#6083D4] hover:bg-[#4567b8] transition duration-500 ease-in-out rounded-full">
                      ¿Quieres ser el proximo en Rusia?
                    </button>
                  </div>
                </OpacityAnimation>
              </div>
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

      <footer className="bg-[#001959] text-white">
        <div className="mx-auto w-[95%] md:w-[85%] p-4 pt-6 md:pt-20 lg:pb-0">
          <div className="grid w-full md:justify-items-end grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-4 sm:gap-8">
            <Image
              src="/logoW.png"
              alt="ZDOROVO"
              width={800}
              height={800}
              className="w-48 md:w-72 lg:w-80 mb-6"
            />
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
          </div>
          <div className="text-center py-5 md:py-10">
            <span>© 2023 ZDOROVO. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
