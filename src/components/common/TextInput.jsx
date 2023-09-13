import React from 'react'

const TextInput = ({ name, value, handleChange, label, type }) => {
    return (
        <div className='w-full'>
            <input
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={label}
                type={type ?? 'text'}
                className='outline-none p-3 w-full border-b border-gray-400 font-poppins text-base placeholder:text-[#808080]'
            />
        </div>
    )
}

export default TextInput