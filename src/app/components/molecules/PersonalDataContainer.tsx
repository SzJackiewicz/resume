import { PersonalData } from '@/app/content/content'

export const PersonalDataContainer = () => {
  return (
    <ul className='text-balance pt-3 text-sm tracking-wide text-slate-300'>
      {PersonalData.email && (
        <li className='py-1'>
          <span className='uppercase tracking-wider text-slate-400'>Email:</span> {PersonalData.email}
        </li>
      )}
      {PersonalData.phone && (
        <li className='py-1'>
          <span className='uppercase tracking-wider text-slate-400'>Phone:</span>
          {PersonalData.phone}
        </li>
      )}
      {PersonalData.address && (
        <li className='py-1'>
          <span className='uppercase tracking-wider text-slate-400'>Address:</span>
          {PersonalData.address}
        </li>
      )}
      {PersonalData.birthday && (
        <li className='py-1'>
          <span className='uppercase tracking-wider text-slate-400'>Birthday:</span>
          {PersonalData.birthday}
        </li>
      )}
      {PersonalData.git && (
        <li className='py-1'>
          <span className='uppercase tracking-wider text-slate-400'>GitHub:</span>
          {PersonalData.git}
        </li>
      )}
    </ul>
  )
}
