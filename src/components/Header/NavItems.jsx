// src\components\Header\NavItems.jsx
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CloseNavMenuContext } from "./Header"

const items = [
    { id: 1, name: 'Home', path: 'hero' },
    { id: 2, name: 'About me', path: 'about' },
    { id: 3, name: 'Education', path: 'education' },
    { id: 4, name: 'Projects', path: 'projects' },
    { id: 5, name: 'Contact', path: 'contact' },
]

const sectionsID = ['hero', 'about', 'education', 'projects', 'contact']

const NavItems = () => {

    const closeMenu = useContext(CloseNavMenuContext)

    const [activeLink, setActiveLink] = useState('hero')

    const scrollToSection = (sectionID) => {
        const element = document.getElementById(sectionID)
        if (element) {
            const marginTop = 75
            const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop
            window.scrollTo({ top: scrollToY, behavior: "smooth" })
        }
    }

    const determineActiveSection = () => {
        for (let i = sectionsID.length - 1; i >= 0; i--) {
            const section = document.getElementById(sectionsID[i])
            if (section) {
                const rect = section.getBoundingClientRect()
                if (rect.top <= 100 && rect.bottom >= 100) {
                    setActiveLink(sectionsID[i])
                    break
                }
            }
        }
    }

    const handleCloseMenu = ()=>{
        closeMenu.setIsMenuOpen(!closeMenu.isMenuOpen)
    }

    useEffect(() => {
        window.addEventListener('scroll', determineActiveSection)

        return () => {
            window.removeEventListener('scroll', determineActiveSection)
        }
    }, [])

    return (

        <>
            {
                items.map((item) => {
                    return (
                        <li key={item.id} onClick={() =>{ handleCloseMenu(); scrollToSection(item.path)}} className="text-base font-medium cursor-pointer">
                            <Link to={'/'} className={`${activeLink === item.path ? "active" : ""} hover:text-primary`}>{item.name}</Link>
                        </li>
                    )
                })
            }
        </>

    )
}

export default NavItems