import { useStore } from '@/store/store'

export const LangToggle = () => {
  const { language, setLanguage } = useStore()

  return (
    <div className='fixed right-5 top-5 flex gap-2'>
      <button
        className={`${language === 'PL' ? 'text-sky-500' : 'text-slate-400'}`}
        onClick={() => setLanguage('PL')}
      >
        PL
      </button>
      <div className='text-slate-500'>|</div>
      <button
        className={`${language === 'EN' ? 'text-sky-500' : 'text-slate-400'}`}
        onClick={() => setLanguage('EN')}
      >
        EN
      </button>
    </div>
  )
}
