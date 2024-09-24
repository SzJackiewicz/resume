import { educationData, experience, courseData } from '@/app/content/content'
import { Description } from '../molecules/Description'
import { ExperienceCard } from '../molecules/ExperienceCard'
import { PersonalDataContainer } from '../molecules/PersonalDataContainer'
import { EducationCard } from '../molecules/EducationCard'
import { CourseCard } from '../molecules/CourseCard'
import { useRef, useState, useLayoutEffect } from 'react'
import { useIsVisible } from '@/helpers/useIsVisible'

export const Aside = () => {
  const refEducation = useRef<HTMLDivElement>(null)
  const refCourses = useRef<HTMLDivElement>(null)

  const isEducationVisible = useIsVisible(refEducation)
  const isCoursesVisible = useIsVisible(refCourses)

  const [hasEducationBeenVisible, setHasEducationBeenVisible] = useState(false)
  const [hasCoursesBeenVisible, setHasCoursesBeenVisible] = useState(false)

  useLayoutEffect(() => {
    if (isEducationVisible && !hasEducationBeenVisible) {
      setHasEducationBeenVisible(true)
    }
  }, [isEducationVisible, hasEducationBeenVisible])

  useLayoutEffect(() => {
    if (isCoursesVisible && !hasCoursesBeenVisible) {
      setHasCoursesBeenVisible(true)
    }
  }, [isCoursesVisible, hasCoursesBeenVisible])

  return (
    <aside
      data-element='Aside'
      className='text-md w-full min-w-[375px] p-4 lg:w-1/2'
    >
      <section
        id='about'
        className='mb-20'
      >
        <Description />
        <PersonalDataContainer />
      </section>
      <section
        id='experience'
        className='mb-20'
      >
        <h1 className='font-bold tracking-widest text-slate-200'>EXPERIENCE</h1>
        {experience &&
          experience.map((experience, index) => (
            <ExperienceCard
              key={index}
              date={experience.period}
              company={experience.company}
              position={experience.position}
              responsibilities={experience.responsibilities}
              technologies={experience.technologies}
            />
          ))}
      </section>
      <section
        ref={refCourses}
        id='courses'
        className={`mb-20 transition-opacity duration-700 ease-in ${hasCoursesBeenVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1 className='font-bold tracking-widest text-slate-200'>COURSES</h1>
        <CourseCard courseData={courseData} />
      </section>
      <section
        ref={refEducation}
        id='education'
        className={`mb-20 transition-opacity duration-700 ease-in ${hasEducationBeenVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1 className='font-bold tracking-widest text-slate-200'>EDUCATION</h1>
        {educationData.map((education, index) => (
          <EducationCard
            key={index}
            schoolName={education.company}
            date={education.period}
            studyField={education.position}
          />
        ))}
      </section>
    </aside>
  )
}
