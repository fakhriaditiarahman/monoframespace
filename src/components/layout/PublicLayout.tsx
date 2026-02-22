import { ReactNode } from "react"
import { Footer } from "./Footer"
import { GlobalAnimations } from "./GlobalAnimations"

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalAnimations />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
