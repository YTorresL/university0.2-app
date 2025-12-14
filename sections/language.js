import Line from "@/components/Line/page"
import OpacityAnimation from "@/components/OpacityAnimation/page"
import Titulo from "@/components/Title/page"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Globe } from "lucide-react"

export function Language() {
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

  return (
    <div>
      <div className="mx-auto py-16 w-[85%] md:w-[70%]">
        <OpacityAnimation>
          <div className="space-y-7 text-center">
            <Titulo>¿IDIOMA? Не волнуйся</Titulo>
            <Line center />
            <p className="text-lg">
              ¿No entendiste verdad? Tranquilo yo estaba igual al principio y ya
              pasé por ese proceso, es más sencillo de lo que crees.
            </p>
            <OpacityAnimation>
              <div className="w-[85%] mx-auto md:w-[60%]">
                <YoutubeEmbed embedId="OlI_glpNGUY " />
              </div>
            </OpacityAnimation>
            <Card className="bg-gradient-to-r from-blue-50 to-red-50 border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-4">
                    <p className="leading-relaxed text-left">
                      Uno de los primeros pasos que realizaremos será en la
                      inscripción de la facultad de idioma, por cierto, no te
                      olvides, tenemos la comunidad ZDOROVO en Rusia que hará
                      más agradable tu experiencia.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className='bg-blue-900'>Facultad de idiomas</Badge>
                      <Badge className='bg-blue-900'>Comunidad latina</Badge>
                      <Badge className='bg-blue-900'>Apoyo 24/7</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </OpacityAnimation>
      </div>
    </div>
  )
}
