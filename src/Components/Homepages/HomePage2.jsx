import React from 'react'

function HomePage2() {
  return (
    <>
    <div className="flex justify-center bg-blue-100 m-6 sm:m-28 rounded-3xl">
        <div className="sm:w-[700px] m-5 sm:my-16">
            <p className='font-bold sm:text-lg'><span className='text-blue-500 pr-5'><i class="fa-solid fa-square"></i></span>Leader in AI visual inspection</p>
            <p className='font-semibold sm:text-6xl text-3xl mt-4'>Crafting Tomorrow's World with <span className='text-blue-500'>AI Excellence</span></p>
            <p className='mt-5 text-slate-500'>Leveraging AI, Ombrulla empowers clients with data-driven insights and automation, extracting valuable information from various sources like photos, videos, and data lakes. Our AI visual inspection system enables businesses to enhance their bottom line through precise defect detection and actionable insights.</p>
            <p className='flex gap-5'>
                <button className='bg-blue-500 my-5 px-5 py-3 rounded-full text-white hover:text-blue-500 hover:border hover:border-black hover:bg-transparent'><i class="fa-solid fa-play"></i></button>
                <button className='hover:text-blue-500 my-5'>Watch Corporate Video</button>
            </p>
        </div>
    </div>
    </>
  )
}

export default HomePage2
