import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

const navLinks = [
  { name: "Lenguaje", href: "/language" },
  {
    name: "Proceso",
    href: "/proceso",
  },
  {
    name: "Programas",
    href: "/programas",
  },
  { name: "Testimonios", href: "/testimonios" },
  { name: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
]

export function Header() {
  return (
    <header className="h-20 w-full mx-auto fixed top-0 bg-white/80 shadow-md z-50 px-[5%] backdrop-blur-sm">
      <div className="flex items-center justify-between h-full">
        <Image
          src="/logoO.png"
          alt="ZDOROVO"
          width={800}
          height={800}
          className="w-24 sm:w-28 lg:w-36"
        />
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-blue-600 transition-colors font-light"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-end gap-4 w-24 sm:w-28 lg:w-36">
          <Button className="bg-blue-900 hover:bg-blue-800">Contactar</Button>
        </div>
      </div>
    </header>
  )
}
