import React from 'react'

const AboutUs = () => {
  return (
    <div className='md:w-[90%] mx-auto flex flex-col gap-y-10 justify-between items-center bg-white rounded-lg px-2' id='aboutUs'>
         <div className='flex justify-start  items-start w-full rounded-lg gap-x-10'>
            <img src="https://i.pinimg.com/564x/3e/f1/64/3ef164e4f8a74a3007a58305c7afa8e5.jpg" alt="" className='md:w-[230px] rounded-lg md:h-[230px] '/>
            <div className='w-1/2 flex flex-col justify-start items-start gap-y-4 py-5 '>
                <h1 className='text-red1 text-xl font-bold font-fontAY2'>Who are we</h1>
            <h2 className='font-bold  font-fontAY2'>Our store provide a colمection of electronic products , Computers , Phones , Watches ..., you can buy trough this platform , at prices suitable for everyone</h2>
            <h2 className='font-fontAY2 font-bold'>We have serveral branches spread across <span className='text-red1 font-bold'>Algeria</span></h2>
            </div>
            
         </div>
         <div className='flex justify-end  items-start w-full rounded-lg gap-x-10 bg-gray-300'>
                   <div className='w-1/2 flex flex-col justify-start items-start gap-y-4 py-5 '>
                <h1 className='text-red1 text-xl font-bold font-fontAY2'>Our services</h1>
            <h2 className='font-bold  font-fontAY2'>We provide many services like selling electronic products , repairing phones and computers , and solving softwear problems</h2>
            <h2 className='font-fontAY2 font-bold'>We have serveral branches spread across <span className='text-red1 font-bold'>Algeria</span></h2>
            </div>
            <img src="https://i.pinimg.com/564x/3e/f1/64/3ef164e4f8a74a3007a58305c7afa8e5.jpg" alt="" className='md:w-[230px] rounded-lg md:h-[230px] '/>
     
         </div>
    </div>
  )
}

export default AboutUs
