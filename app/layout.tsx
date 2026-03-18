import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import { MobileNav } from '@/components/layout/MobileNav'
import { ThemeProvider } from '@/lib/theme/ThemeProvider'
import { themeScript } from '@/lib/theme/useTheme'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <div className='mx-auto flex max-w-6xl gap-8 px-4 py-8 lg:px-6'>
            <Sidebar />
            <main className='min-w-0 flex-1 pb-24'>{children}</main>
          </div>
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  )
}
