import { Footer, Nav } from '@/components'
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={'relative'}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
