import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";

const SmMenu = () => {
  return (
    <div className="h-screen w-full lg:hidden bg-gray-50 flex flex-col justify-start items-center gap-y-5 pt-5">
         <Link to={"/"} className={`font-bold text-xl text-red1 `}>
            AY-SHOP
          </Link>
          <Link to={"/Singin"} className={`font-bold text-xl text-black hover:text-red1 `}>
            Sing in
          </Link>
          <Link to={"/"} className={`font-bold text-xl text-black hover:text-red1 `}>
            Sing up

          </Link>
          <div className='flex flex-col justify-start gap-y-3 items-center group'>
               <div className="flex justify-center items-center gap-x-2">
               <p className={`font-bold text-xl text-black cursor-pointer group-hover:text-red1 `}>
                  Products
               </p>
               <FaChevronDown className={`font-bold text-xl text-black cursor-pointer group-hover:text-red1  `} />
               </div>
               <div className=' flex-col justify-start  items-center hidden group-hover:flex'>
                 <a  href="#laptops " className="list-none font-bold text-xl text-black cursor-pointer hover:text-red1 ">laptops</a>
                 <a  href="#laptops " className="list-none font-bold text-xl text-black cursor-pointer hover:text-red1 ">laptops</a>
                 <a  href="#laptops " className="list-none font-bold text-xl text-black cursor-pointer hover:text-red1 ">laptops</a>

               </div>
               
            
          </div>

          <Link to={"/"} className={`font-bold text-xl text-black hover:text-red1 `}>
              About us
          </Link>
      </div>
  )
}

export default SmMenu
