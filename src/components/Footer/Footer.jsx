// src\components\Footer\Footer.jsx
import useTheme from "../../customHooks/ThemeHook/useTheme"
import SocialItems from "./SocialItems"
import './footer.css'

const Footer = () => {
  const [isDark] = useTheme()
  return (
    <footer className={`  transition-all duration-300 ease-in  ${isDark=='true' ? 'bg-SubHeadBlack text-white' : 'bg-white text-SubHeadBlack'}`}>
        <div className=" content flex justify-between w-[90%] border-t-2 border-secondaryInput items-center !m-auto !py-7">
          <p>@ 2024. All Rights Reserved</p>
          <p>Development by Mohammad Salman</p>
          <div className="social flex">
             <SocialItems/>
          </div>
        </div>
    </footer>
  )
}

export default Footer