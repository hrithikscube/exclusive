import Link from 'next/link'
import React from 'react'


const headerItems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Contact',
        link: '/contact'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Sign Up',
        link: '/login'
    },

]


const Header = () => {
    return (
        <div className='border-b border-gray-300 w-full'>

            <div className='text-center py-3 bg-black w-full flex lg:flex-row flex-col items-center justify-center gap-2'>
                <p className='text-sm font-poppins text-[#f2f2f2] font-regular'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>

                <span className='text-sm font-poppins text-[#f2f2f2] font-medium hover:underline cursor-pointer'>Shop Now</span>
            </div>

            <div className='lg:w-[1290px] m-auto lg:p-10 p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between '>

                <h1 className='font-poppins font-semibold lg:text-2xl text-xl text-black'>Exclusive</h1>

                <div className='flex flex-col lg:flex-row lg:items-center lg:gap-7 gap-4 lg:my-0 my-5'>
                    {React.Children.toArray(headerItems
                        .map(item => (
                            <Link href={item.link}>
                                <p className='text-base text-black hover:underline cursor-pointer font-poppins font-thin'>{item.name}</p>
                            </Link>
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