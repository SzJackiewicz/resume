'use client'

import { Aside } from './components/organisms/Aside'
import { Header } from './components/organisms/Header'
import { MainWrapper } from './components/template/MainWrapper'
import { useState, useEffect } from 'react'
import { ArrowUpIcon } from './icons/ArrowUp'
import { LangToggle } from './components/molecules/LangToggle'

export default function Home() {
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

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main data-element='Main'>
      <LangToggle />
      <MainWrapper>
        <Header />
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
