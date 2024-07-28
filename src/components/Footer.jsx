// src/components/Footer.jsx

import React from 'react';
import nebulalogo from "../assets/nebulalogo.png"
const Footer = () => {
  return (
    <footer className="bg-lightGreen text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Left Section */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-xl font-semibold mb-2 text-darkGreen">Best kept secrets ✨</h2>
            <p className="mb-4 text-darkGreen">Be the first to find out about the newest programs, workshops, and community activities - plus industry news, articles, and special reports. All delivered to your inbox!</p>
            <div className="flex items-center">
              <input type="email" placeholder="Enter your email" className="p-2 rounded-l bg-white text-black" />
              <button className="p-2 rounded-r bg-green-500 text-white hover:bg-green-600 transition-all">Subscribe</button>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-2/3 flex justify-between">
            <div className="mb-6 lg:mb-0 ml-10">
              <h3 className="text-lg font-semibold mb-2 text-darkGreen">Industries</h3>
              <ul>
                <li className='text-darkGreen'>Marketing</li>
                <li className='text-darkGreen' >Generative AI</li>
                <li className='text-darkGreen'>Product</li>
                <li className='text-darkGreen'>Design</li>
                <li className='text-darkGreen'>Business</li>
                <li className='text-darkGreen'>Tech & Data</li>
              </ul>
            </div>
            <div className="mb-6 lg:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-darkGreen">Roles</h3>
              <ul>
                <li className='text-darkGreen'>Personal Growth</li>
                <li className='text-darkGreen'>Founders</li>
              </ul>
            </div>
            <div className="mb-6 lg:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-darkGreen">Engage</h3>
              <ul>
                <li className='text-darkGreen'>Upskill your Team</li>
                <li className='text-darkGreen'>Learner's Center</li>
                <li className='text-darkGreen'>Newsletter Vault</li>
                <li className='text-darkGreen'>Apply as Mentor</li>
                <li className='text-darkGreen'>Free Courses</li>
                <li className='text-darkGreen'>Topics</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-darkGreen">Company</h3>
              <ul>
                <li className='text-darkGreen'>About Us</li>
                <li className='text-darkGreen'>Careers</li>
                <li className='text-darkGreen'>Contact Us</li>
                <li className='text-darkGreen'>Refund Policy</li>
                <li className='text-darkGreen'>Terms & Conditions</li>
                <li className='text-darkGreen'>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media & Logo */}
        <div className="flex justify-between items-center mt-8">
          <div className="flex space-x-4">
            <a href="#"><i className="fab fa-facebook-f text-darkGreen text-3xl"></i></a>
            <a href="#"><i className="fab fa-twitter text-darkGreen text-3xl"></i></a>
            <a href="#"><i className="fab fa-instagram text-darkGreen text-3xl"></i></a>
            <a href="#"><i className="fab fa-linkedin-in text-darkGreen text-3xl"></i></a>
          </div>
          <div>
            <img src={nebulalogo} alt="NebulaNest Logo" className="h-10" />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm text-darkGreen">
          © 2024 NebulaNest Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
