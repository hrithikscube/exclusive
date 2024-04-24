import React from 'react'

const Stats = () => {
  return (
    <div className="lg:my-20 my-10 lg:px-0 px-5">
      <div className="flex lg:flex-row flex-col items-start justify-center lg:gap-10 gap-5">
        <div className="flex flex-col items-center justify-center">
          <img src="/icons/delivery.svg" alt="delivery" />
          <h2 className="font-poppins uppercase text-lg font-bold">
            Free and Fast Delivery
          </h2>
          <p className="text-sm font-poppins font-medium">
            Free delivery for all orders over $140
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img src="/icons/delivery.svg" alt="delivery" />
          <h2 className="font-poppins uppercase text-lg font-bold">
            24/7 CUSTOMER SERVICE
          </h2>
          <p className="text-sm font-poppins font-medium">
            Friendly 24/7 customer support
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img src="/icons/delivery.svg" alt="delivery" />
          <h2 className="font-poppins uppercase text-lg font-bold">
            MONEY BACK GUARANTEE
          </h2>
          <p className="text-sm font-poppins font-medium">
            We reurn money within 30 days
          </p>
        </div>
      </div>
    </div>
  )
}

export default Stats
