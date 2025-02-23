// src\components\Header\Header.jsx

import { Link } from "react-router-dom"
import NavItems from "./NavItems"
import useTheme from "../../customHooks/ThemeHook/useTheme"
import './header.css'
import { MdClose } from "react-icons/md"
import { createContext, useState } from "react"
import { HiMenuAlt3 } from "react-icons/hi"

// eslint-disable-next-line react-refresh/only-export-components
export const CloseNavMenuContext = createContext(null)

const Header = () => {

  const [isDark, setIsDark] = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
<CloseNavMenuContext.Provider value={{isMenuOpen, setIsMenuOpen}}>
    <header className={` transition-all duration-300 ease-in !px-20 ${isDark=='true' ? 'bg-SubHeadBlack text-white' : 'bg-white text-SubHeadBlack'} flex justify-between  fixed top-0 w-full h-9  items-center z-50  !p-10`}>
      <div className="logo"><Link to={'/'} className="text-2xl font-semibold">Mohammad Salman</Link></div>
      <nav >
      <ul id={!isMenuOpen?'openMenu':''} className={`flex justify-around gap-6 ${isDark=='true' && isMenuOpen ? '!bg-SubHeadBlack !text-white ' : ''}`}>
        <NavItems/>
      </ul>
        </nav>
      <div className="theme flex items-center">
        <button className="bg-transparent border-0" onClick={setIsDark}><img className="cursor-pointer" src={isDark=='true'? "/public/images/sun/Sun_fill.png" : '/public/images/moon/moon.png'} alt="theme" /></button>
        <button onClick={handleMenu} id="menuBtn" className={`border-0 !ml-5 hidden cursor-pointer ${isDark == 'true' ? "text-primary" : ""} text-3xl `}>{!isMenuOpen? <HiMenuAlt3 />: <MdClose/> }</button>
      </div>
    </header>
</CloseNavMenuContext.Provider>

  )
}

export default Header