// src\components\Sections\Contact\InfoItems.jsx
import { AiOutlineMail } from "react-icons/ai"
import { CiLocationOn } from "react-icons/ci"
import { IoCallOutline } from "react-icons/io5"

const items = [
    { id: 1, icon: <IoCallOutline/>, title: 'Call me', desc: '+963960950112' },
    { id: 2, icon: <AiOutlineMail/>, title: 'Email me', desc: 'mohammad.salman.m1998@gmail.com' },
    { id: 3, icon: <CiLocationOn/>, title: 'Address', desc: 'Damascus,syria' },
]
const InfoItems = () => {
    return (
        <>
            {
                items.map((item) => {
                    return (
                        <div key={item.id} className="flex !mb-11">
                            <div className="!p-5 min-w-[61px] min-h-[56px]  text-2xl relative rounded-xl bg-primary text-white">
                               <span  className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">{item.icon}</span> 
                            </div>
                            <div className=" info-contact flex flex-col !ml-5 gap-1">
                                <p className="text-secondary5">{item.title}</p>
                                <p className="desc-contact">{item.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default InfoItems