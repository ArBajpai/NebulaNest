import React, { useState } from 'react'
import ThemeSwitch from './themeSwitch';
import nebulalogo from "../assets/nebulalogo.png"
const links = ["Service","Clients","Why Us","About Us", "FAQs"];
const Navbar = () => {
  const [selected, setSelected] = useState(0)
  return (
    <div className='w-full flex items-center justify-between py-6'>
      <div className='flex items-center gap-2 cursor-pointer'>
<img src={nebulalogo} className='h-20 dark:text-white' />
      </div>


    <div className='hidden md:flex items-center gap-4'>
      {
        links.map((link,index)=>{
          return (
          <div key={index} className={`${index=== selected ? "bg-black dark:bg-slate-800 text-white":"text-gray-700 dark:text-gray-500"} px-6 py-2 rounded-full`} onClick={()=> setSelected(index)}>
            <a href="#">{link}</a>
          </div>
          )
        })}


    </div>
      

    <div className='flex items-center gap-10 2xl:gap-20'>
      <ThemeSwitch/>
    <div className='flex items-center gap-2'>
      <div className='hidden md:block'>
      <button className="mt-4 px-8 py-3 bg-gradient-to-r from-violet-400 to-violet-600 text-white rounded-full shadow-md hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300">Book a Call Now</button>
      </div>
    </div>

    </div>  
    </div>
  )
}

export default Navbar;