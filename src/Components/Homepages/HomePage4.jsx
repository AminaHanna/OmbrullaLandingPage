import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import img from "../../assets/bridge.828c5106_Z2mJkOa.jpg"

function HomePage4() {
  return (
    <>
    <div className="sm:mx-28 sm:my-10 flex mx-5 mb-5">
        <div className="sm:w-[550px] sm:mr-20 sm:block hidden">
            <img className='rounded-2xl' src={img} alt="" />
        </div>

        <div className="sm:w-[636px]">
            <p className='font-bold'><span className='text-blue-500 pr-5'><i class="fa-solid fa-square"></i></span>AI INFRASTRUCTURE INSPECTION</p>
            <h1 className='font-semibold text-4xl m-2'>Enhances Efficiency, Safety, and Cost-Effectiveness</h1>
            <p className='my-5 text-slate-500'>Ombrulla's AI Infrastructure Inspection utilizes AI drone inspections for real-time insights, transforming the way we inspect critical infrastructure. This AI inspection technology enhances efficiency, safety, and cost-effectiveness, all while ensuring longevity and reducing risks. By leveraging AI in Infrastructure, Ombrulla empowers better infrastructure management with increased reliability and responsiveness.</p>
            <p className='mx-2'>
                <li className='text-slate-500'>Precision: AI infrastructure solutions ensure accurate defect detection, minimizing oversight</li>
                <li className='text-slate-500'>Efficiency: Automating inspections with AI drone technology saves time and resources</li>
                <li className='text-slate-500'>Predictive Maintenance: AI-driven analysis predicts maintenance needs, preventing costly breakdowns.</li>
                <li className='text-slate-500'>Safety: AI inspections in infrastructure reduce manual work in hazardous areas, enhancing worker safety</li>
            </p>
            <div className="sm:text-xl flex gap-8 my-8">
                <button className='bg-blue-500 rounded-3xl px-5 py-2 sm:py-3 text-white hover:text-blue-500 hover:border hover:border-black hover:bg-transparent'>Schedule Call</button>
                <button className='hover:text-blue-500 flex'>Read more <span className='text-blue-500'><GoArrowUpRight /></span></button>
            </div>
        </div>

    </div>
    </>
  )
}

export default HomePage4
