// src\components\Sections\Education\Education.jsx

import useTheme from "../../../customHooks/ThemeHook/useTheme"
import EducateItems from "./EducateItems"
import './education.css'

const Education = () => {
    const [isDark] = useTheme()
    return (
        <section id="education" className={`relative  transition-all duration-300 ease-in ${isDark=='true' ? 'text-white bg-SubHeadBlack':' bg-white text-headBlack'}`}>
            <img className=" top-shape absolute right-0 " src={import.meta.env.BASE_URL+"images/education/Images bg.svg"} alt="" />
            <div className=" text-center !mb-11">
                <p className="text-primary text-xl !mb-1.5 font-medium">Education and Experience</p>
                <p className=" text-5xl font-semibold">Education & Experience</p>
            </div>
            <div className="content relative grid grid-cols-2 gap-x-36 !px-20">
                <EducateItems />
            </div>
            <img loading="lazy" className=" rotate-180" src={import.meta.env.BASE_URL+"images/education/Images bg.svg"} alt="" />
        </section>
    )
}

export default Education