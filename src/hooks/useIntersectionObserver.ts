import { useEffect, useState, useRef } from 'react'

interface UseIntersectionObserverArgs {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

export const useIntersectionObserver = ({ root = null, rootMargin = '0px', threshold = 0.5 }: UseIntersectionObserverArgs) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
      },
      { root, rootMargin, threshold }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [root, rootMargin, threshold])

  return [isVisible, elementRef] as const
}
