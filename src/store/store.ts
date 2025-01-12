import { create } from 'zustand'

type State = {
  language: 'PL' | 'EN'
  setLanguage: (language: 'PL' | 'EN') => void
  visibleSection: string | null
  setVisibleSection: (sectionId: string | null) => void
}

export const useStore = create<State>()((set) => ({
  language: 'EN',
  setLanguage: (language) => set(() => ({ language })),
  visibleSection: null,
  setVisibleSection: (sectionId) => set(() => ({ visibleSection: sectionId })),
}))
