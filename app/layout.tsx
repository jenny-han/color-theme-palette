import Header from "./components/Header"
import "./globals.css"
import { Noto_Sans_KR } from "next/font/google"

const notoSansKR = Noto_Sans_KR({
  weight: "400",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={notoSansKR.className} suppressHydrationWarning>
      <body>
        <Header />

        {children}
      </body>
    </html>
  )
}
