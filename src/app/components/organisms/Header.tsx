import { Navigation } from '../molecules/Navigation'
import { About } from '../molecules/About'

export const Header = () => {
  return (
    <header
      data-element='Header'
      className='top-0 flex w-full border-2 border-solid border-red-500 p-4 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between'
    >
      <About />
      <Navigation />
    </header>
  )
}
