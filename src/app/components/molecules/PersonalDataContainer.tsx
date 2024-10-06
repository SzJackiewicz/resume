import { PersonalData } from '@/app/content/content'
import { handleCopy } from '@/helpers/handleCopy'
import { useToast } from '@/hooks/use-toast'
import { useStore } from '@/store/store'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'

export const PersonalDataContainer = () => {
  const { language } = useStore()
  const { toast } = useToast()
  const data = PersonalData.data
  const labels = PersonalData[language]

  return (
    <ul className='text-balance pt-3 text-sm tracking-wide text-slate-300'>
      {data.email && (
        <li
          className='cursor-pointer py-1 transition-all duration-500 ease-in-out hover:text-sky-400'
          onClick={() => {
            handleCopy(data.email)
            toast({
              title: language === 'PL' ? 'Email skopiowany do schowka' : 'Email copied to clipboard',
            })
          }}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className='mr-1 uppercase tracking-wider text-slate-400'>{labels.email}:</span> {data.email}
              </TooltipTrigger>
              <TooltipContent>
                <p>{language === 'PL' ? 'Skopiuj' : 'Copy email'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      )}
      {data.phone && (
        <li
          className='cursor-pointer py-1 transition-all duration-500 ease-in-out hover:text-sky-400'
          onClick={() => {
            handleCopy(data.phone)
            toast({
              title: language === 'PL' ? 'Telefon skopiowany do schowka' : 'Phone copied to clipboard',
            })
          }}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className='mr-1 uppercase tracking-wider text-slate-400'>{labels.phone}:</span> {data.phone}
              </TooltipTrigger>
              <TooltipContent>
                <p>{language === 'PL' ? 'Skopiuj' : 'Copy phone'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
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
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href={data.git}
            className='text-slate-300 hover:text-sky-400'
          >
            {data.git}
          </Link>
        </li>
      )}
      {data.linkedIn && (
        <li className='pointer py-1 transition-all duration-500 ease-in-out hover:text-sky-400'>
          <span className='mr-1 uppercase tracking-wider text-slate-400'>{labels.linkedIn}:</span>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href={data.linkedIn}
            className='text-slate-300 hover:text-sky-400'
          >
            {data.linkedIn}
          </Link>
        </li>
      )}
      {data.CV && (
        <li className='pointer py-1 transition-all duration-500 ease-in-out hover:text-sky-400'>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='/resume.pdf'
            className='text-slate-300 hover:text-sky-400'
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <span className='mr-1 uppercase tracking-wider text-slate-400'>{labels.CV}:</span>{' '}
                  {language === 'PL' ? 'Pokaż CV.pdf' : 'Show CV.pdf'}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{language === 'PL' ? 'Otwórz w nowej karcie' : 'Open in new card'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        </li>
      )}
    </ul>
  )
}
