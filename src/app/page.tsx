'use client'

import { Aside } from './components/organisms/Aside'
import { Header } from './components/organisms/Header'
import { MainWrapper } from './components/template/MainWrapper'
import { useLayoutEffect, useState, useEffect } from 'react'
import { ArrowUpIcon } from './icons/ArrowUp'

export default function Home() {
  const [activeSection, setActiveSection] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.scrollY > 400) {
        setShowScrollTop(true)
      } else if (showScrollTop && window.scrollY <= 400) {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [showScrollTop])

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

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main data-element='Main'>
      <MainWrapper>
        <Header activeSection={activeSection} />
        <Aside />
      </MainWrapper>
      {showScrollTop && (
        <button
          onClick={scrollTop}
          className='fixed bottom-5 right-5 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-slate-500 bg-sky-700/30 sm:hidden'
        >
          <ArrowUpIcon />
        </button>
      )}
    </main>
  )
}
