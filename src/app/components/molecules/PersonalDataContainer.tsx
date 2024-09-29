import { PersonalData } from '@/app/content/content'
import { useStore } from '@/store/store'

export const PersonalDataContainer = () => {
  const { language } = useStore()
  const data = PersonalData.data
  const labels = PersonalData[language]

  return (
    <ul className='text-balance pt-3 text-sm tracking-wide text-slate-300'>
      {data.email && (
        <li className='py-1 transition-all duration-500 ease-in-out hover:text-sky-400'>
          <span className='mr-1 uppercase tracking-wider text-slate-400'>{labels.email}:</span> {data.email}
        </li>
      )}
      {data.phone && (
        <li className='py-1 transition-all duration-500 ease-in-out hover:text-sky-400'>
          <span className='mr-1 uppercase tracking-wider text-slate-400'>{labels.phone}:</span>
          {data.phone}
        </li>
      )}
      {data.address && (
        <li className='py-1 transition-all duration-500 ease-in-out hover:text-sky-400'>
          <span className='mr-1 uppercase tracking-wider text-slate-400'>{labels.address}:</span>
          {data.address}
        </li>
      )}
      {data.birthday && (
        <li className='py-1 transition-all duration-500 ease-in-out hover:text-sky-400'>
          <span className='mr-1 uppercase tracking-wider text-slate-400'>{labels.birthday}:</span>
          {data.birthday}
        </li>
      )}
      {data.git && (
        <li className='pointer py-1 transition-all duration-500 ease-in-out hover:text-sky-400'>
          <span className='mr-1 uppercase tracking-wider text-slate-400'>{labels.git}:</span>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={data.git}
            className='text-slate-300 hover:text-sky-400'
          >
            {data.git}
          </a>
        </li>
      )}
      {data.linkedIn && (
        <li className='pointer py-1 transition-all duration-500 ease-in-out hover:text-sky-400'>
          <span className='mr-1 uppercase tracking-wider text-slate-400'>{labels.linkedIn}:</span>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={data.linkedIn}
            className='text-slate-300 hover:text-sky-400'
          >
            {data.linkedIn}
          </a>
        </li>
      )}
    </ul>
  )
}
