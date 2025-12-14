import "./globals.css"
import "normalize.css/normalize.css"

export const metadata = {
  title: "ZDOROVO | Estudia en Rusia",
  description:
    "En ZDOROVO, nos apasiona brindar igualdad de oportunidades a estudiantes latinoamericanos que buscan una educación de calidad a nivel mundial. Con nuestra asesoría especializada y un equipo comprometido, te ofrecemos la puerta de entrada a las mejores universidades en Rusia.",
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
