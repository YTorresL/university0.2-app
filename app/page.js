"use client"
import Image from "next/image"
import Button from "@/components/Button/page"
import Link from "next/link"
import {
  Advisor,
  Calendar,
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
import CalOpen from "@/components/Calendly/page"
import ImageWidth from "@/components/ImageWidth/page"

const beneficios = [
  {
    icon: (
      <Custom width={100} height={100} className="w-10 h-10" fill="#001959" />
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
        fill="#001959"
      />
    ),
    title: "Universidades de prestigio",
    description: "Acceso a instituciones de renombre y alta calidad académica.",
  },
  {
    icon: (
      <Advisor width={100} height={100} className="w-10 h-10" fill="#001959" />
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
        fill="#001959"
      />
    ),
    title: "Comunidad estudiantil",
    description:
      "Conexiones con una red diversa de estudiantes y profesionales.",
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

const universidades = [
  {
    type: "Moscú",
    title: "Universidad Estatal de Moscú",
    description:
      "La Universidad Estatal de Moscú es una universidad pública de investigación ubicada en Moscú, Rusia. Fundada en 1755 por Mijaíl Lomonósov, es la universidad más antigua de Rusia y una de las más prestigiosas del mundo.",
    imagen: "/moscu.jpg",
  },
  {
    type: "San Petersburgo",
    title: "Universidad de San Petersburgo",
    description:
      "La Universidad Estatal de San Petersburgo es una universidad pública de investigación ubicada en San Petersburgo, Rusia. Fundada en 1724 por Pedro el Grande, es la universidad más antigua de Rusia y una de las más prestigiosas del mundo.",
    imagen: "/sanpetersburgo.jpg",
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
                  fill="#001959"
                />
                +495 95220935
              </span>
            </div>
            <Button
              title="Asesorias"
              styles="bg-[#001959] hover:bg-[#00227A] text-white ml-4 md:ml-7"
              link="/asesoria"
            />
          </div>
        </div>
      </header>
      <main>
        <div className="w-[85%] mx-auto">
          <div className="bg-[url('/banner.jpg')] h-[35rem] bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-[#001959] to-transparent">
              <div className="flex flex-col justify-center h-full lg:w-[50%] md:w-[60%] w-[90%] ml-[7%]">
                <h1 className="text-xl font-bold text-white lg:text-4xl sm:text-2xl md:text-3xl">
                  ¡Descubre un mundo de oportunidades educativas en Rusia con
                  Marca!
                </h1>
                <p className="mt-5 leading-5 text-white">
                  En Marca, nos apasiona brindar igualdad de oportunidades a
                  estudiantes latinoamericanos que buscan una educación de
                  calidad a nivel mundial. Con nuestra asesoría especializada y
                  un equipo comprometido, te ofrecemos la puerta de entrada a
                  las mejores universidades en Rusia.
                </p>
                <div className="mt-4 rounded-lg overflow-hidden bg-[#6083D4]/80 w-56 md:w-72 py-2 shadow-lg">
                  <div className="flex justify-center items-center">
                    <Calendar fill="#001959" className="h-7 w-7" />
                    <div className="ml-3 md:ml-4">
                      <span className="text-white text-sm">
                        Inicio de Inscripciones
                      </span>
                      <p className="mt-0 text-white">7 de Junio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-4 my-10 md:grid-cols-3 lg:grid-cols-4">
            {beneficios.map((item, index) => (
              <div
                className="flex flex-col items-center hover:shadow-lg rounded-lg py-4 hover:shadow-black/5 transition duration-500 ease-in-out"
                key={index}
              >
                <div className="mb-4">
                  <div className="p-3 bg-white rounded-lg shadow-lg shadow-black/5">
                    {item.icon}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-1 mx-2 text-center">
                  <h1 className="my-0 text-lg font-bold leading-6 text-[#001959]">
                    {item.title}
                  </h1>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="sm:w-[60%] mx-auto py-16 w-[85%]">
            <div className="text-center">
              <Titulo>¿Estás inquieto acerca del idioma?</Titulo>
              <Line center="yes" />
              <Parrafo>
                En el ámbito educativo de Rusia, se encuentran disponibles las
                facultades preparatorias diseñadas especialmente para
                estudiantes internacionales de distintos países. Estas
                facultades ofrecen cursos universitarios en grupos que abordan
                disciplinas relacionadas con las especialidades elegidas.
              </Parrafo>
              <div className="mt-3"></div>
              <Parrafo>
                Durante el primer año, conocido como
                {` "`}preuniversitario{`"`}, tendrás la oportunidad de aprender
                el idioma ruso desde los fundamentos y también recibirás
                nivelación académica para prepararte de manera adecuada.
              </Parrafo>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[85%] mx-auto py-16">
            <div className="flex flex-col items-center justify-center md:flex-row">
              <ImageWidth src="/testimonios.jpg" alt="nose" />
              <div className="w-full md:w-1/2 md:ml-10 lg:ml-20">
                <Titulo>Testimonios reales</Titulo>
                <Line />
                <Slider {...settings}>
                  <div className="w-full h-72 rounded-lg overflow-hidden">
                    <Image
                      src="/Zoom.jpg"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f3f9ff]">
          <div className="w-[85%] mx-auto py-16">
            <Titulo>Universidades y programas</Titulo>
            <Line />

            <Slider {...settings3}>
              {universidades.map((item, index) => (
                <div key={index} className="px-2 py-3">
                  <div className="overflow-hidden bg-white rounded-lg transform hover:-translate-y-3 transition duration-500 ease-in-out hover:shadow-lg hover:shadow-black/5">
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
                        <h3 className="my-1 text-base font-bold leading-5 text-[#001959]">
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
              <ImageWidth src="/Asesoramiento.jpg" alt="nose" />
              <div className="w-full md:w-1/2 md:ml-10 lg shadow-gray-300:mrl-20">
                <Titulo>Proceso de asesoramiento</Titulo>
                <Line />

                <Parrafo>
                  En Marca, te brindamos asesoría profesional y seguridad en
                  cada paso del proceso de admisión. ¡Cumple tus sueños
                  académicos con nosotros!
                </Parrafo>
                <ul className="mt-8">
                  {proceso.map((item, index) => (
                    <li className="flex my-3 leading-6" key={index}>
                      <div>
                        <div className="px-4 py-2 mr-5 font-bold text-white bg-[#001959] rounded-full">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="my-0 text-lg font-bold text-[#001959]">
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
        <div className="bg-[url('/backto.jpg')] bg-center bg-no-repeat bg-cover overflow-hidden">
          <div className="bg-[#001959]/70">
            <div className="w-[85%] mx-auto py-10">
              <div className="flex flex-col-reverse items-center justify-center md:flex-row">
                <div className="w-full md:w-1/2 md:mr-10 lg:mr-20">
                  <h1 className="text-xl font-bold text-white lg:text-4xl sm:text-2xl md:text-3xl m-0">
                    ¿Sueñas con estudiar en Rusia?
                  </h1>
                  <p className="mt-3 text-white">
                    ¡Hazlo realidad con nuestro asesoramiento experto! Te
                    guiaremos en el proceso de planificación, trámites y
                    selección de universidades. Obtén información confiable y
                    precisa sobre visas, programas de estudio y más.
                  </p>
                  <p className="mt-3 text-white">
                    ¡Contáctanos hoy mismo para comenzar tu aventura educativa
                    en Rusia! Haz clic aquí para solicitar tu asesoramiento
                    personalizado.
                  </p>
                </div>
                <div className="my-6">
                  <CalOpen />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[85%] mx-auto py-16">
            <div className="flex flex-col items-center justify-center md:flex-row">
              <ImageWidth src="/Inscripción.jpg" alt="nose" />
              <div className="w-full md:w-1/2 md:ml-10 lg shadow-gray-300:mrl-20">
                <Titulo>FAQ</Titulo>
                <Line />

                <Parrafo>
                  Tienes alguna duda, te invitamos a revisar las preguntas más
                  frecuentes.
                </Parrafo>
                {preguntas.map((item, index) => (
                  <details className="mt-1" key={index}>
                    <summary className="flex leading-6 text-[#001959] border-b border-[#001959] p-2">
                      {item.title}
                    </summary>
                    <div className="m-3">
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
