import { educationData, experience, courseData, ExperienceCardType } from '@/app/content/content'
import { Description } from '../molecules/Description'
import { ExperienceCard } from '../molecules/ExperienceCard'
import { PersonalDataContainer } from '../molecules/PersonalDataContainer'
import { EducationCard } from '../molecules/EducationCard'
import { CourseCard } from '../molecules/CourseCard'
import { useRef, useState, useLayoutEffect } from 'react'
import { useIsVisible } from '@/helpers/useIsVisible'
import { useStore } from '@/store/store'
import { SectionWithRef } from './SectionWithRef'

export const Aside = () => {
  const { language } = useStore()
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
      <SectionWithRef
        id='about'
        className='mb-14'
      >
        <Description />
        <PersonalDataContainer />
      </SectionWithRef>
      <SectionWithRef
        id='experience'
        className='mb-10 sm:mb-20'
      >
        <h2 className='font-bold tracking-widest text-slate-200'>{language === 'PL' ? 'DOŚWIADCZENIE' : 'EXPERIENCE'}</h2>
        {experience.map((experience, index) => (
          <ExperienceCard
            key={index}
            date={experience.period}
            company={experience.company}
            position={experience.position}
            responsibilities={experience.responsibilities}
            technologies={experience.technologies}
            type={experience.type as ExperienceCardType}
          />
        ))}
      </SectionWithRef>
      <section
        ref={refCourses}
        className={`mb-10 transition-opacity duration-700 ease-in sm:mb-20 ${hasCoursesBeenVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <SectionWithRef id='courses'>
          <h2 className='font-bold tracking-widest text-slate-200'>{language === 'PL' ? 'KURSY' : 'COURSES'}</h2>
          <CourseCard courseData={courseData} />
        </SectionWithRef>
      </section>
      <section
        ref={refEducation}
        className={`mb-20 transition-opacity duration-700 ease-in ${hasEducationBeenVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <SectionWithRef id='education'>
          <h2 className='font-bold tracking-widest text-slate-200'>{language === 'PL' ? 'EDUKACJA' : 'EDUCATION'}</h2>
          {educationData.map((education, index) => (
            <EducationCard
              key={index}
              schoolName={education.company[language]}
              date={education.period}
              studyField={education.position[language]}
            />
          ))}
        </SectionWithRef>
      </section>
    </aside>
  )
}
