import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import img1 from "../../assets/safetyr.6f7bac17_2OxpR.jpg"
import img2 from "../../assets/envsafety.45f1043e_Z8wyMD.jpg"

function HomePage6() {
  return (
    <>
    <div className="mx-5 sm:mx-28 sm:flex gap-5 my-10 justify-between grid">
        <div className="sm:w-[442px]">
            <p className='font-bold'><span className='text-blue-500 pr-5'><i class="fa-solid fa-square"></i></span>PRODUCTS</p>
            <h1 className='text-5xl font-semibold my-4'>Tracking Tools</h1>
            <p className='text-slate-500'>AI and IoT-enabled tracking tools enhance workplace safety by providing real-time monitoring of workers' movements and vital signs. Simultaneously, they contribute to environmental sustainability by optimizing energy usage, improving waste management, and promoting resource efficiency.</p>
        </div>

        <div className="sm:w-[400px] bg-slate-100 rounded-2xl p-6">
            <h1 className='text-lg font-semibold sm:text-2xl my-5'>RTLS - Workplace Safety</h1>
            <p className='text-slate-500'>IoT and AI integration improves workplace safety by continuously monitoring vital signs and locations in real-time for proactive hazard detection.</p>
            <img className='w-[180px] my-12 ml-10 sm:ml-16' src={img1} alt="Loading..." />
            <button className='hover:text-blue-500 flex my-5'>Book For Demo <span className='text-blue-500'><GoArrowUpRight /></span></button>
        </div>

        <div className="sm:w-[400px] bg-slate-100 rounded-2xl p-6">
            <h1 className='text-lg font-semibold sm:text-2xl my-5'>Environmental Sustainability</h1>
            <p className='text-slate-500'>AI and IoT enhance environmental sustainability by optimizing energy use, improving waste management, and promoting resource efficiency.</p>
            <img className='w-[180px] my-12 ml-10 sm:ml-16' src={img2} alt="Loading..." />
            <button className='hover:text-blue-500 flex my-5'>Book For Demo <span className='text-blue-500'><GoArrowUpRight /></span></button>
        </div>
    </div>
    </>
  )
}

export default HomePage6
