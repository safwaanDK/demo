'use client';
import React from 'react'
import YouTube from 'react-youtube';


const MainSec = () => {
  const videoId = '2sEujkZ79E4';
  return (
    <div className="relative">
  <img className="w-full h-full" src="https://plus.unsplash.com/premium_photo-1682787494853-63e4dc03285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-[-15%]">
    <YouTube />
  </div>
  <button className="absolute bottom-40 right-80 bg-blue-500 text-white px-8 py-4 rounded font-bold">
    Buy Now
  </button>
</div>








  )
}

export default MainSec
