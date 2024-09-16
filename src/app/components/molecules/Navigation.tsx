export const Navigation = () => {
  return (
    <nav className='py-4'>
      <ul className='flex flex-col gap-2 text-sm tracking-wide text-slate-300'>
        <li>
          <a className='group flex cursor-pointer items-center gap-3'>
            <span className='block h-[1px] w-12 border-[1px] border-solid border-slate-500 transition-all group-hover:w-16 group-hover:border-slate-300'></span>
            <span className='group-hover:text-slate-200'>About</span>
          </a>
        </li>
        <li>
          <a className='group flex cursor-pointer items-center gap-3'>
            <span className='block h-[1px] w-12 border-[1px] border-solid border-slate-500 transition-all group-hover:w-16 group-hover:border-slate-300'></span>
            <span className='group-hover:text-slate-200'>Experience</span>
          </a>
        </li>
        <li>
          <a className='group flex cursor-pointer items-center gap-3'>
            <span className='block h-[1px] w-12 border-[1px] border-solid border-slate-500 transition-all group-hover:w-16 group-hover:border-slate-300'></span>
            <span className='group-hover:text-slate-200'>Education</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
