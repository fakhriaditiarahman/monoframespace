import { ReactNode } from "react"
import { Footer } from "./Footer"

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
