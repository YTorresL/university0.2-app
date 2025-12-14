import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Heart, Plane, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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

export function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }
  return (
    <section className="overflow-hidden mt-20">
      <div className="relative min-h-[32rem]">
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-r from-[#001959]/90 to-transparent z-30"></div>
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
        <div className="absolute top-0 bottom-0 right-0 left-0 z-30 p-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            <div className="space-y-6">
              <Badge className="bg-white/20 border-white/30 text-base">
                🇷🇺 Estudia en Rusia
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                DILE HOLA A <span className="text-yellow-400">RUSIA</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed font-light">
                Sin importar si tienes un conocimiento mínimo del idioma y obtén
                tu visado en menos de 90 días.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-100"
                >
                  <Plane className="mr-2 h-5 w-5" />
                  Comenzar mi viaje
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Unirse a la comunidad
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-900/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-white text-xl">Comunidad ZDOROVO</h3>
                    <p className="text-blue-100">+1,200 estudiantes latinos</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">90</div>
                    <div className="text-sm text-blue-100">días promedio</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">98%</div>
                    <div className="text-sm text-blue-100">éxito en visas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
