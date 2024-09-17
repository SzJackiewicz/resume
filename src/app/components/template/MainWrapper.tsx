'use client'
import { useLayoutEffect, useState } from 'react'
import { Aside } from '../organisms/Aside'
import { Header } from '../organisms/Header'

export const MainWrapper = () => {
  const [activeSection, setActiveSection] = useState('')

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [setActiveSection])

  return (
    <div
      data-element='MainWrapper'
      className='justify-centermin-w-[375px] mx-auto flex min-h-screen max-w-screen-xl flex-wrap gap-4 sm:px-8 lg:flex-nowrap lg:justify-between lg:px-0'
    >
      <Header activeSection={activeSection} />
      <Aside />
    </div>
  )
}
