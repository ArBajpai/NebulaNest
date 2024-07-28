// App.js
import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    question: "Do you provide ongoing CRO support after initial optimizations?",
    answer: "Yes, CRO is a continuous process and we offer ongoing support that includes regular testing, analysis, and further optimization steps."
  },
  {
    question: "What industries within the 'purpose-led' niche do you specialize in?",
    answer: "While we have extensive experience in various sectors, we are industry-agnostic. Our strategies are tailored to meet the unique goals and challenges of any purpose-led brand, regardless of industry."
  },
  {
    question: "How does your team stay updated with the latest CRO trends and technologies?",
    answer: "Our team regularly participates in industry conferences, webinars, and training sessions. We also conduct internal knowledge-sharing sessions to ensure we're always ahead of the curve."
  },
  {
    question: "Do you offer any performance guarantees?",
    answer: "We guarantee cost-effective solutions and at least one statistically significant winning test each month. Clients also typically see a 15% uplift in conversion rates within the first 90 days."
  },
  {
    question: "How do you measure and report the ROI of your CRO efforts?",
    answer: "We provide monthly performance reports that include key metrics like conversion rates, customer lifetime value, and ROI, broken down in an easy-to-understand format."
  },
  {
    question: "How flexible are your contracts? Can we opt for a trial period?",
    answer: "We offer a range of contract options to suit different needs, including short-term commitments and trial periods for you to evaluate our services."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-500 dark:to-green-500 text-gray-800 dark:text-gray-200 rounded-lg shadow-lg mb-40 mt-40">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-600 dark:text-black">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            <h2 className="text-lg font-semibold">{faq.question}</h2>
            <div>
              {openIndex === index ? <FiMinus className="text-blue-500" /> : <FiPlus className="text-blue-500" />}
            </div>
          </div>
          {openIndex === index && (
            <p className="mt-2 p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
