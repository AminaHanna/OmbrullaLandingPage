import React from 'react'

function Footer() {
  return (
    <>
    <footer>
        <div className="grid mx-5 sm:flex justify-evenly py-20">

            <div className="sm:w-[260px] text-justify">
                <p className='text-white font-semibold text-2xl mt-5 pb-8'>About Us</p>
                <p className='text-slate-500'>Ombrulla is an AI-driven company providing specialized services like AI Visual Inspection, AI People Tracking, AI Defect Detection, AI Infrastructure Inspection, and AI Data Analytics. Our tailored solutions empower businesses with data-driven decisions, automation, and improved bottom lines. PETRAN, our cutting-edge tracking solution, utilizes AI and IoT to monitor assets, machinery, equipment, people, and facilities, enabling comprehensive performance management and environmental sustainability.</p>
            </div>

            <div className="sm:w-[260px]">
                <p className='text-white font-semibold text-xl sm:text-2xl mt-5 pb-8'>Our Services</p>
                <p className='mb-5 text-slate-500'>AI Infrastructure Inspection</p>
                <p className='mb-5 text-slate-500'>AI Visual Inspection</p>
                <p className='mb-5 text-slate-500'>AI Data Analytics</p>
                <p className='mb-5 text-slate-500'>AI People Tracking</p>
            </div>

            <div className="sm:w-[260px]">
                <p className='text-white font-semibold text-xl sm:text-2xl mt-5 pb-8'>Our Solutions</p>
                <p className='mb-5 text-slate-500'>Asset Performance Management</p>
                <p className='mb-5 text-slate-500'>RTLS - Workplace Safety</p>
                <p className='mb-5 text-slate-500'>Environmental Sustainability</p>
            </div>

            <div className="sm:w-[260px]">
                <p className='text-white font-semibold text-xl sm:text-2xl mt-5 pb-8'>Reach Us</p>
                <p className='text-slate-500'>United Kingdom,7 Bell Yard</p>
                <p className='text-slate-500'>London, WC2A 2JR</p>
                <p className='text-slate-500 mb-5'>+44 7879 993892</p>

                <p className='text-slate-500'>Germany, Schützenstraße 51A</p>
                <p className='text-slate-500'>Lübeck, 23558</p>
                <p className='text-slate-500 mb-5'>+49 179 512 5812</p>

                <p className='text-slate-500'>India, No. 154/20, Royal Space</p>
                <p className='text-slate-500'>Third Floor TI, HSR Layout,</p>
                <p className='text-slate-500'>Bangalore, Karnataka</p>
                <p className='text-slate-500'>560102</p>
                <p className='text-slate-500'>+91 85900 56435</p>
            </div>

        </div>

        <div className="text-white flex gap-5 justify-center pb-5">
            <p className='hover:text-slate-500 text-lg'><i class="fa-brands fa-facebook"></i></p>
            <p className='hover:text-slate-500 text-lg'><i class="fa-brands fa-instagram"></i></p>
            <p className='hover:text-slate-500 text-lg'><i class="fa-brands fa-twitter"></i></p>
            <p className='hover:text-slate-500 text-lg'><i class="fa-brands fa-linkedin"></i></p>
            <p className='hover:text-slate-500 text-lg'><i class="fa-brands fa-youtube"></i></p>
        </div>

    </footer>
    </>
  )
}

export default Footer
