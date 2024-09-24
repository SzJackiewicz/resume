import { CssIcon } from '@/app/icons/Css'
import { NextIcon } from '@/app/icons/Next'
import { NodeIcon } from '@/app/icons/Node'
import { ReactIcon } from '@/app/icons/React'
import { ReduxIcon } from '@/app/icons/Redux'
import { TailwindIcon } from '@/app/icons/Tailwind'
import { TypescriptIcon } from '@/app/icons/Typescript'

export const IconsList = () => {
  return (
    <section className='back mt-6 flex h-9 w-full gap-5 text-slate-200/20 grayscale'>
      <div className='h-5 w-8 fill-white/15'>
        <CssIcon />
      </div>
      <div className='h-5 w-8 fill-white/15'>
        <NextIcon />
      </div>
      <div className='h-5 w-8 fill-white/15'>
        <NodeIcon />
      </div>
      <div className='h-5 w-8 fill-white/15'>
        <ReduxIcon />
      </div>
      <div className='h-5 w-8 fill-white/15'>
        <ReactIcon />
      </div>
      <div className='h-5 w-8 fill-white/15'>
        <TailwindIcon />
      </div>
      <div className='h-5 w-8 fill-white/15'>
        <TypescriptIcon />
      </div>
    </section>
  )
}
