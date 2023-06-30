import { useSpring, animated } from "@react-spring/web"
import { useInView } from "react-intersection-observer"

export default function OpacityAnimation({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const fade = useSpring({
    from: { opacity: inView ? 0 : 1 },
    to: { opacity: inView ? 1 : 0 },
    config: { duration: 500 },
  })

  return (
    <div className="h-full w-full" ref={ref}>
      <animated.div style={fade}>{children}</animated.div>
    </div>
  )
}
