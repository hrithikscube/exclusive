import React from 'react'



const Header = () => {
    return (
        <div className='border-b border-gray-300 w-full mb-10'>
            <div className='lg:w-[1290px] m-auto lg:p-10 p-5 flex flex-col lg:flex-row items-center justify-between '>

                <h1 className='font-poppins font-semibold lg:text-2xl text-xl text-black'>Exclusive</h1>

                <div className='flex flex-col lg:flex-row items-center lg:gap-7 gap-4'>
                    {React.Children.toArray([
                        "Home", "Contact", "About", "Sign Up"
                    ]
                        .map(item => (
                            <p className='text-base text-black hover:underline cursor-pointer font-poppins font-thin'>{item}</p>
                        ))
                    )}
                </div>

                <div className='bg-[#F5F5F5] p-2 relative rounded px-3'>

                    <input
                        className='outline-none lg:w-[220px] m-auto w-ful bg-transparent placeholder:text-sm placeholder:text-[#808080] font-poppins text-sm'
                        placeholder='What are you looking for?' />

                    <img src="/icons/searchIcon.svg" alt="searchIcon" className='w-6 h-6 cursor-pointer absolute right-2 top-2' />

                </div>


            </div>
        </div>
    )
}

export default Header