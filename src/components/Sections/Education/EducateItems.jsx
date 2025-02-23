// src\components\Sections\Education\EducateItems.jsx

import useTheme from "../../../customHooks/ThemeHook/useTheme"

const items = [
    {id:1, title: 'Master of Computer Science', desc:'I studied Master of Computer Science from 2022 to 2024 and got an excellent rate'},
    {id:2, title: 'College of Applied Engineering', desc:'I studied an applied engineering specialization "Computer Technologies" from 2016 to 2020 and got a very good rate'},
    {id:3, title: 'Frontend Developer', desc:'I have good experience with the following languages, Frameworks ​​and techniques "HTML5, CSS3, Bootstrap, Tailwind, Javascript, Typescript, React js and Next js"'},
    {id:4, title: 'Backend Developer', desc:'I have good experience with the following languages, Frameworks ​​and techniques "Node js, Express js and Next js"'},
    {id:5, title: 'Databases', desc:'I have good experience with the following Databases "MySQL, PostgreSQL, Prisma and MongoDB"'},
    {id:6, title: 'Techniques', desc:'I have good experience with the following Techniques "GitHub, Figma"'},
]

const EducateItems = () => {
  const [isDark] = useTheme()
  return (
    <>
    {
        items.map((item)=>{
            return(
               
                <div key={item.id} className="border-l-2 relative border-dashed !pl-8">
                        <img loading="lazy" className=" transition-all duration-300 ease-in absolute top-0 -left-3" src={isDark == 'true' ? import.meta.env.BASE_URL+"images/education/iconDark.png" : import.meta.env.BASE_URL+"images/education/iconLight.png"} alt="" />
                        <p className={` transition-all duration-300 ease-in${isDark == 'true' ? 'text-white' : 'text-secondary'}  text-2xl  font-medium`}>{item.title}</p>
                        <p className={` text-secondary4 !my-7`}>{item.desc}</p>

                    </div>
              
            )
        })
    }
    
    </>
  )
}

export default EducateItems