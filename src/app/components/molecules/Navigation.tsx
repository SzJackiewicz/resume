import { navigationData } from '@/app/content/content'
import { scrollToSection } from '@/helpers/scrollToSection'
import { cn } from '@/lib/cn'
import { useStore } from '@/store/store'

export const Navigation = ({ activeSection }: { activeSection: string }) => {
  const { language } = useStore()

  return (
    <nav className='invisible mt-12 hidden py-4 sm:visible sm:block'>
      <ul className='flex flex-col gap-2 text-sm tracking-wide text-slate-400'>
        {navigationData.hrefs.map((href, index) => (
          <li key={href}>
            <a
              onClick={scrollToSection(href)}
              href={href}
              className='group flex cursor-pointer items-center gap-3'
            >
              <span
                className={cn(
                  'block h-[1px] w-12 border-[1px] border-solid border-slate-500 transition-all',
                  activeSection === href.slice(1) && 'w-16 border-slate-300',
                  'group-hover:w-16 group-hover:border-slate-300'
                )}
              ></span>
              <span className={cn('group-hover:text-slate-100', activeSection === href.slice(1) && 'text-slate-100')}>
                {navigationData.sections[index][language]}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
