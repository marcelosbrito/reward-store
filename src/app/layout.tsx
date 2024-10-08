import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { FilterContextProvider } from '@/contexts/filter-context'
import { DefaultProviders } from '@/components/Default-providers'

const saira = Saira({ 
  weight: ['300','400','500','600'],
  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'REWARD STORE',
  description: 'This is an example of an e-commerce web store.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <DefaultProviders>
          <Header />
          {children}
        </DefaultProviders>
        </body>
    </html>
  )
}
