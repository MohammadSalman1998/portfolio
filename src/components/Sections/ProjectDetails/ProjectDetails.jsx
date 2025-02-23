// src\components\Sections\ProjectDetails\ProjectDetails.jsx

import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonLink } from "../../Button/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useTheme from "../../../customHooks/ThemeHook/useTheme";
import { TotalProjectsContext } from "../../../App";
import ProjectsItems from "../Portfolio/ProjectsItems";
import './projectDetails.css'
import { BsArrowsFullscreen } from "react-icons/bs";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { MdClose } from "react-icons/md";



const ProjectDetails = () => {

    const [isDark] = useTheme()
    const [slide, setSlide] = useState(0)
    const [isShowIMG, setIsSHhowIMG] = useState(false)

    const dataProject = JSON.parse(localStorage.getItem('projectData'))

    const total = useContext(TotalProjectsContext).totalProject

    const handleShowIMG = ()=>{
        setIsSHhowIMG(true)
    }
    const handleHideIMG = ()=>{
        setIsSHhowIMG(false)
    }

    const totalSlides = total;

    const handleForwardSlide = () => {
        setSlide((prevSlide) =>
            prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
        )
    };

    const handleBackSlide = () => {
        setSlide((prevSlide) =>
            prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
        )
    };

    const translateX = `-${slide * 110}%`;

    return (
        <>
            <section id="projectDetails" className={`min-h-screen w-full relative transition-all duration-300 ease-in  ${isDark == 'true' ? 'bg-SubHeadBlack text-white' : 'text-SubHeadBlack bg-white'}`}>
                <div className={` ${isShowIMG ? '' : 'hidden'} size-full z-10 ${isDark == 'true' ? "bg-SubHeadBlack" : "bg-white"}  absolute top-0 bottom-0 `}>
                    <button onClick={handleHideIMG} className="absolute z-10 cursor-pointer top-[20%] right-[10%] -translate-y-[50%] text-2xl"><MdClose /></button>
                    <img className="w-full max-w-[800px] h-auto object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={dataProject.img} alt="" />
                </div>
                <div className="content w-full   flex justify-around items-center  gap-11 !px-11">
                    <div className="left w-1/2 relative  h-[400px] ">
                        <div className="overlay hidden">
                            <div className="size-full rounded-2xl bg-SubHeadBlack opacity-50 absolute top-0 bottom-0 "></div>
                            <div className="icon-hover  absolute top-[50%] left-[50%] -translate-[50%] text-6xl text-white flex gap-10">
                                <button onClick={handleShowIMG} className="cursor-pointer"><BsArrowsFullscreen /></button>
                                <Link target="_blanck" to={dataProject.demoLink}><LuCircleArrowOutUpRight /></Link>
                            </div>
                        </div>
                        <img className="size-full  object-contain " src={dataProject.img} alt="" />

                    </div>
                    <div className="right w-1/2  h-[400px] ">
                        <div className="card h-full flex flex-col justify-between items-start ">
                            <div className="headCard flex justify-between  items-baseline flex-wrap w-full ">
                                <div>
                                    <p className="text-3xl font-semibold">{dataProject.name}</p>
                                    <p className="text-[14px] text-[#A6A6A6]">{dataProject.date}</p>
                                </div>
                                <Link target="_blanck" to={dataProject.demoLink}><img src="/public/images/Portfolio/Icon.png" alt="" /></Link>
                            </div>
                            <div className="bodyCard ">
                                <p>{dataProject.desc}</p>
                                <div className="flex flex-col gap-2.5 !mt-7">
                                    <span className="font-semibold"> Basic Languages : <span className="font-light">{dataProject.langs}</span></span>
                                    <span className="font-semibold"> Framework : <span className="font-light">{dataProject.framework}</span></span>
                                    <span className="font-semibold"> Libraries : <span className="font-light">{dataProject.library}</span></span>
                                </div>
                            </div>
                            <div className="footerCard ">
                                <ButtonLink target={"_blanck"} href={dataProject.repoLink} name={'Github Repo'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" absolute bottom-0 border-dashed border-t-2 w-full">
                    <img className="absolute left-[50%]  -top-2.5" src="/public/images/hero/dot.png" alt="" />
                </div>
            </section>
           


            <section id="sliderProject" className={`   transition-all duration-300 ease-in ${isDark == 'true' ? 'bg-SubHeadBlack text-white' : 'bg-white text-SubHeadBlack'}`}>
                <div className={`title !py-11  flex justify-between !px-20 items-center `}>
                    <div className="left ">
                        <p className="text-primary text-[20px] font-medium">Portfolio</p>
                        <p className="text-[40px] font-semibold ">The Best <span className="text-primary">Projects</span></p>
                    </div>
                    <div className="right">
                        <button onClick={handleBackSlide} className="back !mr-5 bg-transparent hover:bg-white border border-primary cursor-pointer text-[#A6A6A6] !p-3 text-2xl rounded-full"><IoIosArrowBack /></button>
                        <button onClick={handleForwardSlide} className="forward bg-primary text-white !p-3 cursor-pointer text-2xl rounded-full"><IoIosArrowForward /></button>
                    </div>
                </div>
                <div className={`overflow-x-hidden`}>
                    <div style={{ transform: `translateX(${translateX})` }} className={`cards   transition-all duration-300 ease-in md:!mx-20 !pb-6 flex  gap-32  `}>
                        <ProjectsItems />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectDetails