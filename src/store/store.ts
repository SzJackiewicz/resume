import { create } from 'zustand'

type State = {
  language: 'PL' | 'EN'
  setLanguage: (language: 'PL' | 'EN') => void
}

export const useStore = create<State>()((set) => ({
  language: 'EN',
  setLanguage: (language) => set(() => ({ language })),
}))
