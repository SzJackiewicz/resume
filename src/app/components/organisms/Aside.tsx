import { educationData, experience } from '@/app/content/content'
import { Description } from '../molecules/Description'
import { ExperienceCard } from '../molecules/ExperienceCard'
import { PersonalDataContainer } from '../molecules/PersonalDataContainer'
import { EducationCard } from '../molecules/EducationCard'

export const Aside = () => {
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
        id='courses'
        className='mb-20'
      >
        <h1 className='font-bold tracking-widest text-slate-200'>COURSES</h1>
        {educationData.map((education, index) => (
          <EducationCard
            key={index}
            schoolName={education.company}
            date={education.period}
            studyField={education.position}
          />
        ))}
      </section>
      <section
        id='education'
        className='mb-20'
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
