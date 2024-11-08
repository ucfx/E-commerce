import React from 'react'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
const Cameras = ({products}) => {
    const [index,setIndex]=useState(0);
    const camera=products.filter((product)=>product.productType=='camera')
    const {user,dispatch}=useContext(AuthContext)


    const next=()=>{
        setIndex((index+1)%camera.length)
    }
    const previous=()=>{
      if(index==0){
        setIndex(camera.length-1)
      }
      else{
        setIndex((index-1)%camera.length)
      }
    }
    
  return (
    <div className="hidden lg:flex justify-between items-center px-2 py-9 mt-5 w-[97%] mx-auto border-2  border-gray-600 rounded-lg">
    <div className="flex justify-start items-center gap-x-7">
      <GrPrevious onClick={previous} className="text-2xl text-gray-700 cursor-pointer" />
      <div className="flex justify-start items-center gap-x-5 ">
            <img src={camera[index].imgUrl} className="w-[200px] h-[200px]" alt="" />
            <div className="flex flex-col justify-start items-start gap-y-7">
              <div className="flex flex-col justify-start items-start gap-y-2">
              <h1 className="text-2xl font-bold font-fontAY2 text-black">{camera[index].name}</h1>
               <h1 className="text-md font-bold font-fontAY2 text-gray-600">{camera[index].description}</h1>
             
              </div>
                <div className="flex justify-start items-center gap-x-6">
                  <h1 className="text-2xl font-bold font-fontAY2 text-red1">{camera[index].price}<span>$</span> </h1>
                  <Link to={`${user ?'/Buy':'/Singin'}`} className="font-bold font-fontAY2 text-lg rounded-lg text-gray-600 border border-gray-600 px-2 py-2 hover:bg-gray-600 hover:text-white">Buy Now</Link>
                  </div>
            </div>
      </div>
    </div>
    <GrNext className="text-2xl text-gray-700 cursor-pointer" onClick={next} />
  </div>
  )
}

export default Cameras
