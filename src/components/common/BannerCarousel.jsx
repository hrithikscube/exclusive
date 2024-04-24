import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const BannerCarousel = () => {
    return (
        <div className='relative'>
            <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay={true}
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable={false}
                focusOnSelect={false}   
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover={false}
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay={false}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable={false}
            >

                {React.Children.toArray([1, 1, 1, 1, 1].map(item => (
                    <img src="/images/iphonebanner.png" alt="iphonebanne" className='' />
                )))}

            </Carousel>
        </div>
    )
}

export default BannerCarousel