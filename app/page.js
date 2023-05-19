import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'
import MainSec from '@/components/MainSec';
import Footer from '@/components/Footer';
import OverView from '@/components/OverView';



export default function Home() {
  const images = [
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  ];
  

  return (
    <>
      <div>
          <Navbar />
          <div className='flex'>
            <Carousel  images={images} />
            <Carousel  images={images} />
            <Carousel  images={images} />
          </div>
          <MainSec />
          <h2 className='font-bold text-2xl p-4 text-center bg-gray-300'>Enroll to one of our most affordable courses.</h2>
          <Carousel images={images}/>
          <h2 className='font-bold text-2xl p-4 text-center bg-slate-400'>Course Overview</h2>
          <OverView />
          <Footer />
      </div>
    </>
    
  )
}
