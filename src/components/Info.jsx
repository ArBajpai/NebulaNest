// import React from 'react'
// import nebula from "../assets/nebu.jpg"
// const Info = () => {
//   return (
//     <div className='flex flex-col md:flex-row md:items-center justify-between py-5'>
//       <div className='mb-8 px-8 '>
//         <h1 className='text-6xl font-codecPro text-[#01444A] dark:text-[#FFFEF0] mb-2 mt-2 px-10 py-11'>Empowering Ambitions,<br />Fueling Ideas</h1>
//         <p className='text-3xl font-codecPro dark:text-[#FFFEF0] px-10'>Elevate Your Purpose with Proven CRO Strategies <br /> Tailored For Ethical Brands</p>
//         <button className=' bg-[#01444A] dark:bg-[#D7FFC2] dark: text-black font-codecPro py-4 px-6 rounded transition duration-300 ease-in-out dark:hover:bg-transparent dark:hover:text-white border-2  border-x-green-500 mt-5 ml-10'>Get a Free Site Review</button>
//       </div>

//       <div className='mb-6'>
//       <img src={nebula} className='h-[450px] w-[450px] rounded-full mr-40 ml-6 mt-8  '/>
//       </div>
//     </div>
//   )
// }

// export default Info;

import React from 'react';
import nebula from "../assets/nebu.jpg";

const Info = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-center justify-between py-5'>
      <div className='mb-8 px-4 md:px-8'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-codecPro text-[#01444A] dark:text-[#FFFEF0] mb-2 mt-2 px-4 md:px-10 py-4 md:py-11'>
          Empowering Ambitions,<br />Fueling Ideas
        </h1>
        <p className='text-xl sm:text-2xl md:text-3xl font-codecPro dark:text-[#FFFEF0] px-4 md:px-10'>
          Elevate Your Purpose with Proven CRO Strategies <br /> Tailored For Ethical Brands
        </p>
        <button className='bg-[#01444A] dark:bg-[#D7FFC2] dark:text-black font-codecPro py-3 md:py-4 px-4 md:px-6 rounded transition duration-300 ease-in-out dark:hover:bg-transparent dark:hover:text-white border-2 border-x-green-500 mt-5 ml-4 md:ml-10'>
          Get a Free Site Review
        </button>
      </div>

      <div className='flex justify-center mb-6 md:mr-40 md:ml-6 mt-8'>
        <img src={nebula} className='h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80 lg:h-[450px] lg:w-[450px] rounded-full' />
      </div>
    </div>
  );
}

export default Info;




