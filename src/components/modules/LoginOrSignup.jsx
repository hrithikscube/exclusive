import React, { useState } from 'react'
import TextInput from '../common/TextInput'
import { useRouter } from 'next/router'

const LoginOrSignup = () => {

    const [isUser, setIsUser] = useState(true)

    const router = useRouter()

    return (
        <div className='flex items-center h-screen w-full'>

            <img src="/images/bannerImage.png" alt="bannerImage" className='lg:w-[50%] w-full object-cover h-full' />

            {
                isUser ?

                    <div className='w-[50%] bg-white flex flex-col items-start justify-center lg:w-[397px] m-auto gap-3'>
                        <h1 className='lg:text-3xl text-xl font-poppins font-medium'>Log in  to Exclusive</h1>
                        <p className='text-sm font-poppins font-medium'>Enter your details below</p>


                        <TextInput
                            name="email"
                            label="Email or Phone Number"
                            type="text"
                        />

                        <TextInput
                            name="password"
                            label="Password"
                            type="password"
                        />

                        <div className='grid grid-cols-2 w-full lg:gap-20 gap-10 mt-3'>
                            <div className=''>
                                <button className='cta-button-primary w-full'>
                                    Log in
                                </button>
                            </div>

                            <div className=''>
                                <button className='cta-button-secondary w-full'>
                                    Forget Password?
                                </button>
                            </div>
                        </div>
                        <p className='p-2 text-sm text-[#808080] font-poppins flex items-center gap-2'>Don&apos;t have account?
                            <span onClick={() => setIsUser(!isUser)} className='border-b font-medium cursor-pointer'>Sign up</span>
                        </p>

                    </div> :
                    <div className='w-[50%] bg-white flex flex-col items-start justify-center lg:w-[397px] m-auto gap-3'>
                        <h1 className='lg:text-3xl text-xl font-poppins font-medium'>Create an account</h1>
                        <p className='text-sm font-poppins font-medium'>Enter your details below</p>

                        <TextInput
                            name="name"
                            label="Name"
                            type="text"
                        />

                        <TextInput
                            name="email"
                            label="Email or Phone Number"
                            type="text"
                        />

                        <TextInput
                            name="password"
                            label="Password"
                            type="password"
                        />


                        <div className='w-full'>
                            <button className='cta-button-primary w-full'>
                                Create Account
                            </button>
                        </div>

                        <div className='w-full'>
                            <button className='border border-black p-3 rounded-[4px] flex items-center justify-center gap-2 w-full'>
                                <img src="/icons/google.svg" alt="googleIcon" className='w-5 h-5' />
                                <p className='text-black font-poppins text-sm'>Sign up with Google</p>
                            </button>
                        </div>

                        <p className='p-2 text-sm text-[#808080] font-poppins flex items-center gap-2'>Already have account?
                            <span onClick={() => setIsUser(!isUser)} className='border-b font-medium cursor-pointer'>Log in</span>
                        </p>


                    </div>
            }

        </div>
    )
}

export default LoginOrSignup
