"use client";
import React from 'react';
import { FaTwitter, FaYoutube, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 bg-gradient-to-br from-cyan-50 to-cyan-900">
      <div className="container mx-auto max-w-full flex justify-between bg-gradient-to-r from-emerald-200 to-emerald-950 p-24 w-full">
        <div className="flex items-center space-x-8">
          <FaTwitter className="text-blue-500 text-xl " size={30} />
          <FaYoutube className="text-red-500 text-xl" size={30}/>
          <FaInstagram className="text-pink-500 text-xl" size={30}/>
        </div>
        <h3 className="text-lg font-bold mb-2 text-white">Get in Touch</h3>
        <div>
          
          <div className="flex items-center space-x-8">
            <FaWhatsapp className="text-green-500 text-lg" size={30}/>
            <FaPhone className="text-gray-500 text-lg" size={30}/>
            <FaEnvelope className="text-gray-500 text-lg" size={30}/>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
      <nav>
        <ul className="flex justify-center space-x-8">
          <li className='p-4'>
            <a href="/about" className='font-bold text-white'>About Us</a>
          </li>
          <li className='p-4'>
            <a href="/features" className='font-bold text-white'>Features</a>
          </li>
          <li className='p-4'>
            <a href="/services" className='font-bold text-white'>Services</a>
          </li>
          <li className='p-4'>
            <a href="/contact" className='font-bold text-white'>Contact Us</a>
          </li>
        </ul>
      </nav>
        <p className="text-sm text-white p-2">© 2023 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;





