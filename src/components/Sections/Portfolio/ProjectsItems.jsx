// src\components\Sections\Portfolio\ProjectsItems.jsx

import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { TotalProjectsContext } from "../../../App"
import './portfolio.css'

const items = [
    { id: 1, img: import.meta.env.BASE_URL+'images/Portfolio/evo.png', name: 'Evo Fix Platform', langs: 'Next js - TypeScript',date:'10/11/2024',
         desc:"The platform aims to provide a service for the maintenance of electrical and electronic devices in all Syrian governorates. What distinguishes the platform is the presence of a specialized, certified technical team. Once the maintenance request is received, an appointment is set for the maintenance team to visit as soon as possible.", library:"emotion/react - mui/material - nodemailer", framework: "tailwind next js", repoLink: "https://github.com/MohammadSalman1998/evo-fix", demoLink:"https://evo-fix-xi.vercel.app", link: '/' },
    { id: 2, img: import.meta.env.BASE_URL+'images/Portfolio/trippy.png', name: 'Trippy', langs: 'React js - Tailwind',date:'18/10/2024',
         desc:"A site that shows tourist attractions and allows you to request to join a trip.", library:"React js - tailwind", framework: "-", repoLink: "https://github.com/MohammadSalman1998/trippy/tree/main", demoLink:"https://mohammadsalman1998.github.io/trippy", link: '/' },
    { id: 3, img: import.meta.env.BASE_URL+'images/Portfolio/dashboard.png', name: 'Dashboard', langs: 'React js - Css - tailwind',date:'25/1/2025',
         desc:"dashboard to control of products [add - edit - delete]", library:"React js - Tailwind", framework: "-", repoLink: "https://github.com/MohammadSalman1998/dashboard", demoLink:"https://mohammadsalman1998.github.io/dashboard/", link: '/' },
    // { id: 4, img: '/public/images/Portfolio/Image.png', name: 'Educational Platform-4', langs: 'Html-Css3-Vanilla javascript',date:'18/2/2025',
    //      desc:"description", library:"tailwind", framework: "next js", repoLink: "/", demoLink:"/", link: '/' },
    // { id: 5, img: '/public/images/Portfolio/Image.png', name: 'Educational Platform-5', langs: 'Html-Css3-Vanilla javascript',date:'18/2/2025',
    //      desc:"description", library:"tailwind", framework: "next js", repoLink: "/", demoLink:"/", link: '/' },
    // { id: 6, img: '/public/images/Portfolio/Image.png', name: 'Educational Platform-6', langs: 'Html-Css3-Vanilla javascript',date:'18/2/2025',
    //      desc:"description", library:"tailwind", framework: "next js", repoLink: "/", demoLink:"/", link: '/' },
]

const ProjectsItems = () => {

    const total = useContext(TotalProjectsContext)

    const handleSendData = (img, name, langs, date, desc, library, framework, repoLink, demoLink) =>{
        localStorage.setItem('projectData', JSON.stringify({img, name, langs, date,desc, library, framework, repoLink, demoLink}))
    }


    useEffect(() => {
        total.setTotalProject(items.length)
    }, [])

    return (
        <>
            {
                items.map((item) => {
                    return (

                        <div key={item.id} className=" card h-[320px] flex flex-col justify-between md:min-w-[370px] md:max-w-[370px]">
                            <div className="cardHead overflow-hidden rounded-xl " ><Link target="_blanck" to={item.repoLink}><img className="hover:scale-105 transition-all duration-200 min-w-[320px]" loading="lazy" src={item.img} alt="" /></Link></div>
                            <div className="cardBody ">
                                <p className="text-[22px] !mt-2 font-semibold hover:text-primary hover:transition-all" onClick={()=>handleSendData(item.img, item.name, item.langs, item.date, item.desc, item.library, item.framework, item.repoLink, item.demoLink)}><Link to={'/projects'}>{item.name}</Link></p>
                                <div className="desc flex justify-between items-baseline">
                                    <p >{item.langs}</p>
                                    <Link className="hover:animate-pulse" target="_blanck" to={item.demoLink}><img src={import.meta.env.BASE_URL+"images/Portfolio/Icon.png"} alt="" /></Link>
                                </div>
                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}

export default ProjectsItems