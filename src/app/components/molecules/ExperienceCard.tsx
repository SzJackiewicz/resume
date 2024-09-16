import { Chips } from '../atoms/Chips'

type ExperienceCardProps = {
  date: string
  position: string
  company: string
  description?: string
  technologies?: string[]
}

export const ExperienceCard = ({ date, company, description, technologies, position }: ExperienceCardProps) => {
  return (
    <div
      data-element='ExperienceCard'
      className='my-8 w-full min-w-[370px] max-w-[675px] cursor-pointer gap-2 rounded-md p-4 hover:bg-slate-800/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg sm:my-4 sm:flex'
    >
      <h3 className='mb-2 mt-1 pt-1 font-semibold uppercase tracking-wide text-sky-200 sm:w-1/4 sm:text-xs'>{date}</h3>
      <div className='flex w-full flex-col gap-2 sm:w-3/4'>
        <h3 className='flex gap-2 font-semibold tracking-wide text-slate-300 sm:text-base'>
          <span className='text-base text-sky-400'>{company}</span>
          <span>&bull;</span>
          <span>{position}</span>
        </h3>
        <p
          data-element='ExperienceDescription'
          className='text-sm text-slate-400 sm:w-full'
        >
          {description}
        </p>
        <div className='flex flex-wrap gap-2 pt-2'>
          <Chips chips={technologies} />
        </div>
      </div>
    </div>
  )
}
