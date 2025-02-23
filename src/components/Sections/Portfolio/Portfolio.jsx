// src\components\Sections\Portfolio\Portfolio.jsx

import { MdArrowOutward } from "react-icons/md"
import ProjectsItems from "./ProjectsItems"
import useTheme from "../../../customHooks/ThemeHook/useTheme"
import { ButtonLink } from "../../Button/Button"
import './portfolio.css'

const Portfolio = () => {
  const [isDark] = useTheme()
  return (
    <section id="projects" className={` transition-all duration-300 ease-in ${isDark == 'true' ? 'bg-SubHeadBlack text-white' : 'bg-white text-SubHeadBlack'}`}>
      <div  className={`title !pb-11  flex  xl:lg:md:justify-between xl:lg:md:!px-20 items-center `}>
        <div className="head-title">
          <p className="text-primary text-[20px] font-medium">Portfolio</p>
          <p className="text-[40px] font-semibold max-w-120">My Creative Works Latest <span className="text-primary">Projects</span></p>
        </div>
        <ButtonLink target={"_blanck"} href={'https://github.com/MohammadSalman1998'} name={'View Github'} icon={<MdArrowOutward />} />
      </div>
      <div className={`cards  !px-3  grid grid-cols-3 gap-y-[32px]  place-items-center `}>
        <ProjectsItems />
      </div>
    </section>
  )
}

export default Portfolio