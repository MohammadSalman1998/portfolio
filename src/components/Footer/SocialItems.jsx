// src\components\Footer\SocialItems.jsx
import { FaTelegramPlane } from "react-icons/fa"
import { ImFacebook } from "react-icons/im"
import { RiLinkedinFill, RiTwitterXFill } from "react-icons/ri"

const items = [
    { id: 1, icon: <ImFacebook/>, link: 'https://www.facebook.com/mohammad.salman.1998' },
    { id: 2, icon: <RiTwitterXFill/>, link: 'https://x.com/M1998Salman' },
    { id: 3, icon: <RiLinkedinFill/>, link: 'https://www.linkedin.com/in/mohammad-salman-779559263/'},
    { id: 4, icon: <FaTelegramPlane />, link: 'https://t.me/Eng_MHD_98'},
]

const SocialItems = () => {


    return (
        <>
            {
                items.map((item) => {
                    return (
                        <a key={item.id} target="_blanck" className="relative bg-primary text-white !p-3 !mx-1 rounded-full  " href={item.link}><span  className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">{item.icon}</span> </a>

                    )
                })
            }
        </>
    )
}

export default SocialItems