import { Aside } from './components/organisms/Aside'
import { Header } from './components/organisms/Header'

export default function Home() {
  return (
    <main className='mx-auto flex min-h-screen max-w-screen-xl flex-wrap justify-center gap-4 border-2 border-solid border-red-500 px-8 lg:flex-nowrap lg:justify-between lg:px-0'>
      <Header data-element='Header' />
      <Aside data-element='Aside' />
    </main>
  )
}
