"use client";
import React from 'react';

const OverView = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 bg-gray-100">
      <div className="p-4 border border-zinc-800">
        <h2 className='text-2xl font-extrabold p-2'>What you'll learn</h2>
        <ul className="grid grid-cols-2 gap-4 list-disc">
  <li className="flex"><p className="flex-grow bg-red-100 p-4">some text related to the course</p></li>
  <li className="flex"><p className="flex-grow bg-red-200 p-4">text</p></li>
</ul>


<ul className="grid grid-cols-2 gap-4 list-disc">
  <li className="flex"><p className="flex-grow bg-red-300 p-4">basics of the course</p></li>
  <li className="flex"><p className="flex-grow bg-red-400 p-4">some additional text</p></li>
</ul>

      </div>
      <div className="p-4 md:row-span-2 mx-0 border border-solid border-gray-800">
        <h2 className='text-2xl font-extrabold p-2'>Course content</h2>
        <ul className='list-disc'>
            <li><p className='p-4'>some text related to the course</p></li>
            <li><p className='p-4'>text</p></li>
            <li><p className='p-4'>basics of the course</p></li>
            <li><p className='p-4'>some additional text</p></li>
        </ul></div>
      <div className="p-4 border border-zinc-800">
        <h2 className='text-2xl font-extrabold p-2'>This course includes:</h2>
        <ul className="grid grid-cols-2 gap-4 list-disc">
  <li className="flex">
    <p className="p-4 flex-grow h-full w-full bg-red-100">
      some text related to the course
    </p>
  </li>
  <li className="flex">
    <p className="p-4 flex-grow h-full w-full bg-red-200">text</p>
  </li>
</ul>
<ul className="grid grid-cols-2 gap-4 list-disc">
  <li className="flex">
    <p className="p-4 flex-grow h-full w-full bg-red-300">
      basics of the course
    </p>
  </li>
  <li className="flex">
    <p className="p-4 flex-grow h-full w-full bg-red-400">
      some additional text
    </p>
  </li>
</ul>
<button className="absolute right-48 bottom-8 bg-purple-800 text-white px-8 py-4 rounded font-bold">
    Buy Now
  </button>

</div>
    </div>
  );
};

export default OverView;
