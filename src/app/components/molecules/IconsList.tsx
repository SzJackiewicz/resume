import { GithubIcon } from '@/app/icons/Github'
import { GmailIcon } from '@/app/icons/Gmail'
import { LinkedInIcon } from '@/app/icons/LinkedIn'

export const IconsList = () => {
  return (
    <section className='back mt-6 flex h-9 w-full gap-5 text-slate-200/20 grayscale'>
      <div className='h-full w-8 cursor-pointer'>
        <LinkedInIcon />
      </div>
      <div className='h-full w-8 cursor-pointer'>
        <GmailIcon />
      </div>
      <div className='h-full w-8 cursor-pointer'>
        <GithubIcon />
      </div>
    </section>
  )
}
