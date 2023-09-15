import React from 'react'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Sections from './(sections)/Sections'

const Home = () => {
    return (
        <div>
            <Header />
            <Sections />
            <Footer />
        </div>
    )
}

export default Home