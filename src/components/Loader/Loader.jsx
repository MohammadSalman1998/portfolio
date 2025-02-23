// src\components\Loader\Loader.jsx

const Loader = () => {
  return (
    <div className="h-screen relative w-screen opacity-25 bg-secondary5">
        <div className="w-10 h-10 border-4 border-primary shadow-2xl animate-ping rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"></div>
        <div className="w-10 h-10 border-b-4 border-SubHeadBlack opacity-30 rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"></div>
        <div className="w-20 h-20 border-4 border-primary shadow-2xl animate-bounce rounded-full absolute top-[50%] left-[47%] -translate-x-[47%] -translate-y-[50%]"></div>
        <div className="w-20 h-20 border-b-4 border-SubHeadBlack opacity-30 rounded-full absolute top-[50%] left-[47%] -translate-x-[47%] -translate-y-[50%]"></div>
        <div className="w-20 h-20 border-4 border-primary shadow-2xl animate-bounce rounded-full absolute top-[50%] left-[53%] -translate-x-[53%] -translate-y-[50%]"></div>
        <div className="w-20 h-20 border-b-4 border-SubHeadBlack opacity-30 rounded-full absolute top-[50%] left-[53%] -translate-x-[53%] -translate-y-[50%]"></div>
    </div>
  )
}

export default Loader