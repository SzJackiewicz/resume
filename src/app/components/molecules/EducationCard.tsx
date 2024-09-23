type EducationCardProps = {
  date: string
  studyField: string
  schoolName: string
}

export const EducationCard = ({ date, schoolName, studyField }: EducationCardProps) => {
  return (
    <div
      data-element='ExperienceCard'
      className='hover:shadow-[inset_0_1px_0_0_rgba(148, 163, 184, 0.462)] my-1 w-full min-w-[370px] max-w-[675px] gap-2 rounded-md p-4 hover:bg-slate-700/25 hover:drop-shadow-lg sm:my-0 sm:flex'
    >
      <h3 className='mb-2 mt-1 pt-1 font-semibold uppercase tracking-wide text-sky-200 sm:w-1/4 sm:text-xs'>{date}</h3>
      <div className='flex w-full flex-col gap-2 sm:w-3/4'>
        <h3 className='flex gap-2 font-semibold tracking-wide text-slate-300 sm:text-base'>
          <span className='text-base text-sky-400'>{schoolName}</span>
        </h3>
        <p
          data-element='EducationDescription'
          className='text-base italic text-slate-300 sm:w-full'
        >
          {studyField}
        </p>
      </div>
    </div>
  )
}
