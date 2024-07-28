import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';

const BookCall = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  dark:bg-gray-900 p-4 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-4xl transition-colors duration-300">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">Let's Work Together</h1>
          <button className="mt-4 px-8 py-3 bg-gradient-to-r from-violet-400 to-violet-600 text-white rounded-full shadow-md hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300">Book a Call Now</button>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Make Your Impact Count</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-6">
            <AiOutlineCalendar className="text-4xl text-gray-500 dark:text-gray-400" />
            <span className="ml-3 text-2xl font-semibold text-gray-800 dark:text-gray-200">CRO Strategy Call</span>
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-center mb-10">
            <p>Hello there,</p>
            <p>Your Growth Partner, Darsheel here.</p>
            <p>I will share the top blockers on your site which...</p>
          </div>
        </div>
        <div className="my-10">
          <Calendar
            onChange={setDate}
            value={date}
            className="mx-auto border-0 rounded-xl shadow-md dark:bg-gray-700 dark:text-gray-200"
          />
        </div>
        <div className="mt-6 text-center">
          <BiTime className="inline text-3xl text-gray-500 dark:text-gray-400" />
          <span className="ml-2 text-xl text-gray-700 dark:text-gray-300">30 min</span>
        </div>
      </div>
    </div>
  );
};

export default BookCall;
