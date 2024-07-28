import React, { useEffect, useRef } from 'react';

const logos = [
    { name: 'The Economic Times', logo: 'https://growthschool.io/images/The_Economic_Times_logo-1.png' },
    { name: 'Mint', logo: 'https://growthschool.io/images/Mask-group-32.png' },
    { name: 'Financial Express', logo: 'https://growthschool.io/images/image-345-Traced.svg' },
    { name: 'Entrackr', logo: 'https://growthschool.io/images/Mask-group-7.png' },
    { name: 'Forbes', logo: 'https://growthschool.io/images/Vector-14.svg' },
];

const Featured = () => {
    return (
      <div className="min-h-screen ">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-darkGreen font-codecPro dark:text-white mb-4">
            Featured
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-32 mx-4 p-4 border border-gray-300 dark:border-green-800 rounded-lg bg-white dark:bg-light-green text-center shadow-lg"
              >
                <img src={logo.logo} alt={logo.name} className="h-full w-full object-contain" />
              </div>
            ))}
            {logos.map((logo, index) => (
              <div
                key={index + logos.length}
                className="flex-shrink-0 w-48 h-32 mx-4 p-4 border border-gray-300 dark:border-green-800 rounded-lg bg-white dark:bg-light-green text-center shadow-lg"
              >
                <img src={logo.logo} alt={logo.name} className="h-full w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 p-6">
<div className="text-center">
  <div className="mb-6">
    <div className="relative inline-block">
      <img
        src="https://via.placeholder.com/150" // Replace with the actual founder image URL
        alt="Founder"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
    </div>
  </div>
  <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
    Darsheel Savala
  </h1>
  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
    Founder, NebulaNest
  </p>
  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
    <p className="text-gray-700 dark:text-gray-300">
      Here you can write some information about the founder. This space
      can include the founder's background, vision, and achievements.
    </p>
  </div>
</div>
</div>
      </div>


    )
  }
  
  export default Featured;