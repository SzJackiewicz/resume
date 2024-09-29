export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      data-element='MainWrapper'
      className='justify-centermin-w-[375px] z-10 mx-auto flex min-h-screen max-w-screen-xl flex-wrap gap-4 pt-6 sm:px-8 lg:flex-nowrap lg:justify-between lg:px-0'
    >
      {children}
    </div>
  )
}
