import { Navigation } from '../molecules/Navigation'
import { About } from '../molecules/About'
import { Testimonials } from '../molecules/Testimonials'
import { IconsList } from '../molecules/IconsList'

export const Header = ({ activeSection }: { activeSection: string }) => {
  return (
    <header
      data-element='Header'
      className='top-0 h-1/5 w-full flex-col p-4 lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2'
    >
      <About />
      <IconsList />
      <Navigation activeSection={activeSection} />
      <Testimonials />
    </header>
  )
}
