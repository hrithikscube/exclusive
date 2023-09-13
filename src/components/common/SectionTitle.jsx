import React, { Fragment } from 'react'

const SectionTitle = ({ title, secondaryTitle }) => {
    return (
        <Fragment>
            <div className='flex items-center gap-3'>
                <div className='w-5 bg-primaryRed h-10 rounded' />
                <p className='text-primaryRed text-sm font-poppins font-semibold tracking-wide'>{title}</p>
            </div>

            <h1 className='lg:text-3xl text-2xl font-poppins font-semibold tracking-widest mt-2'>{secondaryTitle}</h1>
        </Fragment>
    )
}

export default SectionTitle