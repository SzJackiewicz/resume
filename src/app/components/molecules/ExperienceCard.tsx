import { useRef, useState, useLayoutEffect } from 'react'
import { useIsVisible } from '@/helpers/useIsVisible'
import { Chips } from '../atoms/Chips'

type ExperienceCardProps = {
  date: string
  position: string
  company: string
  responsibilities?: string[]
  technologies?: string[]
}

export const ExperienceCard = ({ date, company, responsibilities, technologies, position }: ExperienceCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIsVisible(ref)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)

  useLayoutEffect(() => {
    if (isVisible && !hasBeenVisible) {
      setHasBeenVisible(true)
    }
  }, [isVisible, hasBeenVisible])

  return (
    <div
      ref={ref}
      data-element='ExperienceCard'
      className={`w-full min-w-[370px] max-w-[675px] cursor-pointer gap-2 rounded-md p-4 transition-opacity duration-700 ease-in hover:bg-slate-700/25 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg sm:my-8 sm:flex ${hasBeenVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <h3 className='mb-2 mt-1 pt-1 font-semibold uppercase tracking-wide text-sky-200 sm:w-1/4 sm:text-xs'>{date}</h3>
      <div className='flex w-full flex-col gap-2 sm:w-3/4'>
        <h3 className='flex gap-2 font-semibold tracking-wide text-slate-300 sm:text-base'>
          <span className='text-base text-sky-400'>{company}</span>
          <span>&bull;</span>
          <span>{position}</span>
        </h3>
        {responsibilities && (
          <div
            data-element='ExperienceDescription'
            className='text-sm text-slate-400 sm:w-full'
          >
            <ul>
              {responsibilities.map((desc, index) => (
                <li
                  key={index}
                  className='my-1 text-sm text-slate-400'
                >
                  <span className='text-slate-300'>&bull;</span>
                  <span className='ml-1'>{desc}</span>{' '}
                </li>
              ))}
            </ul>
          </div>
        )}
        {technologies && (
          <div className='flex flex-wrap gap-2 pt-2'>
            <Chips chips={technologies} />
          </div>
        )}
      </div>
    </div>
  )
}
