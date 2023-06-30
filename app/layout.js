import "./globals.css"
import "normalize.css/normalize.css"
import { Roboto } from "next/font/google"

export const metadata = {
  title: "ZDOROVO | Estudia en Rusia",
  description:
    "En ZDOROVO, nos apasiona brindar igualdad de oportunidades a estudiantes latinoamericanos que buscan una educación de calidad a nivel mundial. Con nuestra asesoría especializada y un equipo comprometido, te ofrecemos la puerta de entrada a las mejores universidades en Rusia.",
}

const font = Roboto({
  weight: ["500", "700", "900"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.className}>
      <body>{children}</body>
    </html>
  )
}
