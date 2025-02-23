/* eslint-disable react/prop-types */
// src\components\Button\Button.jsx

export const Button = ({name, icon, click , isDisabled = false}) => {
    return (

        <button  disabled={isDisabled} onClick={click} className={`bg-primary hover:animate-pulse text-white flex !py-3 !px-7  items-center rounded-lg ${isDisabled ? 'cursor-not-allowed':'cursor-pointer' } `}> {name} <span className="!ml-2 ">{icon}</span></button>
    )
}

export const ButtonLink = ({name, icon , href, target}) => {
    return (
        
        <a href={href} target={target}  className={`bg-primary hover:animate-pulse text-white flex !py-3 !px-7  items-center rounded-lg 'cursor-pointer' `}> {name} <span className="!ml-2 ">{icon}</span></a>
    )
}

