import { headerInfo } from '@/app/content/content'
import { useStore } from '@/store/store'

export const Description = () => {
  const { language } = useStore()
  return (
    <section
      data-element='Description'
      className='mb-4 text-justify text-base text-slate-300'
    >
      {headerInfo[language].first} <br />
      {headerInfo[language].second}
    </section>
  )
}
