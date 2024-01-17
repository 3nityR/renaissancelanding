import { Inter, Lato } from 'next/font/google'
import './globals.css'
const lato = Lato( {weight: "300", style: "normal", subsets: ["latin"]})

export const metadata = {
  title: 'Renaissance Engineering',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
