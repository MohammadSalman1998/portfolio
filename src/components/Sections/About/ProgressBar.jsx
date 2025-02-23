// src\components\Sections\About\ProgressBar.jsx
import './progress.css'
const items = [
    { id: 1, width: 90, title: 'HTML5' },
    { id: 2, width: 90, title: 'CSS3' },
    { id: 3, width: 95, title: 'Javascript' },
    { id: 4, width: 60, title: 'Typescript' },
    { id: 5, width: 90, title: 'React js' },
    { id: 6, width: 80, title: 'Next js' },
    { id: 7, width: 80, title: 'Node js' },
]

const ProgressBar = () => {
    return (
        <>
            {
                items.map((item) => {
                    return (
                     
                            <div key={item.id} className="relative !mb-8">
                                <h1 className='text-2xl font-semibold'>{item.title}</h1>
                                <div style={{width:`${item.width}%`}} className={` absolute z-10 h-2 bg-primary rounded-2xl`} ></div>
                                <div style={{left:`${item.width}%`}}  className={`bg-white border-3 border-primary absolute z-10  -translate-x-[5px] top-[80%]  w-[17px] h-[17px] rounded-full`}></div>
                                <div style={{left:`${item.width}%`}} className={` popPercent text-white  text-[11px] bg-primary absolute z-10  -translate-x-1/2 -top-[0%] text-center  w-[30px] h-[20px]  rounded-sm`}>{item.width}%</div>
                                <div className="w-[100%] absolute h-2 bg-secondary3 rounded-2xl" ></div>
                            </div>
                      
                    )
                })
            }

        </>
    )
}

export default ProgressBar