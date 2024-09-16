import { Navigation } from '../molecules/Navigation'
import { About } from '../molecules/About'

export const Header = () => {
  return (
    <header
      data-element='Header'
      className='top-0 w-full flex-col p-4 lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2'
    >
      <About />
      <Navigation />
    </header>
  )
}
