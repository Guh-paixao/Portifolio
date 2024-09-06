import './globals.css'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from '@/components/theme/themeProvider'

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  weight: ['200', '400', '600', '800'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="pt-BR" className={poppins.className} suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}