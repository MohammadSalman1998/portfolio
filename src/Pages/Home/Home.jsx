// src\Pages\Home\Home.jsx

import Hero from "../../components/Hero/Hero"
import About from "../../components/Sections/About/About"
import Contact from "../../components/Sections/Contact/Contact"
import Education from "../../components/Sections/Education/Education"
import Portfolio from "../../components/Sections/Portfolio/Portfolio"
import Tryme from "../../components/Sections/Tryme/Tryme"

const Home = () => {

  return (
    <>
    <Hero />
    <About />
    <Education />
    <Tryme />
    <Portfolio />
    <Contact />

</>
  )
}

export default Home