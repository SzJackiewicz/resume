import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useStore } from '@/store/store'
import { useEffect } from 'react'

type SectionWithRefProps = {
  children: React.ReactNode
  id: string
  className?: string
}

export const SectionWithRef = ({ children, id, className }: SectionWithRefProps) => {
  const [isVisible, elementRef] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  })

  const setVisibleSection = useStore((state) => state.setVisibleSection)

  useEffect(() => {
    if (isVisible) {
      setVisibleSection(id)
    }
  }, [isVisible, id, setVisibleSection])

  return (
    <div
      ref={elementRef}
      id={id}
      className={className}
    >
      {children}
    </div>
  )
}
