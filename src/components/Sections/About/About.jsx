// src\components\Sections\About\About.jsx

import useTheme from "../../../customHooks/ThemeHook/useTheme"
import ProgressBar from "./ProgressBar"

const About = () => {
  const [isDark] = useTheme()
  return (
    <section id="about" className={`flex min-h-screen  items-center justify-between content-center  !px-10 transition-all duration-300 ease-in ${isDark=='true' ? 'text-white bg-SubHeadBlack':' bg-white text-SubHeadBlack'}`}>
      <div className="left w-1/2 ">
        <img loading="lazy" className="transition-all duration-300 ease-in" src={isDark == 'true' ? "/public/images/about/langIcon5.png": "/public/images/about/langIcon6.png"} alt="" /></div>
      <div className={`right w-1/2   `}>
        <h1 className="text-4xl  font-semibold">About me</h1>
        <p className="text-lg !my-8">Detail-oriented web developer  <br/>Collaborative team player with an ownership mindset and a proven track record of delivering high-quality strategic solutions to solve challenges.</p>
        <ProgressBar />
      </div>
    </section>
  )
}

export default About