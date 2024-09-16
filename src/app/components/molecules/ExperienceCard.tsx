import { Chips } from '../atoms/Chips'

type ExperienceCardProps = {
  date: string
  companyWithPosition: string
  description?: string
  technologies?: string[]
}

export const ExperienceCard = ({ date, companyWithPosition, description, technologies }: ExperienceCardProps) => {
  return (
    <div
      data-element='ExperienceCard'
      className='my-8 flex w-full min-w-96 max-w-[675px] gap-2'
    >
      <h3 className='mb-2 mt-1 w-1/4 text-xs font-semibold uppercase tracking-wide text-slate-400'>{date}</h3>
      <div className='flex w-3/4 flex-col gap-2'>
        <h3 className='font-semibold tracking-wide text-slate-300'>{companyWithPosition}</h3>
        <p>{description}</p>
        <div className='flex flex-wrap gap-2'>
          <Chips chips={technologies} />
        </div>
      </div>
    </div>
  )
}
