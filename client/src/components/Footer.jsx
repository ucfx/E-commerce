import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { TbDeviceWatch } from "react-icons/tb";
import { IoIosInformationCircle } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { BsCameraReelsFill } from "react-icons/bs";




const Footer = () => {
  return (
    <div className=' bg-gray-50 pt-6'>
    <div className='w-5/6 mx-auto flex justify-center items-center py-1 pb-3 font-bold font-fontAY text-red1 text-xl border-b-2 border-black'>AY-STORE</div>
   
      <div className='w-full lg:flex justify-around items-center py-1 '>
       <div className='flex flex-col justify-start items-start gap-y-4 py-2'>
             <div className='flex justify-start items-center gap-x-3 ' ><FaPhoneAlt className='lg:text-2xl font-fontAY2 text-red1'/> <h1 className='lg:text-lg font-fontAY2 '>0656149785</h1> </div >
             <div className='flex justify-start items-center gap-x-3 ' ><MdEmail className='lg:text-2xl font-fontAY2 text-red1'/> <h1 className='lg:text-lg font-fontAY2 '>Anteuryounes1@gmail.com</h1></div >
             <div className='flex justify-start items-center gap-x-3 '><GiPositionMarker className='lg:text-2xl font-fontAY2 text-red1'/> <h1 className='lg:text-lg font-fontAY2 '>EL-GUELTA CHLEF-ALGERIA</h1></div >
             <div className='flex justify-start items-center gap-x-3 '><FaFacebook className='lg:text-2xl font-fontAY2 text-red1'/> <h1 className='lg:text-lg font-fontAY2 '>AY-STORE</h1></div >
       </div>

       <div className='flex flex-col justify-start items-start gap-y-4 py-2'>
             <div className='flex justify-start items-center gap-x-3 ' ><FaLaptop className='lg:text-2xl font-fontAY2 text-red1'/> <h1 className='lg:text-lg font-fontAY2 '>Laptops</h1> </div >
             <div className='flex justify-start items-center gap-x-3 ' ><IoMdPhonePortrait className='lg:text-2xl font-fontAY2 text-red1'/> <h1 className='lg:text-lg font-fontAY2 '>Phones</h1></div >
             <div className='flex justify-start items-center gap-x-3 '><TbDeviceWatch className='lg:text-2xl font-fontAY2 text-red1'/> <h1 className='lg:text-lg font-fontAY2 '>Watches</h1></div >
             <div className='flex justify-start items-center gap-x-3 '><BsCameraReelsFill className='lg:text-2xl font-fontAY2 text-red1'/> <h1 className='lg:text-lg font-fontAY2 '>Cameras</h1></div >

       </div>

       <div className='flex flex-col justify-start items-start gap-y-4 py-2'>
             <div className='flex justify-start items-center gap-x-3 ' ><IoIosInformationCircle className='lg:text-2xl font-fontAY2 text-red1'/>  <h1 className='lg:text-lg font-fontAY2 '>Sing in</h1></div >
             <div className='flex justify-start items-center gap-x-3 '> <MdAccountCircle className='lg:text-2xl font-fontAY2 text-red1'/><h1 className='lg:text-lg font-fontAY2 '>Sing up</h1></div >
             <div className='flex justify-start items-center gap-x-3 '><MdAccountCircle className='lg:text-2xl font-fontAY2 text-red1'/> <h1 className='lg:text-lg font-fontAY2 '>About</h1></div >

       </div>
    </div>
    </div>
    
  )
}

export default Footer
