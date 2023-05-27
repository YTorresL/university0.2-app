"use client"
import Image from "next/image"
import Button from "@/components/Button/page"
import Link from "next/link"
import { Cloud } from "@/components/Icons/page"
import Line from "@/components/Line/page"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Parrafo from "@/components/Paragraph/page"
import Titulo from "@/components/Title/page"
import Calendly from "@/components/Calendly/page"
import ImageWidth from "@/components/ImageWidth/page"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "#servicios" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Universidades", href: "#universidades" },
  { name: "Agenda tu cita", href: "#agenda" },
]

const beneficios = [
  {
    icon: <Cloud width={50} height={50} className="w-10 h-10" fill="#2563EB" />,
    title: "Experiencia personalizada",
    description: "Asesores con amplio conocimiento del sistema educativo ruso.",
  },
  {
    icon: <Cloud width={50} height={50} className="w-10 h-10" fill="#2563EB" />,
    title: "Universidades de prestigio",
    description: "Acceso a instituciones de renombre y alta calidad académica.",
  },
  {
    icon: <Cloud width={50} height={50} className="w-10 h-10" fill="#2563EB" />,
    title: "Asesoría integral",
    description: "Apoyo personalizado en cada etapa del proceso educativo.",
  },
  {
    icon: <Cloud width={50} height={50} className="w-10 h-10" fill="#2563EB" />,
    title: "Opciones de financiamiento",
    description: "Explora becas y programas de ayuda financiera.",
  },
  {
    icon: <Cloud width={50} height={50} className="w-10 h-10" fill="#2563EB" />,
    title: "Comunidad estudiantil",
    description:
      "Conexiones con una red diversa de estudiantes y profesionales.",
  },
  {
    icon: <Cloud width={50} height={50} className="w-10 h-10" fill="#2563EB" />,
    title: "Confianza garantizada",
    description:
      "Trayectoria comprobada en la realización de sueños académicos.",
  },
]

const servicios = [
  {
    title:
      "Asesoramiento especializado en la elección de universidades y programas de estudio.",
  },
  {
    title:
      "Asesoramiento especializado en la elección de universidades y programas de estudio.",
  },
  {
    title: "Búsqueda de becas y programas de financiamiento.",
  },
  {
    title: "Apoyo en la búsqueda de alojamiento y adaptación al entorno ruso.",
  },
  {
    title:
      "Asistencia integral durante todo el proceso, desde la solicitud hasta la graduación.",
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
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: false,
    vertical: false,
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
            className="md:w-16 w-12"
          />
          <ul className="lg:flex items-center hidden">
            {navigation.map((item) => (
              <li key={item.name} className="ml-7">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <span className="hidden min-[375px]:block">+495 95220935</span>
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
            <div className="bg-gradient-to-r from-blue-500 to-transparent w-full h-full">
              <div className="flex flex-col justify-center h-full md:w-[50%] w-[90%] ml-[7%]">
                <h1 className="lg:text-4xl font-bold text-white text-xl">
                  ¡Descubre un mundo de oportunidades educativas en Rusia con
                  EDURU!
                </h1>
                <p className="text-white leading-5 mt-5">
                  En EDURU, nos apasiona brindar igualdad de oportunidades a
                  estudiantes latinoamericanos que buscan una educación de
                  calidad a nivel mundial. Con nuestra asesoría especializada y
                  un equipo comprometido, te ofrecemos la puerta de entrada a
                  las mejores universidades en Rusia.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10 place-items-center w-[90%] md:w-full mx-auto">
            {beneficios.map((item, index) => (
              <div className="flex items-center" key={index}>
                <div>
                  <div className="rounded-full shadow-lg bg-white py-2 px-3">
                    {item.icon}
                  </div>
                </div>
                <div className="ml-4 grid grid-cols-1 gap-1">
                  <h1 className="my-0 font-bold text-gray-800 text-lg leading-6">
                    {item.title}
                  </h1>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#ECF0FB]">
          <div className="w-[85%] mx-auto py-16">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center">
              <div className="md:w-1/2 md:mr-20">
                <Titulo>Servicios de EDURU</Titulo>
                <Line />

                <ul>
                  {servicios.map((item, index) => (
                    <li
                      className="my-3 text-gray-500 leadingy-6 flex"
                      key={index}
                    >
                      <div className="w-8 h-8 mr-4">
                        <Image
                          src="/check.png"
                          width={100}
                          height={100}
                          className="w-full h-full object-contain"
                        />
                      </div>
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
            <div className="flex flex-col md:flex-row items-center justify-center">
              <ImageWidth src="/meet.jpg" alt="nose" />
              <div className="md:w-1/2 w-full md:ml-20">
                <Titulo>Testimonios reales</Titulo>
                <Line />
                <Slider {...settings}>
                  {testimonios.map((item, index) => (
                    <div key={index} className="mb-10">
                      <div className="flex items-center my-5">
                        <div>
                          <div className="rounded-full w-20 h-20 overflow-hidden">
                            <Image
                              src={item.imagen}
                              width={500}
                              height={500}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="ml-4 grid grid-cols-1 gap-0">
                          <h1 className="my-0 font-bold text-gray-800 md:text-xl text-base leading-5">
                            {item.name}
                          </h1>
                          <p className="text-gray-500 text-sm leading-4 md:text-base">
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
              <div className="rounded-lg overflow-hidden bg-white">
                <div>
                  <div className="h-64 w-full">
                    <Image
                      src="/meet.jpg"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="m-5">
                    <p className="text-gray-400 text-sm">Abril 22, 2023</p>
                    <h3 className="text-base font-bold text-gray-800 leading-5 my-1">
                      Estudiar en Rusia con nuestro plan de movilidad académica
                    </h3>
                    <Link href="#" className="uppercase text-blue-600 text-xs">
                      Leer mas...
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div>
          <div className="w-[85%] mx-auto py-16">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <ImageWidth src="/meet.jpg" alt="nose" />
              <div className="md:w-1/2 md:ml-20">
                <Titulo>Proceso de asesoramiento</Titulo>
                <Line />

                <Parrafo>
                  En EDURU, te brindamos asesoría profesional y seguridad en
                  cada paso del proceso de admisión. ¡Cumple tus sueños
                  académicos con nosotros!
                </Parrafo>
                <ul className="mt-8">
                  {proceso.map((item, index) => (
                    <li className="my-3 flex leading-6" key={index}>
                      <div>
                        <div className="rounded-full bg-blue-500 text-white font-bold py-2 px-4 mr-5">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="my-0 font-bold text-gray-800 text-lg">
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
            <div className="flex flex-col-reverse md:flex-row items-center justify-center">
              <div className="md:w-1/2 md:mr-20">
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
            <div className="flex flex-col md:flex-row items-center justify-center">
              <ImageWidth src="/meet.jpg" alt="nose" />
              <div className="md:w-1/2 md:ml-20">
                <Titulo>Preguntas y respuestas</Titulo>
                <Line />
                {preguntas.map((item, index) => (
                  <details className="mb-1" key={index}>
                    <summary className="border border-blue-500 rounded-lg py-2 px-4 list-none text-gray-800 text-lg leading-5">
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
          <div className="grid grid-cols-2 gap-3 sm:gap-8 sm:grid-cols-5 w-full place-content-center">
            <div>
              <Image
                src="/logo.png"
                alt="logo"
                width={150}
                height={50}
                className="md:w-16 w-12 mb-4"
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
