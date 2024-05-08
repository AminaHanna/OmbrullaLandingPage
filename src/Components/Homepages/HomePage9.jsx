import React from 'react'
import img1 from "../../assets/unv.85d8fa6f_1oWCsP.jpg"
import img2 from "../../assets/dahua.d9dec1a0_1788pM.jpg"
import img3 from "../../assets/nvidia.8ba96db4_Z1BLchq.jpg"
import img4 from "../../assets/amazon.8aa611f6_Zkubpr.jpg"
import img5 from "../../assets/hikvision.2a55c6c2_Z1UqjJV.jpg"
import img6 from "../../assets/azure.3a96288f_ZDjkY6.jpg"


function HomePage9() {
  return (
    <>
    <div className="">
        <div className="my-16 flex flex-col items-center">
            <p className='flex items-center gap-8 font-bold'>
                <span className='text-blue-500 text-xs'><i class="fa-solid fa-square"></i></span>
                BRANDS WE WORK WITH
                <span className='text-blue-500 text-xs'><i class="fa-solid fa-square"></i></span>
            </p>
            <h1 className='font-semibold text-5xl mt-5'>Trusted by Thousands of Businesses</h1>
        </div>

        <div className="rounded-3xl border border-slate-200 w-fit m-auto">
            <div className="flex justify-center">
                <div className="bg-slate-100 hover:shadow-slate-500 hover:shadow-2xl border border-white hover:bg-white rounded-tl-3xl flex items-center justify-center w-[380px] h-[200px]">
                    <img className='w-36' src={img1} alt="Loading..." />
                </div>
                <div className= "bg-slate-100 hover:shadow-slate-500 hover:shadow-2xl border border-white hover:bg-white flex items-center justify-center w-[380px] h-[200px]">
                    <img className='w-36' src={img2} alt="Loading..." />
                </div>
                <div className="bg-slate-100 hover:shadow-slate-500 hover:shadow-2xl border border-white hover:bg-white rounded-tr-3xl flex items-center justify-center w-[380px] h-[200px]">
                    <img className='w-36' src={img3} alt="Loading..." />
                </div>
            </div>

            <div className="flex justify-center">
                <div className="bg-slate-100 hover:shadow-slate-500 hover:shadow-2xl border border-white hover:bg-white flex rounded-bl-3xl items-center justify-center w-[380px] h-[200px]">
                    <img className='w-36' src={img4} alt="Loading..." />
                </div>
                <div className="bg-slate-100 hover:shadow-slate-500 hover:shadow-2xl border border-white hover:bg-white flex items-center justify-center w-[380px] h-[200px]">
                    <img className='w-36' src={img5} alt="Loading..." />
                </div>
                <div className="bg-slate-100 hover:shadow-slate-500 hover:shadow-2xl border border-white hover:bg-white flex rounded-br-3xl items-center justify-center w-[380px] h-[200px]">
                    <img className='w-36' src={img6} alt="Loading..." />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HomePage9
