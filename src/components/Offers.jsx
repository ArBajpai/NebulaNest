import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
const Offers = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex flex-col items-center justify-center p-6">
    <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8">
      <div className="bg-gradient-to-b from-green-400 to-green-600 p-8 rounded-lg flex flex-col justify-between shadow-lg">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">ChatGPT Workshop Launch Offer (Save 1,700)</h1>
          <div className="flex items-baseline mb-6">
            <span className="text-5xl font-extrabold">₹299</span>
            <span className="text-xl line-through ml-4">₹999</span>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start"><FaCheckCircle className="text-green-600 text-xl mr-3 mt-1"/> <p>Enroll now and unlock bonuses worth ₹25,000 absolutely free. There has never been a better opportunity to seize this course.</p></li>
            <li className="flex items-start"><FaCheckCircle className="text-green-600 text-xl mr-3 mt-1"/> <p>Take advantage of the discounted price of ₹299 and save a total of ₹1,700</p></li>
            <li className="flex items-start"><FaCheckCircle className="text-green-600 text-xl mr-3 mt-1"/> <p>The launch offer expires on midnight of: May 14, 2024</p></li>
          </ul>
        </div>
        <button className="mt-8 bg-green-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300">Enroll Now</button>
        <p className="text-xs mt-4 opacity-80">Note: No exceptions will be made beyond the offer expiry date. Prices will increase and no free bonuses will be available.</p>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">What you get</h2>
          <ul className="space-y-4">
            <li className="flex items-start"><FaCheckCircle className="text-green-600 text-3xl mr-3 mt-1"/> <p>Mastering ChatGPT Data Analysis: A Comprehensive Guide to Gaining Advanced Insights</p></li>
            <li className="flex items-start"><FaCheckCircle className="text-green-600 text-xl mr-3 mt-1"/> <p>A resilient ChatGPT expert's toolkit</p></li>
            <li className="flex items-start"><FaCheckCircle className="text-green-600 text-4xl mr-3 mt-1"/> <p>Revolutionizing Content Production with AI: Uncovering Faster, More Intelligent Creation Techniques</p></li>
            <li className="flex items-start"><FaCheckCircle className="text-green-600 text-xl mr-3 mt-1"/> <p>The rising demand for ChatGPT specialists, salary ranges & career paths</p></li>
            <li className="flex items-start"><FaCheckCircle className="text-green-600 text-xl mr-3 mt-1"/> <p>Enhance Your Presentations and Excel Skills with AI: Discover How It Can Streamline Your PowerPoint and Excel Tasks</p></li>
            <li className="flex items-start"><FaCheckCircle className="text-green-600 text-xl mr-3 mt-1"/> <p>The future of ChatGPT: A deep dive into mind-bending AI tools</p></li>
          </ul>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Amazing bonuses included...</h2>
          <ul className="space-y-4">
            <li className="flex items-start"><FaCheckCircle className="text-green-600 text-xl mr-3 mt-1"/> <p>50+ ready-to-use prompts</p></li>
            <li className="flex items-start"><FaCheckCircle className="text-green-600 text-xl mr-3 mt-1"/> <p>Free group Q&A session with Vaibhav</p></li>
            <li className="flex items-start"><FaCheckCircle className="text-green-600 text-xl mr-3 mt-1"/> <p>Transform the way you approach your work with our ChatGPT workshop. Enroll today and unlock AI potential!</p></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Offers;