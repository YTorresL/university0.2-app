import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

export default function CalOpen() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#c42626" } },
        hideEventTypeDetails: true,
      })
    })()
  }, [])
  return (
    <div className="h-[26rem] rounded-lg overflow-hidden bg-white">
      <Cal
        calLink="ytorres-vvcghs/30min"
        style={{
          width: "100%",
          height: "100%",
          overflow: "scroll",
          border: "8",
        }}
      />
    </div>
  )
}
