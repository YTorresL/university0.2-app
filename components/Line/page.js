export default function Line({ center }) {
  return (
    <div
      className={`h-1 bg-[#6083D4] w-28 my-5 rounded-full ${
        center && "mx-auto"
      }`}
    ></div>
  )
}
