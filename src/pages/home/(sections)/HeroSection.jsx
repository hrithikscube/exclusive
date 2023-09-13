import BannerCarousel from '@/components/common/BannerCarousel'
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
        <div className='lg:w-[1290px] m-auto flex flex-row justify-between lg:my-10 my-5'>

            <div className='flex flex-col items-start gap-4  text-start w-3/12'>
                {React.Children.toArray(categories.map(item => (
                    <p className='text-base font-poppins font-medium lg:text-lg'>{item}</p>
                )))}
            </div>

            <div className='w-9/12'>
                <BannerCarousel />
            </div>

        </div>
    )
}

export default HeroSection