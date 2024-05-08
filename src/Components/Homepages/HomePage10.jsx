import { Avatar } from '@mui/material'
import React from 'react'
import img1 from "../../assets/AI-Visual-Inspection-in-Maritime-Industry.png"
import img2 from "../../assets/Use-Case-of-AI-Visual-Inspection.png"
import img3 from "../../assets/ai-visual-inspection-in-quality-control.png"

function HomePage10() {
  return (
    <>
    <div className="mx-8 sm:mx-28 my-14">
        <div className="flex flex-col items-center border-b-2">
            <p className='flex items-center gap-8 font-bold'>
                <span className='text-blue-500 text-xs'><i class="fa-solid fa-square"></i></span>
                AI INSIGHTS
                <span className='text-blue-500 text-xs'><i class="fa-solid fa-square"></i></span>
            </p>
            <h1 className='text-3xl sm:text-5xl my-5 sm:pb-5 font-semibold'>To Read</h1>
        </div>

        <div className="sm:pt-10 flex flex-wrap justify-between">

            <div className="sm:w-[362px]">
                <img className='my-6 rounded-lg' src={img1} alt="" />
                <h3 className='font-semibold text-xl'>Transforming Maritime Inspections with AI Visual Inspection</h3>
                <p className='text-lg text-slate-500 mt-5'>Explore how pioneering AI-driven inspections in the maritime industry re revolutioning asset monitoring with improved...</p>
                <div className="flex gap-3 mt-10 pb-10">
                    <Avatar/>
                    <p>
                        <p className='font-medium'>Zara Elizabeth</p>
                        <p className='text-slate-500'>April 29, 2024 . 6 min read</p>
                    </p>
                </div>
            </div>

            <div className="sm:w-[362px]">
                <img className='my-6 rounded-lg' src={img2} alt="" />
                <h3 className='font-semibold text-xl'>AI Visual Inspection &#038; its Use Cases</h3>
                <p className='text-lg text-slate-500 mt-5'>AI-based visual inspection utilizes artificial intelligence algorithms to analyze visual data, enabling automated detect...</p>
                <div className="flex gap-3 mt:10 sm:mt-16 pb-10">
                    <Avatar/>
                    <p>
                        <p className='font-medium'>Zara Elizabeth</p>
                        <p className='text-slate-500'>April 5, 2024 . 7 min read</p>
                    </p>
                </div>
            </div>

            <div className="sm:w-[362px]">
                <img className='my-6 rounded-lg' src={img3} alt="" />
                <h3 className='font-semibold text-xl'>How to include AI Visual Inspection into your quality control process</h3>
                <p className='text-lg text-slate-500 mt-5'>AI visual inspection in manufacturing surges efficiency and accuracy, detecting defects to optimize resources and contin...</p>
                <div className="flex gap-3 mt-10 pb-10">
                    <Avatar/>
                    <p>
                        <p className='font-medium'>Zara Elizabeth</p>
                        <p className='text-slate-500'>April 27, 2024 . 10 min read</p>
                    </p>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default HomePage10
