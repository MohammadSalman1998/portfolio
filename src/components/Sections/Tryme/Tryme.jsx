// src\components\Sections\Tryme\Tryme.jsx

import { MdArrowForward } from "react-icons/md"
import useTheme from "../../../customHooks/ThemeHook/useTheme"
import {ButtonLink} from "../../Button/Button"
import './tryMe.css'

const Tryme = () => {
    const [isDark] = useTheme()
    return (
        <section id="trySection" className={` relative  min-h-[60vh] transition-all duration-300 ease-in ${isDark == 'true' ? 'bg-SubHeadBlack' : 'bg-white'}`}>
            <div className="min-w-[80%] min-h-[375px] absolute left-[50%] -translate-x-[50.5%] -rotate-1 rounded-4xl bg-primary"></div>
            <div className="min-w-[80%] min-h-[375px] absolute left-[50%] -translate-x-[50%]  rounded-4xl bg-[#583FBC] ">
                <div className="content flex justify-around items-center z-20 w-full !px-30  absolute  top-[50%] -translate-y-[50%]">
                    <div className="left text-white">
                        <p className="text-5xl !mb-4 font-semibold ">Try me out, risk free!</p>
                        <p className="text-xl max-w-135 !mr-7">If you’re not happy with the design after the first draft,
                            I’ll refund your deposit, <span className="font-bold">no questions asked</span></p>
                    </div>
                    <div className="right">
                        <ButtonLink href={'#contact'} name={'Contact'} icon={<MdArrowForward />}/>
                    </div>
                </div>
                <img loading="lazy" className="absolute w-full top-5   opacity-30" src="/public/images/try/Vector 1.png" alt="" />
                <img loading="lazy" className="absolute w-full top-5   opacity-30" src="/public/images/try/Vector 2.png" alt="" />
                <img loading="lazy" className="absolute w-full top-12    opacity-30" src="/public/images/try/Vector 3.png" alt="" />
            </div>
        </section>
    )
}

export default Tryme

