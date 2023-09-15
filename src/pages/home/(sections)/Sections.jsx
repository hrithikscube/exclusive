import BannerCarousel from '@/components/common/BannerCarousel'
import SectionTitle from '@/components/common/SectionTitle'
import { Rating } from '@mui/material'
import React, { Fragment } from 'react'

const ProductCard = () => {
    return (
        <div>
            <div className='bg-[#f2f2f2] lg:w-[290px] w-full p-10 flex flex-col gap-4 items-center justify-center relative group'>

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

const productCategories = [
    {
        name: 'Phone',
        image: '/categories/phone.svg',
    },

    {
        name: 'Computers',
        image: '/categories/computers.svg',
    },

    {
        name: 'Camera',
        image: '/categories/camera.svg',
    },

    {
        name: 'Gaming',
        image: '/categories/gaming.svg',
    },

    {
        name: 'Headphones',
        image: '/categories/headphones.svg',
    },

    {
        name: 'Smartwatch',
        image: '/categories/smartwatch.svg',
    },


]

const CategoryCard = ({ data }) => {
    return (
        <div className='lg:w-[200px] w-full lg:h-[200px] h-[250px] p-5 border border-[#2f2f2f] hover:border-none group hover:bg-primaryRed cursor-pointer rounded flex flex-col items-center gap-2 justify-center'>
            <img src={data.image} alt="Phone" className="w-20 h-20 group-hover:invert" />
            <h1 className='text-base font-poppins font-medium capitalize group-hover:text-white'>{data.name}</h1>
        </div>
    )
}

const Sections = () => {
    return (
        <Fragment>

            <div className='lg:w-[1290px] m-auto'>
                {/* Hero Section Carousel & Side Menu */}
                <div className=' flex flex-col lg:flex-row justify-between lg:my-10 my-5 lg:px-0 px-5'>

                    <div className='flex flex-col items-start gap-4 text-start lg:w-3/12 w-full'>
                        {React.Children.toArray(categories.map(item => (
                            <p className='text-base font-poppins font-medium '>{item}</p>
                        )))}
                    </div>

                    <div className='lg:w-9/12 w-full lg:my-0 my-5'>
                        <BannerCarousel />
                    </div>

                </div>

                {/* Flash Sales */}
                <div className='my-5 lg:px-0 px-5'>
                    <SectionTitle title="Today's" secondaryTitle="Flash Sales" />

                    <div className='grid lg:grid-cols-4 my-5 lg:gap-0 gap-5'>

                        {React.Children.toArray([1, 1, 1, 1].map(item => (
                            <ProductCard />
                        )))}

                    </div>

                </div>

                {/* Browse By Category */}
                <div className='my-5 lg:px-0 px-5'>
                    <SectionTitle title="Categories" secondaryTitle="Browse By Category" />

                    <div className='my-5 grid lg:grid-cols-6 gap-5'>
                        {React.Children.toArray(productCategories.map(item => (
                            <CategoryCard data={item} />
                        )))}
                    </div>

                </div>

                {/* Best Selling Products */}
                <div className='my-5 lg:px-0 px-5'>
                    <SectionTitle title="This Month" secondaryTitle="Best Selling Products" />

                    <div className='grid lg:grid-cols-4 my-5 lg:gap-0 gap-5'>

                        {React.Children.toArray([1, 1, 1, 1].map(item => (
                            <ProductCard />
                        )))}

                    </div>
                </div>

                {/* Explore Our Products */}
                <div className='my-5 lg:px-0 px-5'>
                    <SectionTitle title="Our Products" secondaryTitle="Explore Our Products" />

                    <div className='grid lg:grid-cols-4 my-5 lg:gap-0 gap-5'>

                        {React.Children.toArray([1, 1, 1, 1, 1, 1, 1, 1,].map(item => (
                            <ProductCard />
                        )))}

                    </div>


                </div>

                {/* New Arrival */}
                <div className='my-5 lg:px-0 px-5'>
                    <SectionTitle title="Featured" secondaryTitle="New Arrival" />

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 my-5">

                        <div className='bg-black'>
                            <img src="/products/ps5.png" alt="products" className='w-full object-contain h-full' />
                        </div>

                        <div className='flex flex-col gap-5'>

                            <div>
                                <img src="/products/women.png" alt="" className='w-full object-cover' />
                            </div>

                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                <div className='bg-black flex justify-center items-center p-5'>
                                    <img src="/products/speakers.png" alt="" className='' />
                                </div>
                                <div className='bg-black flex justify-center items-center p-5'>
                                    <img src="/products/gucci.png" alt="" className='' />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </Fragment>
    )
}

export default Sections