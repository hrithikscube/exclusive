import React, { Fragment } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Stats from '../common/Stats'

const About = () => {
  return (
    <Fragment>
      <Header />
      <div className="relative">
        <div className="lg:w-[1290px] m-auto">
          <div className="my-5">
            <p className="text-sm font-poppins font-medium text-[#808080]">
              Home{' '}
              <span className="text-black text-sm font-poppins font-medium">
                {' '}
                / About
              </span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 items-center w-full h-screen">
            <img
              src="/images/story.png"
              alt="story"
              className="lg:hidden block h-full object-cover"
            />

            <div className="flex flex-col gap-3 py-10 pr-10">
              <h1 className="lg:text-5xl/1 text-3xl font-poppins font-medium">
                Our Story
              </h1>
              <p className="text-base font-poppins tracking-wide">
                Cillum consequat quis pariatur adipisicing eu nostrud nostrud
                eiusmod nostrud. Laboris velit anim ex esse magna pariatur in
                anim dolore esse est sunt labore. Amet commodo cupidatat Lorem
                ea elit do. Anim mollit in ipsum laboris dolore ad aliquip non
                laboris. Occaecat exercitation sint enim occaecat ipsum commodo
                magna cillum cillum anim.
              </p>

              <p className="text-base font-poppins tracking-wide">
                Nulla aliqua commodo duis eiusmod pariatur sint officia
                occaecat. Nulla et do tempor ullamco ad. Dolor anim tempor nulla
                est id dolor ea sit magna irure ipsum.
              </p>
            </div>

            <div className="absolute right-0 lg:block hidden">
              <img
                src="/images/story.png"
                alt="story"
                className=" h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Stats />

      <Footer />
    </Fragment>
  )
}

export default About
