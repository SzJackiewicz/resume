import { experience } from '@/app/content/content'
import { Description } from '../molecules/Description'
import { ExperienceCard } from '../molecules/ExperienceCard'

export const Aside = () => {
  return (
    <aside
      data-element='Aside'
      className='text-md w-full border-2 border-solid border-red-500 p-4 lg:w-1/2'
    >
      <section
        id='about'
        className='mb-20'
      >
        <Description />
      </section>
      <section id='experience'>
        {experience &&
          experience.map((experience, index) => (
            <ExperienceCard
              key={index}
              date={experience.period}
              companyWithPosition={experience.position}
              description='Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.'
              technologies={experience.technologies}
            />
          ))}
      </section>
    </aside>
  )
}
