import Line from "@/components/Line/page"
import OpacityAnimation from "@/components/OpacityAnimation/page"
import Titulo from "@/components/Title/page"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { FileText, Plane, BookOpen, GraduationCap } from "lucide-react"

export function Process() {
  return (
    <section className="w-[85%] mx-auto py-16">
      <OpacityAnimation>
        <div className="text-center flex justify-center flex-col items-center w-4/6 mx-auto">
          <Titulo>Proceso de inscripción</Titulo>
          <Line />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-5">
          {[
            {
              step: "1",
              title: "Inscripción",
              description:
                "Regístrate fácilmente en línea o visita nuestras oficinas en tu país.",
              icon: FileText,
              color: "bg-blue-500",
            },
            {
              step: "2",
              title: "Visado",
              description:
                "Te ayudamos con la carta de invitación estudiantil y el proceso de visa.",
              icon: FileText,
              color: "bg-green-500",
            },
            {
              step: "3",
              title: "Viaje e instalación",
              description:
                "Te recibimos en el aeropuerto y te instalamos en tu residencia universitaria.",
              icon: Plane,
              color: "bg-purple-500",
            },
            {
              step: "4",
              title: "Preuniversitario",
              description:
                "Aprende el idioma ruso y prepárate para tu carrera.",
              icon: BookOpen,
              color: "bg-orange-500",
            },
            {
              step: "5",
              title: "Inicia tu carrera",
              description:
                "Estudia en las mejores universidades de Rusia y alcanza tus metas.",
              icon: GraduationCap,
              color: "bg-red-500",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center`}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-300">
                    {item.step}
                  </div>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-normal">
                  {item.description}
                </p>
              </CardContent>
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 ${item.color}`}
              ></div>
            </Card>
          ))}
        </div>
      </OpacityAnimation>
    </section>
  )
}
