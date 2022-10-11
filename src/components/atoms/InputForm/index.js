import React from 'react'

const InputForm = ({
    label,
    type = 'text',
    name,
    id,
    autoComplete
}) => {
    return (<>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input type={type} name={name} id={id} autoComplete={autoComplete} className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm" />
    </>

    )
}

export default InputForm