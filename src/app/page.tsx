import { Aside } from './components/organisms/Aside'
import { Header } from './components/organisms/Header'

export default function Home() {
  return (
    <main
      data-element='Main'
      className='justify-centermin-w-[375px] mx-auto flex min-h-screen max-w-screen-xl flex-wrap gap-4 sm:px-8 lg:flex-nowrap lg:justify-between lg:px-0'
    >
      <Header data-element='Header' />
      <Aside data-element='Aside' />
    </main>
  )
}
