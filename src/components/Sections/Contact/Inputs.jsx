/* eslint-disable react/prop-types */
// src\components\Sections\Contact\Inputs.jsx

export const Inputs = ({name,type,holder,change}) => {
  return (
   <input name={name} type={type} placeholder={holder} onChange={change} required className=" !mb-4 border border-secondaryInput !p-2 rounded-lg w-full" />
  )
}

