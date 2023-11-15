import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kota Weds Samvi',
  description: 'Invitation For Details',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-radial from-rose-800 to-amber-400 text-slate-200 container mx-auto p-2 `}>{children}</body>
    </html>
  )
}
