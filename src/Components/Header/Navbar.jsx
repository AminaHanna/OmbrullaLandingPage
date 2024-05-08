import React, { useState } from 'react';
import img from "../../assets/logo-black-1.png"
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="pt-8">
        <div className="flex mx-6 my-5 sm:mx-28 sm:my-8 items-center justify-between h-16">
            {/* <div className="h-[100px] w-[150px]"> */}
                <img className='h-[40px]' src={img} alt="Loading..." />
            {/* </div> */}

          <div className="hidden md:block">
            <div className="sm:flex sm:gap-8">
                <Link to="/home"><p className='sm:font-bold sm:text-blue-500'>Home</p></Link>
                <Link to="/services"><p className='sm:font-bold'>Services <span className=''><i class="fa-solid fa-angle-down"></i></span></p></Link>
                <Link to="/product"><p className='sm:font-bold'>Product <span className=''><i class="fa-solid fa-angle-down"></i></span></p></Link>
                <Link to="/about"><p className='sm:font-bold'>About</p></Link>
                <Link to="/blog"><p className='sm:font-bold'>Blog</p></Link>
                <Link to="/contact"><p className='sm:font-bold'>Contact</p></Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <p className='text-xl text-blue-500'><i class="fa-solid fa-xmark"></i></p> : <p className='text-xl text-blue-500'><i class="fa-solid fa-bars"></i></p> }
            </button>
          </div>

        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute">
          <div className="pt-2 pb-3 sm:px-3">
            <div className="w-[250px] bg-white">
                {/* <div className=" bg-slate-400 p-10"> */}
                    {/* <img className='h-[40px]' src={img} alt="Loading..." /> */}
                {/* </div> */}
                <Link to="/home"><p className='sm:font-bold px-10 py-3 mx-2 border-b-2 border-slate-500'>Home</p></Link>
                <Link to="/services"><p className='sm:font-bold px-10 py-3 mx-2 border-b-2 border-slate-500 flex justify-between'>Services <span className='text-blue-500'><i class="fa-solid fa-circle-plus"></i></span></p></Link>
                <Link to="/product"><p className='sm:font-bold px-10 py-3 mx-2 border-b-2 border-slate-500 flex justify-between'>Product <span className='text-blue-500'><i class="fa-solid fa-circle-plus"></i></span></p></Link>
                <Link to="/about"><p className='sm:font-bold px-10 py-3 mx-2 border-b-2 border-slate-500'>About</p></Link>
                <Link to="/blog"><p className='sm:font-bold px-10 py-3 mx-2 border-b-2 border-slate-500'>Blog</p></Link>
                <Link to="/contact"><p className='sm:font-bold px-10 py-3 mx-2 border-b-2 border-slate-500'>Contact</p></Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;