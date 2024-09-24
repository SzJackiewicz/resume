'use client'

import { Aside } from './components/organisms/Aside'
import { Header } from './components/organisms/Header'
import { MainWrapper } from './components/template/MainWrapper'
import { useLayoutEffect, useState } from 'react'

export default function Home() {
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
    <main data-element='Main'>
      <MainWrapper>
        <Header activeSection={activeSection} />
        <Aside />
      </MainWrapper>
    </main>
  )
}
