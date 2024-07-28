import React from 'react';

const WhoWeServe = () => {
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <h2 className="text-center text-3xl font-bold mb-6 text-[#01444A] dark:text-white">Who We Serve</h2>
        <p className="text-center mb-10 text-[#01444A] dark:text-white">
          For Purpose-Led Brands Facing the Squeeze of Rising CPA's & CPC, Economic Instability, and Diminishing Conversion Rates...
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#01444A] dark:bg-[#D7FFC2] text-white dark:text-black rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-white dark:bg-green-900 rounded-full flex items-center justify-center">
                <i className="fas fa-user-tie text-green-900 dark:text-green-100"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 dark:text-[#01444A]">Purpose-Driven CEOs, CMOs, and Founders</h3>
            <p>
              If you’re committed to scaling impact fully while maintaining a profitable bottom line, we can help you scale.
            </p>
          </div>
          <div className="bg-[#01444A] dark:bg-[#D7FFC2] text-white dark:text-black rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-white dark:bg-green-900 rounded-full flex items-center justify-center">
                <i className="fas fa-comments text-green-900 dark:text-green-100"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 dark:text-[#01444A]">Marketers & Agencies Focused on Social Good</h3>
            <p>
              Want to ensure your clients not only get a better ROI but also make a meaningful difference? Partner with us for conversion strategies that align with your values.
            </p>
          </div>
          <div className="bg-[#01444A] dark:bg-[#D7FFC2] text-white dark:text-black rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-white dark:bg-green-900 rounded-full flex items-center justify-center">
                <i className="fas fa-shopping-cart text-green-900 dark:text-green-100"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 dark:text-[#01444A]">Businesses with Products for Social Betterment</h3>
            <p>
              If your offerings are meant to create a positive societal impact, we'll make sure your online conversions reflect your offline intentions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;
