import React from 'react'
import img from "../../assets/ai-visual-inspection_banner.jpg"

function HomePage1() {
  return (
    <>
    <div className="mx-6 mb-16 sm:mb-2 sm:mx-28 flex flex-wrap justify-around bg-transparent">
        <div className="">
            <div className="text-6xl">
                <h1 className='font-bold'>Manual</h1>
                <h1 className='hidden sm:block font-bold'>
                    Inspection is
                </h1>
                <h1 className='hidden sm:block text-blue-500'>Slow& Error Prone</h1>
                <h1 className='sm:hidden'>Inspection</h1>
                <h1 className='sm:hidden'>is <span className='text-blue-500'>Slow&</span></h1>
                <h1 className='sm:hidden text-blue-500'>Error-Prone</h1>
            </div>

            <div className="sm:w-[650px] mt-5">
                <p className='text-lg sm:text-xl text-slate-500'>AI-powered visual inspection, leveraging computer vision, transforms manufacturing inspection procedures, boosting precision and cost-effectiveness while upholding product excellence. This AI inspection system defects with exceptional accuracy, optimizing the overall inspection process.</p>
            </div>

            <div className="sm:text-xl flex gap-8 my-8">
                <button className='bg-blue-500 rounded-3xl px-5 sm:py-3 text-white hover:text-blue-500 hover:border hover:border-black hover:bg-transparent'>Schedule Call</button>
                <button className='bg-blue-500 px-5 py-3 rounded-full text-white hover:text-blue-500 hover:border hover:border-black hover:bg-transparent'><i class="fa-solid fa-play"></i></button>
                <button className='hover:text-blue-500 sm:block hidden'>Watch Video</button>
            </div>
        </div>

        <div className="image">
            <div className="hidden sm:block sm:w-[500px] sm:h-[420px]"></div>
            <img className='sm:w-[500px] sm:h-[400px]' src={img} alt="Loading..." />
        </div>

    </div>
    </>
  )
}

export default HomePage1
