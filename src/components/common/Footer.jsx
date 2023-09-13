import React from 'react'


const LinkItem = ({ data }) => {
    return (
        <p className='text-base text-white font-poppins font-thin w-[220px]'>{data}</p>
    )
}

const LinkCategory = ({ data }) => {
    return (
        <h1 className='font-poppins font-semibold lg:text-2xl text-xl text-white'>{data}</h1>
    )
}

const Footer = () => {
    return (
        <div className='w-full  bg-black'>
            <div className='lg:w-[1290px] lg:py-10 lg:px-0 p-5 m-auto flex lg:flex-row flex-col items-start lg:justify-between gap-7'>

                <div className='flex flex-col gap-5 items-start'>
                    <LinkCategory data="Exclusive" />
                    {React.Children.toArray([
                        "Subscribe",
                        "Get 10% off your first order",
                    ].map(item => (
                        <LinkItem data={item} />
                    )))}

                    <div className='border border-white p-2 flex items-center gap-2 w-full'>
                        <input placeholder='Enter your email' className='bg-transparent outline-none w-[90%] text-white text-base placeholder:text-[#808080] ' />
                        <img src="/icons/arrow.svg" alt="arrowIcon" className='cursor-pointer w-5 h-5' />
                    </div>
                </div>

                <div className='flex flex-col gap-5 items-start'>
                    <LinkCategory data="Support" />
                    {
                        React.Children.toArray([
                            "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
                            "exclusive@gmail.com",
                            "+88015-88888-9999"
                        ].map(item => (
                            <LinkItem data={item} />
                        )))
                    }

                </div>

                <div className='flex flex-col gap-5 items-start'>
                    <LinkCategory data="Account" />
                    {
                        React.Children.toArray([
                            "My Account",
                            "Login / Register",
                            "Cart",
                            "Wishlist",
                            "Shop"
                        ].map(item => (
                            <LinkItem data={item} />
                        )))
                    }

                </div>

                <div className='flex flex-col gap-5 items-start'>
                    <LinkCategory data="Quick Link" />
                    {
                        React.Children.toArray([
                            "Privacy Policy",
                            "Terms Of Use",
                            "FAQ",
                            "Contact",
                        ].map(item => (
                            <LinkItem data={item} />
                        )))
                    }

                </div>

                <div className='flex flex-col gap-5 items-start'>
                    <LinkCategory data="Download App" />

                    <div className=''>
                        <p className='text-sm font-poppins font-thin text-[#808080]'>Save $3 with App New User Only</p>

                        <div className='flex items-center gap-2 my-2'>

                            <img src="/icons/qrCode.svg" alt="qrCode" className='w-[80px] h-[80px]' />

                            <div className='flex flex-col gap-2 justify-between'>
                                <img src="/icons/play-store.svg" alt="play_store" />
                                <img src="/icons/app-store.svg" alt="app_store" />

                            </div>

                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        {React.Children.toArray([
                            "/icons/facebook.svg",
                            "/icons/twitter.svg",
                            "/icons/instagram.svg",
                            "/icons/linkedin.svg",
                        ].map(item => (
                            <img src={item} alt={item} className='w-7 h-7 cursor-pointer' />
                        )))}
                    </div>



                </div>

            </div>

            <div className='text-center py-3 border-t border-[#808080]'>
                <p className='text-sm font-poppins text-[#808080]'> &copy; Copyright Rimel 2022. All right reserved</p>
            </div>

        </div>

    )
}

export default Footer