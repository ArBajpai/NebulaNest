// import React from 'react';
// import logo from "../assets/nike.jpg";
// const TestimonialSection = () => {
//   return (
//     <div className="bg-[#01444A] dark:bg-[#D7FFC2] text-black p-8 rounded-lg">
//       <div className="flex justify-around">
//         <div className="text-center">
//           <h2 className="text-4xl font-CodecPro text-white dark:text-black">10x</h2>
//           <p className='text-white dark:text-black'>Average ROI After 6 Months</p>
//         </div>
//         <div className="text-center">
//           <h2 className="text-4xl font-CodecPro text-white dark:text-black">1200+</h2>
//           <p className='text-white dark:text-black'>A/B tests Concluded</p>
//         </div>
//         <div className="text-center">
//           <h2 className="text-4xl font-CodecPro text-white dark:text-black">20%+</h2>
//           <p className='text-white dark:text-black'>CVR Uplift in first 90 days</p>
//         </div>
//         <div className="text-center">
//           <h2 className="text-4xl font-CodecPro text-white dark:text-black">40%</h2>
//           <p className='text-white dark:text-black'>Average Win Rate</p>
//         </div>
//         <div className="text-center">
//           <h2 className="text-4xl font-CodecPro text-white dark:text-black">70+</h2>
//           <p className='text-white dark:text-black'>Clients Managed</p>
//         </div>
//       </div>
//       <div className="bg-white text-black p-8 mt-8 rounded-lg flex items-center rounded-lg">
//         <div className="mr-4 w-25 h-25  rounded-full ">
//         <img src={logo}/>
//         </div>
//         <div className='ml-5'>
//           <p className="text-black-800 mb-1 mt-4 font-bold text-2xl ">William Winston</p>
//           <h3 className="text-xl font-CodecPro">COO</h3>
//           <h4 className="font-CodecPro">Nike</h4>
//           <p className="mt-4">
//             <span className="font-CodecPro">That was the best decision we made this year.</span> Nebula Nest is, by far, our best and <span className="font-bold">most trusted partner.</span> Thanks to them, our <span className="font-bold">sales have increased by 140% (more than doubled)</span> in the days during and after Black Friday 2023, and up until today (mid-December 2023).
//           </p>
//           <p className="mt-4">
//             <span className="font-CodecPro">Their A/B Tests are infallible</span> and by following the results, we could improve our customers’ user experience on our website with extreme precision.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSection;

import React from 'react';
import logo from "../assets/nike.jpg";

const TestimonialSection = () => {
  return (
    <div className="bg-[#01444A] dark:bg-[#D7FFC2] text-black p-8 rounded-lg">
      <div className="flex flex-col md:flex-row justify-around">
        <div className="text-center mb-4 md:mb-0">
          <h2 className="text-4xl font-CodecPro text-white dark:text-black">10x</h2>
          <p className='text-white dark:text-black'>Average ROI After 6 Months</p>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <h2 className="text-4xl font-CodecPro text-white dark:text-black">1200+</h2>
          <p className='text-white dark:text-black'>A/B tests Concluded</p>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <h2 className="text-4xl font-CodecPro text-white dark:text-black">20%+</h2>
          <p className='text-white dark:text-black'>CVR Uplift in first 90 days</p>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <h2 className="text-4xl font-CodecPro text-white dark:text-black">40%</h2>
          <p className='text-white dark:text-black'>Average Win Rate</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-CodecPro text-white dark:text-black">70+</h2>
          <p className='text-white dark:text-black'>Clients Managed</p>
        </div>
      </div>
      <div className="bg-white text-black p-8 mt-8 rounded-lg flex flex-col md:flex-row items-center">
        <div className="mr-0 md:mr-4 w-20 h-20 rounded-full flex-shrink-0">
          <img src={logo} className="rounded-full object-cover" />
        </div>
        <div className='ml-0 md:ml-5 mt-4 md:mt-0'>
          <p className="text-black-800 mb-1 font-bold text-2xl">William Winston</p>
          <h3 className="text-xl font-CodecPro">COO</h3>
          <h4 className="font-CodecPro">Nike</h4>
          <p className="mt-4">
            <span className="font-CodecPro">That was the best decision we made this year.</span> Nebula Nest is, by far, our best and <span className="font-bold">most trusted partner.</span> Thanks to them, our <span className="font-bold">sales have increased by 140% (more than doubled)</span> in the days during and after Black Friday 2023, and up until today (mid-December 2023).
          </p>
          <p className="mt-4">
            <span className="font-CodecPro">Their A/B Tests are infallible</span> and by following the results, we could improve our customers’ user experience on our website with extreme precision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
