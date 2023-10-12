import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Page',
  description: 'It is about page',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=' bg-red-200 text-black px-5'>
      {children}
    </div>
  )
}
