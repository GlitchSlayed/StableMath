import Link from 'next/link'

export const MobileNav = () => (
  <nav className='fixed inset-x-0 bottom-0 z-20 border-t border-[var(--border)] bg-[var(--surface)] px-4 py-3 lg:hidden'>
    <div className='mx-auto flex max-w-md items-center justify-between text-sm'>
      <Link href='/'>Home</Link>
      <Link href='/engineering'>Track</Link>
      <Link href='/engineering/unit1-calc1/practice'>Practice</Link>
      <Link href='/#progress'>Progress</Link>
    </div>
  </nav>
)
