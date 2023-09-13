import React from 'react'

const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Grocery & Pets",
    "Healthy & Beauty",
]

const HeroSection = () => {
    return (
        <div className='lg:w-[1290px] m-auto flex flex-col lg:my-10 my-5'>
            <div className='flex flex-col items-start gap-4  text-start '>
                {React.Children.toArray(categories.map(item => (
                    <p className='text-base font-poppins font-medium lg:text-lg'>{item}</p>
                )))}
            </div>
        </div>
    )
}

export default HeroSection