type ChipsProps = {
  chips?: string[]
}

export const Chips = ({ chips }: ChipsProps) => {
  return chips?.map((chip, index) => (
    <div
      key={index}
      className='flex w-fit items-center gap-2 rounded-md bg-slate-800 px-4 py-1 text-sm font-semibold text-slate-300'
    >
      {chip}
    </div>
  ))
}
