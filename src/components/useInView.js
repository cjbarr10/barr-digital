import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, inView].
 * Once the element enters the viewport it stays "inView" (no re-triggering).
 */
export function useInView(threshold = 0.15) {
  const ref     = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)   // fire once
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}
