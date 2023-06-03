export default function Button({ title, styles, data }) {
  return (
    <button className={`py-2 px-4 rounded-lg ${styles}`} {...data}>
      {title}
    </button>
  )
}
