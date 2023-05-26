export default function Titulo({ children }) {
  return (
    <h1 className="md:text-4xl font-bold text-gray-800 text-xl leading-6">
      {children}
    </h1>
  )
}
