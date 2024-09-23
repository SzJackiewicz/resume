import { PersonalData } from '@/app/content/content'

export const PersonalDataContainer = () => {
  return (
    <ul className='text-balance pt-3 text-sm tracking-wide text-slate-300'>
      {PersonalData.email && (
        <li className='py-1 transition-all duration-500 ease-in-out hover:text-sky-400'>
          <span className='mr-1 uppercase tracking-wider text-slate-400'>Email:</span> {PersonalData.email}
        </li>
      )}
      {PersonalData.phone && (
        <li className='py-1 transition-all duration-500 ease-in-out hover:text-sky-400'>
          <span className='mr-1 uppercase tracking-wider text-slate-400'>Phone:</span>
          {PersonalData.phone}
        </li>
      )}
      {PersonalData.address && (
        <li className='py-1 transition-all duration-500 ease-in-out hover:text-sky-400'>
          <span className='mr-1 uppercase tracking-wider text-slate-400'>Address:</span>
          {PersonalData.address}
        </li>
      )}
      {PersonalData.birthday && (
        <li className='py-1 transition-all duration-500 ease-in-out hover:text-sky-400'>
          <span className='mr-1 uppercase tracking-wider text-slate-400'>Birthday:</span>
          {PersonalData.birthday}
        </li>
      )}
      {PersonalData.git && (
        <li className='pointer py-1 transition-all duration-500 ease-in-out hover:text-sky-400'>
          <span className='mr-1 uppercase tracking-wider text-slate-400'>GitHub:</span>
          <a
            target='_blank'
            rel='noopener noreferrer' // Dodano atrybut rel
            href={PersonalData.git} // Zmieniono na dynamiczny adres URL
            className='text-slate-300 hover:text-sky-400'
          >
            {PersonalData.git}
          </a>
        </li>
      )}
      {PersonalData.git && (
        <li className='pointer py-1 transition-all duration-500 ease-in-out hover:text-sky-400'>
          <span className='mr-1 uppercase tracking-wider text-slate-400'>LinkedIn:</span>
          <a
            target='_blank'
            rel='noopener noreferrer' // Dodano atrybut rel
            href={PersonalData.linkedIn} // Zmieniono na dynamiczny adres URL
            className='text-slate-300 hover:text-sky-400'
          >
            {PersonalData.linkedIn}
          </a>
        </li>
      )}
    </ul>
  )
}
