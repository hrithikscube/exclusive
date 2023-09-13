import BannerCarousel from '@/components/common/BannerCarousel'
import SectionTitle from '@/components/common/SectionTitle'
import { Rating } from '@mui/material'
import React, { Fragment } from 'react'

const ProductCard = () => {
    return (
        <div>
            <div className='bg-[#f2f2f2] w-[290px] p-10 flex flex-col gap-4 items-center justify-center relative group'>

                <img src="/products/joystick.png" alt="joystick" />

                <button className='p-2 w-full bg-black absolute bottom-0 group-hover:block hidden text-white font-poppins text-sm font-medium capitalize'>
                    Add to Cart
                </button>

            </div>

            <div className='mt-1'>
                <p className='text-base font-poppins font-medium'>Gaming Joystick</p>
                <div className='flex items-center gap-1'>
                    <p className='text-primaryRed text-sm font-poppins font-semibold'>$100</p>
                    <span className='text-sm font-poppins flex items-center font-medium text-[#808080]'>
                        <div className='scale-[0.9]'>
                            <Rating name="read-only" value={4} readOnly />
                        </div>
                        (35)</span>
                </div>
            </div>
        </div>
    )
}

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
        <Fragment>

            <div className='lg:w-[1290px] m-auto'>
                {/* Hero Section Carousel & Side Menu */}
                <div className=' flex flex-row justify-between lg:my-10 my-5'>

                    <div className='flex flex-col items-start gap-4  text-start w-3/12'>
                        {React.Children.toArray(categories.map(item => (
                            <p className='text-base font-poppins font-medium '>{item}</p>
                        )))}
                    </div>

                    <div className='w-9/12'>
                        <BannerCarousel />
                    </div>

                </div>

                {/* Flash Sales */}
                <div className='my-5'>
                    <SectionTitle title="Today's" secondaryTitle="Flash Sales" />

                    <div className='grid grid-cols-4'>

                        {React.Children.toArray([1, 1, 1, 1].map(item => (
                            <ProductCard />
                        )))}

                    </div>

                </div>

                {/* Browse By Category */}
                <div className='my-5'>
                    <SectionTitle title="Categories" secondaryTitle="Browse By Category" />
                </div>

                {/* Best Selling Products */}
                <div className='my-5'>
                    <SectionTitle title="This Month" secondaryTitle="Best Selling Products" />
                </div>

                {/* Best Selling Products */}
                <div className='my-5'>
                    <SectionTitle title="Our Products" secondaryTitle="Explore Our Products" />
                </div>

                {/* New Arrival */}
                <div className='my-5'>
                    <SectionTitle title="Featured" secondaryTitle="New Arrival" />
                </div>


            </div>

        </Fragment>
    )
}

export default HeroSection