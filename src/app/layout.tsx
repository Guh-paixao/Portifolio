import './globals.css'
import { Poppins, Rouge_Script } from 'next/font/google'
import { ThemeProvider } from '@/components/theme/themeProvider'
import Layout from '@/components/frame/layout'
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'


const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

const rougeScript = Rouge_Script({
  weight: ['400'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Gustavo - Portfólio',
  description: '...',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="pt-BR" className={`${poppins.className} ${rougeScript.className}`} suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link
            rel="icon"
            href="/icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
          <link
            rel="apple-touch-icon"
            href="/apple-icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Layout>
              {children}
              <Analytics />
            </Layout>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}