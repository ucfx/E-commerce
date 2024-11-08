import React from 'react'

const AllTypes = ({ products }) => {
    const Phones=products.filter((products)=>products.productType=='phone');
    console.log(Phones)

    const Laptops=products.filter((products)=>products.productType=='computer');
    console.log(Laptops)

    const Watches=products.filter((products)=>products.productType=='watch');
    console.log(Watches)

    const Cameras=products.filter((products)=>products.productType=='camera');
    console.log(Cameras)

  const phoneIndex=Math.floor(Math.random() * (Phones.length)) ;
  console.log(phoneIndex)

  const LaptopIndex=Math.floor(Math.random() * (Laptops.length)) ;
  console.log(phoneIndex)

  const WatchIndex=Math.floor(Math.random() * (Watches.length)) ;
  console.log(phoneIndex)

  const CameraIndex=Math.floor(Math.random() * (Cameras.length)) ;
    return (
        <div className='grid grid-rows-2 grid-cols-4 px-4 lg:w-[97%] mx-auto mt-4'>
             <div className="col-span-1 row-span-1 flex flex-col justify-between items-center py-4  gap-y-6 bg-green-50 rounded-tl-lg">
                 <img src={Laptops[LaptopIndex].imgUrl} className='lg:w-[100px] lg:h-[100px]' alt="" />
                 <h1 className='text-gray-800 text-xl font-bold font-fontAY2'>{Laptops[LaptopIndex].name} </h1>
             </div>
             <div className="col-span-1 row-span-1 flex flex-col justify-between items-center py-4  gap-y-6 bg-green-50 ">
                 <img src={Watches[WatchIndex].imgUrl} className='lg:w-[100px] lg:h-[100px]' alt="" />
                 <h1 className='text-gray-800 text-xl font-bold font-fontAY2'>{Watches[WatchIndex].name} </h1>
             </div>
             <div className="col-span-2 bg-gray-100 row-span-1 flex flex-row justify-start items-center py-4 px-4 gap-x-7  gap-y-6  rounded-tr-lg ">
                 <img src={Phones[phoneIndex].imgUrl} className='lg:w-[100px] lg:h-[100px]' alt="" />
                 <h1 className='text-gray-800 text-xl font-bold font-fontAY2'>{Phones[phoneIndex].name} </h1>
             </div>
             <div className="col-span-1 row-span-1 flex flex-col justify-between items-center py-4  gap-y-6 bg-green-50 rounded-bl-lg">
                 <img src={Phones[phoneIndex].imgUrl} className='lg:w-[100px] lg:h-[100px]' alt="" />
                 <h1 className='text-gray-800 text-xl font-bold font-fontAY2'>{Watches[WatchIndex].name} </h1>
             </div>
             <div className="col-span-1 row-span-1 flex flex-col justify-between items-center py-4  gap-y-6 bg-green-50 ">
                 <img src={Cameras[CameraIndex].imgUrl} className='lg:w-[100px] lg:h-[100px]' alt="" />
                 <h1 className='text-gray-800 text-xl font-bold font-fontAY2'>{Cameras[CameraIndex].name} </h1>
             </div>
             <div className="col-span-2 bg-gray-100 row-span-1 flex flex-row justify-start items-center py-4 px-4 gap-x-7  gap-y-6  rounded-br-lg">
                 <img src={Watches[WatchIndex].imgUrl} className='lg:w-[100px] lg:h-[100px]' alt="" />
                 <h1 className='text-gray-800 text-xl font-bold font-fontAY2'>{Watches[WatchIndex].name} </h1>
             </div>
        </div>
    );
}
export default AllTypes;
