import Link from "next/link"

export default function Button({ title, styles, link }) {
  return (
    <Link href={link}>
      <button className={`py-2 px-4 rounded-lg ${styles}`}>{title}</button>
    </Link>
  )
}
