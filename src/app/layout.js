import './globals.css'
import Header from "@/components/layout/Header"


export const metadata = {
  title: 'App React Ads',
  description: 'App React para aprendizado',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>      
      {children}
      </body>
    </html>
  )
}
