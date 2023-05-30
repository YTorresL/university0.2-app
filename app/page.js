"use client"
import Image from "next/image"
import Button from "@/components/Button/page"
import Link from "next/link"
import {
  Advisor,
  Community,
  Custom,
  Phone,
  University,
} from "@/components/Icons/page"
import Line from "@/components/Line/page"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Parrafo from "@/components/Paragraph/page"
import Titulo from "@/components/Title/page"
import Calendly from "@/components/Calendly/page"
import ImageWidth from "@/components/ImageWidth/page"

const beneficios = [
  {
    icon: (
      <Custom width={100} height={100} className="w-10 h-10" fill="#2563EB" />
    ),
    title: "Experiencia personalizada",
    description: "Asesores con amplio conocimiento del sistema educativo ruso.",
  },
  {
    icon: (
      <University
        width={100}
        height={100}
        className="w-10 h-10"
        fill="#2563EB"
      />
    ),
    title: "Universidades de prestigio",
    description: "Acceso a instituciones de renombre y alta calidad académica.",
  },
  {
    icon: (
      <Advisor width={100} height={100} className="w-10 h-10" fill="#2563EB" />
    ),
    title: "Asesoría integral",
    description: "Apoyo personalizado en cada etapa del proceso educativo.",
  },

  {
    icon: (
      <Community
        width={100}
        height={100}
        className="w-10 h-10"
        fill="#2563EB"
      />
    ),
    title: "Comunidad estudiantil",
    description:
      "Conexiones con una red diversa de estudiantes y profesionales.",
  },
]

const servicios = [
  {
    title:
      "Asesoramiento especializado en la elección de universidades y programas de estudio.",
    icon: (
      <Advisor
        width={100}
        height={100}
        className="w-8 h-8 mr-3"
        fill="#2563EB"
      />
    ),
  },
  {
    title: "Gestión eficiente de trámites de visas y documentación requerida.",
    icon: (
      <Advisor
        width={100}
        height={100}
        className="w-8 h-8 mr-3"
        fill="#2563EB"
      />
    ),
  },
  {
    title: "Búsqueda de becas y programas de financiamiento.",
    icon: (
      <Advisor
        width={100}
        height={100}
        className="w-8 h-8 mr-3"
        fill="#2563EB"
      />
    ),
  },
  {
    title: "Apoyo en la búsqueda de alojamiento y adaptación al entorno ruso.",
    icon: (
      <Advisor
        width={100}
        height={100}
        className="w-8 h-8 mr-3"
        fill="#2563EB"
      />
    ),
  },
  {
    title:
      "Asistencia integral durante todo el proceso, desde la solicitud hasta la graduación.",
    icon: (
      <Advisor
        width={100}
        height={100}
        className="w-8 h-8 mr-3"
        fill="#2563EB"
      />
    ),
  },
]

const testimonios = [
  {
    name: "Alejandra Gabaldón",
    comentario: `Fue una experiencia increíble, me encantó la ciudad, la universidad, la gente, la cultura, todo. Estoy muy agradecida con EDURU por ayudarme a cumplir mi sueño de estudiar en Rusia.`,
    carrera: "Relaciones internacionales",
    imagen: "/profile.jpg",
  },
  {
    name: "Alejandra Gabaldón",
    comentario: `Fue una experiencia increíble, me encantó la ciudad, la universidad, la gente, la cultura, todo. Estoy muy agradecida con EDURU por ayudarme a cumplir mi sueño de estudiar en Rusia.`,
    carrera: "Relaciones internacionales",
    imagen: "/profile.jpg",
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

const preguntas = [
  {
    title: "System Requirements",
    description:
      "Requires a computer running an operating system. The computer must have some memory and ideally some kind of long-term storage. An input device as well as some form of output device is recommended.",
  },
  {
    title: "Inicia tu carrera",
    description:
      "Requires a computer running an operating system. The computer must have some memory and ideally some kind of long-term storage. An input device as well as some form of output device is recommended.",
  },
]

const universidades = [
  {
    type: "Universidad",
    title: "Universidad Estatal de Moscú",
    description:
      "La Universidad Estatal de Moscú es una universidad pública de investigación ubicada en Moscú, Rusia. Fundada en 1755 por Mijaíl Lomonósov, es la universidad más antigua de Rusia y una de las más prestigiosas del mundo.",
    imagen: "/meet.jpg",
  },
  {
    type: "Universidad",
    title: "Universidad de San Petersburgo",
    description:
      "La Universidad Estatal de San Petersburgo es una universidad pública de investigación ubicada en San Petersburgo, Rusia. Fundada en 1724 por Pedro el Grande, es la universidad más antigua de Rusia y una de las más prestigiosas del mundo.",
    imagen: "/meet.jpg",
  },
  {
    type: "Universidad",
    title: "Universidad de Kaerov",
    description:
      "La Universidad Estatal de Kaerov es una universidad pública de investigación ubicada en Kaerov, Rusia. Fundada en 1724 por Pedro el Grande, es la universidad más antigua de Rusia y una de las más prestigiosas del mundo.",
    imagen: "/meet.jpg",
  },
  {
    type: "Universidad",
    title: "Universidad Estatal de Moscú",
    description:
      "La Universidad Estatal de Moscú es una universidad pública de investigación ubicada en Moscú, Rusia. Fundada en 1755 por Mijaíl Lomonósov, es la universidad más antigua de Rusia y una de las más prestigiosas del mundo.",
    imagen: "/meet.jpg",
  },
  {
    type: "Universidad",
    title: "Universidad de San Petersburgo",
    description:
      "La Universidad Estatal de San Petersburgo es una universidad pública de investigación ubicada en San Petersburgo, Rusia. Fundada en 1724 por Pedro el Grande, es la universidad más antigua de Rusia y una de las más prestigiosas del mundo.",
    imagen: "/meet.jpg",
  },
  {
    type: "Universidad",
    title: "Universidad de Kaerov",
    description:
      "La Universidad Estatal de Kaerov es una universidad pública de investigación ubicada en Kaerov, Rusia. Fundada en 1724 por Pedro el Grande, es la universidad más antigua de Rusia y una de las más prestigiosas del mundo.",
    imagen: "/meet.jpg",
  },
]

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: false,
    vertical: false,
  }

  const settings3 = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
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
      <header className="h-24 w-[85%] mx-auto">
        <div className="flex items-center justify-between h-full">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={50}
            className="w-12 md:w-14 lg:w-16"
          />
          <div className="flex items-center">
            <div className="hidden min-[375px]:block">
              <span className="flex items-center">
                <Phone
                  width={100}
                  height={100}
                  className="hidden mr-2 w-7 h-7 sm:block"
                  fill="#2563EB"
                />
                +495 95220935
              </span>
            </div>
            <Button
              title="Asesorias"
              styles="bg-blue-600 hover:bg-blue-700 text-white ml-4 md:ml-7"
              link="/asesoria"
            />
          </div>
        </div>
      </header>
      <main>
        <div className="w-[85%] mx-auto">
          <div className="bg-[url('/banner.jpg')] h-[35rem] bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-transparent">
              <div className="flex flex-col justify-center h-full lg:w-[50%] md:w-[60%] w-[90%] ml-[7%]">
                <h1 className="text-xl font-bold text-white lg:text-4xl sm:text-2xl md:text-3xl">
                  ¡Descubre un mundo de oportunidades educativas en Rusia con
                  EDURU!
                </h1>
                <p className="mt-5 leading-5 text-white">
                  En EDURU, nos apasiona brindar igualdad de oportunidades a
                  estudiantes latinoamericanos que buscan una educación de
                  calidad a nivel mundial. Con nuestra asesoría especializada y
                  un equipo comprometido, te ofrecemos la puerta de entrada a
                  las mejores universidades en Rusia.
                </p>
              </div>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-4 my-10 md:grid-cols-3 lg:grid-cols-4">
            {beneficios.map((item, index) => (
              <div className="flex flex-col md:items-center" key={index}>
                <div className="mb-4 flex">
                  <div className="px-3 py-2 bg-white rounded-full shadow-lg">
                    {item.icon}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-1 ml-4">
                  <h1 className="my-0 text-lg font-bold leading-6 text-gray-800">
                    {item.title}
                  </h1>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#ECF0FB]">
          <div className="w-[85%] mx-auto py-16">
            <div className="flex flex-col-reverse items-center justify-center md:flex-row">
              <div className="w-full md:w-1/2 md:mr-10 lg:mr-20">
                <Titulo>Servicios de EDURU</Titulo>
                <Line />

                <ul>
                  {servicios.map((item, index) => (
                    <li
                      className="flex my-3 text-gray-500 leadingy-6"
                      key={index}
                    >
                      {item.icon}
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
              <ImageWidth src="/meet.jpg" alt="nose" />
            </div>
          </div>
        </div>
        <div>
          <div className="w-[85%] mx-auto py-16">
            <div className="flex flex-col items-center justify-center md:flex-row">
              <ImageWidth src="/meet.jpg" alt="nose" />
              <div className="w-full md:w-1/2 md:ml-10 lg:ml-20">
                <Titulo>Testimonios reales</Titulo>
                <Line />
                <Slider {...settings}>
                  {testimonios.map((item, index) => (
                    <div key={index} className="mb-10">
                      <div className="flex items-center my-5">
                        <div>
                          <div className="w-20 h-20 overflow-hidden rounded-full">
                            <Image
                              src={item.imagen}
                              width={500}
                              height={500}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-0 ml-4">
                          <h1 className="my-0 text-base font-bold leading-5 text-gray-800 md:text-xl">
                            {item.name}
                          </h1>
                          <p className="text-sm leading-4 text-gray-500 md:text-base">
                            {item.carrera}
                          </p>
                        </div>
                      </div>
                      <Parrafo>{item.comentario}</Parrafo>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ECF0FB]">
          <div className="w-[85%] mx-auto py-16">
            <Titulo>Universidades y programas</Titulo>
            <Line />

            <Slider {...settings3}>
              {universidades.map((item, index) => (
                <div key={index} className="p-2">
                  <div className="overflow-hidden bg-white rounded-lg">
                    <div>
                      <div className="w-full h-64">
                        <Image
                          src={item.imagen}
                          width={1000}
                          height={1000}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="m-5">
                        <p className="text-sm text-gray-400">{item.type}</p>
                        <h3 className="my-1 text-base font-bold leading-5 text-gray-800">
                          {item.title}
                        </h3>
                        <Parrafo>{item.description}</Parrafo>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div>
          <div className="w-[85%] mx-auto py-16">
            <div className="flex flex-col items-center justify-center md:flex-row">
              <ImageWidth src="/meet.jpg" alt="nose" />
              <div className="w-full md:w-1/2 md:ml-10 lg:mrl-20">
                <Titulo>Proceso de asesoramiento</Titulo>
                <Line />

                <Parrafo>
                  En EDURU, te brindamos asesoría profesional y seguridad en
                  cada paso del proceso de admisión. ¡Cumple tus sueños
                  académicos con nosotros!
                </Parrafo>
                <ul className="mt-8">
                  {proceso.map((item, index) => (
                    <li className="flex my-3 leading-6" key={index}>
                      <div>
                        <div className="px-4 py-2 mr-5 font-bold text-white bg-blue-500 rounded-full">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="my-0 text-lg font-bold text-gray-800">
                          {item.title}
                        </h1>
                        <Parrafo>{item.description}</Parrafo>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ECF0FB]">
          <div className="w-[85%] mx-auto py-16">
            <div className="flex flex-col-reverse items-center justify-center md:flex-row">
              <div className="w-full md:w-1/2 md:mr-10 lg:mr-20">
                <Titulo>Agenda tu cita</Titulo>
                <Line />
                <Calendly />
              </div>
              <ImageWidth src="/meet.jpg" alt="nose" />
            </div>
          </div>
        </div>
        <div>
          <div className="w-[85%] mx-auto py-16">
            <div className="flex flex-col items-center justify-center md:flex-row">
              <ImageWidth src="/meet.jpg" alt="nose" />
              <div className="w-full md:w-1/2 md:ml-10 lg:ml-20">
                <Titulo>Preguntas y respuestas</Titulo>
                <Line />
                {preguntas.map((item, index) => (
                  <details className="mb-1" key={index}>
                    <summary className="px-4 py-2 text-lg leading-5 text-gray-800 list-none border border-blue-500 rounded-lg">
                      {item.title}
                    </summary>
                    <div className="my-3">
                      <Parrafo>{item.description}</Parrafo>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="mx-auto w-[85%] p-4 py-6 lg:py-20">
          <div className="grid w-full grid-cols-2 gap-3 sm:gap-8 sm:grid-cols-5 place-content-center">
            <div>
              <Image
                src="/logo.png"
                alt="logo"
                width={150}
                height={50}
                className="w-12 mb-4 md:w-16"
              />
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023 Marca™. All Rights Reserved.
              </span>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-bold text-gray-800">
                Resources
              </h2>
              <ul className="text-base text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Blog empresas
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Seguridad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-bold text-gray-800">
                Follow us
              </h2>
              <ul className="text-base text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Trabaja con nosotros
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Seguridad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-bold text-gray-800">Legal</h2>
              <ul className="text-base text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Seguridad
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Trabaja con nosotros
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
