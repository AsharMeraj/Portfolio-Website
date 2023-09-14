
import HomePage from "./Components/HomePage"
import About from "./Components/About"
import Navbar from "./Components/Navbar"
import Skills from "./Components/Skills"
import Work from "./Components/Work"

export default function Home() {
  return (
    <>
      <Navbar/>
      <HomePage />
      <About />
      <Skills />
      <Work/>
    </>
  )
}
