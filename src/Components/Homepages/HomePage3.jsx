import React from 'react'
import img from "../../assets/ai-food2.7e761c87_TNwbv.jpg"
import { GoArrowUpRight } from "react-icons/go";

function HomePage3() {
  return (
    <>
    <div className="sm:mx-28 sm:my-10 flex mx-5 mb-5">
        <div className="sm:w-[636px]">
            <p className='font-bold'><span className='text-blue-500 pr-5'><i class="fa-solid fa-square"></i></span>AI VISUAL INSPECTION</p>
            <h1 className='font-semibold text-4xl m-2'>Enhancing quality through AI-based visual inspection</h1>
            <p className='my-5 text-slate-500'>Ombrulla transforms quality control across manufacturing and various sectors through its AI-driven defect detection system, replacing traditional visual inspection. This AI visual inspection not only eradicates human errors and delays but also elevates precision, culminating in a streamlined and accurate quality control process.</p>
            <p className='mx-2'>
                <li className='text-slate-500'>AI visual inspection ensures consistent performance with unmatched accuracy</li>
                <li className='text-slate-500'>It boosts throughput and cuts down on labour expenses</li>
                <li className='text-slate-500'>By minimizing recalls and rework, AI inspection enhances brand reputation</li>
                <li className='text-slate-500'>Real-time data and analytics enable scalability in AI-based visual inspection</li>
            </p>
            <div className="sm:text-xl flex gap-8 my-8">
                <button className='bg-blue-500 rounded-3xl px-5 py-2 sm:py-3 text-white hover:text-blue-500 hover:border hover:border-black hover:bg-transparent'>Schedule Call</button>
                <button className='hover:text-blue-500 flex'>Read more <span className='text-blue-500'><GoArrowUpRight /></span></button>
            </div>
        </div>

        <div className="sm:w-[550px] sm:ml-20 sm:block hidden">
            <img className='rounded-2xl' src={img} alt="" />
        </div>
    </div>
    </>
  )
}

export default HomePage3
