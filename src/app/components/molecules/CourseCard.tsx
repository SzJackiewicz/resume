type EducationCardProps = {
  courseData: string[]
}

export const CourseCard = ({ courseData }: EducationCardProps) => {
  const chipElements = courseData?.map((chip, index) => (
    <div
      key={index}
      className='h-fit w-fit items-center text-nowrap rounded-md bg-sky-950 px-4 py-1 text-sm font-semibold text-sky-300'
    >
      {chip}
    </div>
  ))

  return (
    <div className='my-8 box-border flex flex-wrap gap-2 p-2 transition-all duration-500 ease-in-out hover:my-6 hover:items-center hover:gap-3'>
      {chipElements}
    </div>
  )
}
