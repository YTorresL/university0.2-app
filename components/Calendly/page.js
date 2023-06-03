import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"
import Button from "../Button/page"

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
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
      })
    })()
  }, [])
  return (
    <Button
      data-cal-link="ytorres-vvcghs/30min"
      title="Asesorias"
      styles="bg-[#001959] hover:bg-[#00227A] text-white ml-4 md:ml-7"
    />
  )
}
