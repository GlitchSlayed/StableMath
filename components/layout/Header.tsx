import Link from 'next/link'
import { ThemeControls } from './ThemeControls'

export const Header = () => (
  <header className='sticky top-0 z-20 border-b border-[var(--border)] bg-[color:var(--background)]/90 backdrop-blur'>
    <div className='mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4'>
      <Link href='/' className='text-xl font-semibold italic'>StableMath</Link>
      <ThemeControls />
    </div>
  </header>
)
