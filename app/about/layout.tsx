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
    <div className='py-5 bg-purple-500 text-white px-5'>
      {children}
    </div>
  )
}
