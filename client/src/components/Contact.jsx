import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='lg:w-full lg:flex lg:justify-around items-center py-5 bg-gray-200 'id='contactUs'>
       <card className=' flex flex-col justify-around items-center  lg:w-[300px] lg:h-[280px] lg:py-10 lg:border-8  lg:rounded-lg  border-green-600'>
       <h1 className='lg:text-2xl text-green-600 font-bold font-fontAY2'>Email</h1>

            <MdEmail className='lg:text-5xl text-green-600'/>
            <h1 className='lg:text-xl text-green-600 font-bold font-fontAY2'>Anteuryounes1@gmail.com</h1>
       </card >
       <card className=' flex flex-col justify-around items-center  lg:w-[300px] lg:h-[280px] lg:py-10 lg:border-8  lg:rounded-lg  border-green-600'>
       <h1 className='lg:text-2xl text-green-600 font-bold font-fontAY2'>Phone</h1>

            <FaPhoneAlt className='lg:text-5xl text-green-600'/>
            <h1 className='lg:text-xl text-green-600 font-bold font-fontAY2'>0656149785</h1>
       </card >


       <card className=' flex flex-col justify-around items-center  lg:w-[300px] lg:h-[280px] lg:py-10 lg:border-8  lg:rounded-lg  border-green-600'>
       <h1 className='lg:text-2xl text-green-600 font-bold font-fontAY2'>Address</h1>

            <GiPositionMarker className='lg:text-5xl text-green-600'/>
            <h1 className='lg:text-xl text-green-600 font-bold font-fontAY2'>EL-GUELTA </h1>
            <h1 className='lg:text-xl text-green-600 font-bold font-fontAY2'>CHLEF ALGERIA </h1>
       </card >

       <card className=' flex flex-col justify-around items-center  lg:w-[300px] lg:h-[280px] lg:py-10 lg:border-8  lg:rounded-lg  border-green-600'>
       <h1 className='lg:text-2xl text-green-600 font-bold font-fontAY2'>Facebook</h1>

            <FaFacebook className='lg:text-5xl text-green-600'/>
            <h1 className='lg:text-xl text-green-600 font-bold font-fontAY2'>AY-STORE </h1>
            
       </card >
       
    </div>
  )
}

export default Contact
