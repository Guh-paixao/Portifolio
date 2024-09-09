import './globals.css'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from '@/components/theme/themeProvider'
import Layout from '@/components/frame/defaultFrame'
import Starfield from 'react-starfield';

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  weight: ['100', '200', '400', '500', '600', '700', '800'],
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
            <Starfield
              starCount={3000}
              starColor={[255, 255, 255]}
              speedFactor={0.05}
              backgroundColor="black"
            />
            <Layout>
              {children}
            </Layout>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}