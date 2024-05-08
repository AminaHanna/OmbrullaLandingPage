import React from 'react'
import logo from "../../assets/petran-logo.99970d82_p9MFD.jpg"
import img from "../../assets/asset-performance-management-software.jpg"

function HomePage5() {
  return (
    <>
    <div className="bg-blue-600 flex flex-wrap px-5 sm:px-28 pt-10 sm:pt-28 pb-8 sm:pb-16">
      <div className="text-white sm:w-[600px]">
        <img className='w-[120px]' src={logo} alt="Loading..." />
        <p className=''>
          <span className='font-bold'>PE</span>rformance - <span className='font-bold'>TR</span>acking - <span className='font-bold'>AN</span>alytics
        </p>
        <h1 className='mt-5 text-4xl font-semibold'>AIoT Enabled Asset</h1>
        <h1 className='mt-2 text-4xl font-semibold'>Performance Management Software</h1>
        <p className='mt-8'>PETRAN offers an Asset Management software (APM) that harnesses the power of artificial intelligence and the Internet of Things (IoT) to empower data-driven decision-making and enable predictive maintenance and operational equipment effectiveness</p>
        <div className="sm:text-xl flex gap-2 sm:gap-8 my-8">
          <button className='rounded-3xl px-2 sm:px-5 sm:py-3 text-white hover:text-blue-500 border-white border hover:bg-white'>Schedule Call</button>
          <button className='px-5 py-3 rounded-full text-white border border-white'><i class="fa-solid fa-play"></i></button>
          <button className=''>Watch Video</button>
        </div>
      </div>

      <div className="flex items-center sm:w-[600px] m-auto">
        <img className='sm:w-[550px]' src={img} alt="" />
      </div>
    </div>
    <div className="bg-white h-[50px] -skew-y-3"></div>
    </>
  )
}

export default HomePage5
