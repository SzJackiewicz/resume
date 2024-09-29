import { scrollToSection } from '@/helpers/scrollToSection'
import { cn } from '@/lib/cn'

export const Navigation = ({ activeSection }: { activeSection: string }) => {
  return (
    <nav className='invisible mt-12 hidden py-4 sm:visible sm:block'>
      <ul className='flex flex-col gap-2 text-sm tracking-wide text-slate-400'>
        <li>
          <a
            onClick={scrollToSection('#about')}
            href='#about'
            className='group flex cursor-pointer items-center gap-3'
          >
            <span
              className={cn(
                'block h-[1px] w-12 border-[1px] border-solid border-slate-500 transition-all',
                activeSection === 'about' && 'w-16 border-slate-300',
                'group-hover:w-16 group-hover:border-slate-300'
              )}
            ></span>
            <span className={cn('group-hover:text-slate-100', activeSection === 'about' && 'text-slate-100')}>About</span>
          </a>
        </li>
        <li>
          <a
            onClick={scrollToSection('#experience')}
            href='#experience'
            className='group flex cursor-pointer items-center gap-3'
          >
            <span
              className={cn(
                'block h-[1px] w-12 border-[1px] border-solid border-slate-500 transition-all',
                activeSection === 'experience' && 'w-16 border-slate-300',
                'group-hover:w-16 group-hover:border-slate-300'
              )}
            ></span>
            <span className={cn('group-hover:text-slate-100', activeSection === 'experience' && 'text-slate-100')}>Experience</span>
          </a>
        </li>

        <li>
          <a
            onClick={scrollToSection('#education')}
            href='#education'
            className='group flex cursor-pointer items-center gap-3'
          >
            <span
              className={cn(
                'block h-[1px] w-12 border-[1px] border-solid border-slate-500 transition-all',
                activeSection === 'education' && 'w-16 border-slate-300',
                'group-hover:w-16 group-hover:border-slate-300'
              )}
            ></span>
            <span className={cn('group-hover:text-slate-100', activeSection === 'education' && 'text-slate-100')}>Courses & education</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
