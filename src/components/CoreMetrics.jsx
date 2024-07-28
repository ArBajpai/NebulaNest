import React, { useState } from 'react'
import Charts from './Charts';

const items = [
    { title: 'Unlimited A/B Testing', content: 'Unlike other agencies that cap the number of A/B tests they run each month, we believe in continuous improvement. We will not rest until we find a winning strategy, validated by statistically significant data. No caps, no limits—just results.' },
    { title: 'Maximized ROI, Minimized Costs', content: 'Details about maximizing ROI...' },
    { title: 'Diverse Portfolio', content: 'Details about diverse portfolio...' },
    { title: 'Quick Wins: See Real Results Fast', content: 'Details about quick wins...' },
    { title: 'Seasoned Team of Experts', content: 'Details about seasoned team...' },
  ];
const CoreMetrics = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="font-codecPro  min-h-screen p-4 mt-6 py-6">
      <div className="text-center mb-10 my-6 ">
        <h1 className="text-3xl font-bold dark:text-white mb-6 text-darkGreen">We Don't Settle Till We Get You Wins</h1>
      </div>
      <div className="flex flex-wrap justify-between my-6">
        <div className="w-full md:w-1/2 p-4 space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-darkGreen text-white rounded-lg shadow-lg p-4"
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">{item.title}</span>
              </div>
              {activeIndex === index && (
                <div className="mt-2 p-4 bg-darkGreen text-white rounded-lg">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2" >
           
              {/* Replace with your chart component */}
                 <Charts/>
  
        </div>
      </div>
    </div>
  );
    
}

export default CoreMetrics;