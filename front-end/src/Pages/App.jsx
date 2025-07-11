import * as React from "react"
import Mid from "../components/comp/Page1/mid"
import HowToUse from "../components/comp/Page1/bottom"
import { Footer } from "../components/comp/Page1/footer"
import Navbar from "../components/comp/Page1/navig"

function App() {
  return (
    <div>
      <Navbar/>
      <Mid/>
      <h2 className="mt-20 text-center mb-3 text-2xl font-bold mx-auto relative z-20 py-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white w-full">
          How to use
      </h2>
      <HowToUse/>
      <Footer/>
    </div>
  )
}

export default App
