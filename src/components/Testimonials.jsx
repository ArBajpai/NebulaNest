// src/components/Testimonials.jsx
import React from 'react';
import { FaQuoteLeft, FaUserCircle } from 'react-icons/fa';

const testimonials = [
  {
    text: "Loved the audit. Very well done. Excited to go through everything this week.",
    author: "User 1",
    role: "CEO, Company A",
    time: "10:30 AM",
  },
  {
    text: "Very happy to see the increase of sales, and very interesting to see green doing better!",
    author: "User 2",
    role: "CTO, Company B",
    time: "3:05 PM",
  },
  {
    text: "The overall feedback looks awesome and thank you for including the competitors. For the site speed, would it be best to choose a different pop up to increase speed in the future?",
    author: "User 3",
    role: "Manager, Company C",
    time: "4:30 PM",
  },
  {
    text: "Thanks for that - it was extremely insightful. I will send on the deck to the relevant people immediately and get the stuff from our side that needs to be actioned done asap.",
    author: "User 4",
    role: "Analyst, Company D",
    time: "4:15 PM",
  },
  {
    text: "Hey.. Audit 2.0 was some quite useful information, how to make user experience better.",
    author: "User 5",
    role: "Consultant, Company E",
    time: "8:32 AM",
  },
  {
    text: "Thanks! Noticing a few easy fixes to the site based on the insights you shared!",
    author: "User 6",
    role: "Developer, Company F",
    time: "8:19 PM",
  },
];

const Testimonials = () => {
  return (
    <div className="p-10 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition duration-500">
      <h1 className="text-4xl font-bold text-center mb-4">Your Success, Our Commitment</h1>
      <p className="text-center mb-10 text-lg">Not Just Us, Everyone Says It!</p>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-green-500 mb-4" size="2em" />
            <p className="text-lg mb-4">{testimonial.text}</p>
            <div className="flex items-center">
              <FaUserCircle className="text-gray-500 dark:text-gray-400 mr-2" size="1.5em" />
              <div>
                <p className="text-md font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
