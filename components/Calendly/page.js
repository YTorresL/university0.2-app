import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

export default function CalOpen() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#001959" } },
        hideEventTypeDetails: true,
      })
    })()
  }, [])
  return (
    <div className="h-[22rem] rounded-lg overflow-hidden bg-white">
      <Cal
        calLink="ytorres-vvcghs/30min"
        style={{
          width: "100%",
          height: "100%",
          overflow: "scroll",
        }}
      />
    </div>
  )
}

export function CalPop() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal("ui", {
        styles: { branding: { brandColor: "#001959" } },
        hideEventTypeDetails: false,
      })
    })()
  }, [])
  return (
    <button
      className="py-2 px-4 rounded-lg bg-[#001959] transition duration-500 ease-in-out hover:bg-[#012b94] text-white ml-4 md:ml-7"
      data-cal-link="ytorres-vvcghs/30min"
    >
      Asesorias
    </button>
  )
}
