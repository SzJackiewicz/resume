import { PersonalData } from '@/app/content/content'
import { PersonalDataContainer } from './PersonalDataContainer'

export const About = () => {
  return (
    <div>
      <h1 className='text-xl font-bold tracking-wider text-sky-400'>{PersonalData.name}</h1>
      <h2 className='text-base font-bold tracking-wider'>Full Stack Developer</h2>
      <PersonalDataContainer />
    </div>
  )
}
