// src\components\Hero\Hero.jsx

import useTheme from "../../customHooks/ThemeHook/useTheme"
import './hero.css'

const Hero = () => {
    const [isDark] = useTheme()
    return (
        <section id="hero" className={`min-h-screen w-full transition-all duration-300 ease-in  ${isDark == 'true' ? 'bg-SubHeadBlack text-white' : 'bg-white text-SubHeadBlack'}`}>
            <div className=" content relative flex justify-between">
                <div className="left h-screen w-1/2 z-10 relative">
                    <div className=" left-content bg-transparent z-10 absolute top-[37%] left-[10%] ">
                        <p className="text-5xl font-light">HEY!<span className=" font-bold"> I’m Mohammad,<br /> Full Stack Developer</span></p>
                        <p className={`transition-all duration-300 ease-in ${isDark == 'true' ? ' text-white' : ' text-secondary2'} w-90 text-lg !my-7`}>Agency-quality Webflow websites with the personal touch of a freelancer.</p>
                        <a href="/public/files/mohammad salman.pdf" className={`cursor-pointer hover:animate-pulse transition-all duration-300 ease-in ${isDark == 'true' ? 'bg-primary text-white' : 'text-SubHeadBlack bg-white'}   font-semibold rounded-md  !p-4`} download={'mohammad salman CV'}>Download CV</a>
                    </div>
                    <div className=" absolute  top-[35%]   w-[90%] h-[70%] rounded-full opacity-40 bg-radial-[at_10%_100%]  from-[#9BFFA5]  via-[#CACFFA] to-[#AED3FF] to-100% blur-3xl"></div>
                </div>
                <div className="right h-screen w-1/2 relative overflow-hidden">
                    <div className=" right-content absolute top-[29%] right-[15%]">
                        <img id="backRec" loading="lazy" className="absolute -top-[7%] animate-pulse  z-20" src={import.meta.env.BASE_URL+"images/hero/squers - option 1.svg"} alt="" />
                        <div id="circle" className=" size-96 rounded-full bg-[#dfe1fa] relative z-10 overflow-hidden ">
                            <img id="myProfileImg" loading="lazy" className="absolute top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[32%] z-20" src={import.meta.env.BASE_URL+"images/hero/myImg3.png"} alt="" />
                        </div>
                    </div>
                </div>
                <div className="linesBack absolute top-[50%] left-[50%] size-full  -translate-x-[50%] -translate-y-[50%]">
                    <img className=" absolute w-full scale-y-[0.9] top-[180px]" src={import.meta.env.BASE_URL+"images/hero/Vector 1.png"} alt="" />
                    <img className=" absolute w-full scale-y-[0.9] top-[248px]" src={import.meta.env.BASE_URL+"images/hero/Vector 3.png"} alt="" />
                </div>
                <div className=" absolute bottom-0 border-dashed border-t-2 w-full z-30">
                    <img loading="lazy" className="absolute left-[50%]  -top-2.5" src={import.meta.env.BASE_URL+"images/hero/dot.png"} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero