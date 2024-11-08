import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../Context/UserAccountContext";
import Logo2 from "../assets/img/logo2.png";
import { FaPlus } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineNotifications } from "react-icons/md";
import { AuthContext } from "../Context/AuthContext";
import products from '../assets/img/products.png' 
import { BsGraphDownArrow } from "react-icons/bs";


export const UserAccount = () => {
  const { AccountView, AccountDispatch } = useContext(AccountContext);
   const [item,setItem]=useState(1)
   
    const date= new Date();

    const dayName= date.getDay();
    const day= date.getDate();
    const month= date.getMonth()+1;
    const year= date.getFullYear(); 
    const [Name,setName]=useState('')
    
   const {user,Dispatch}=useContext(AuthContext)

  useEffect(()=>{
    switch(dayName){
        
        case 1:
            console.log(dayName)
           setName('Sunday')
            break;
            case 2:
                console.log(dayName)
               setName('Monday')
            break
            case 3:

            console.log(dayName)
               setName('Tuesday');
            break
            case 4:
                console.log(dayName)
               setName('Wednesday');
            break
            case 5:
                console.log(dayName)
               setName('Thursday');
            break
            case 6:
                console.log(dayName)
               setName('Friday');
            break
            case 7:
                console.log(dayName)
               setName('Saturday');
            break
    }
    console.log(dayName)},[dayName])
   
  return (
    <div className="flex justify-start items-start">
      <div className="h-screen pt-4 w-1/6 rounded-br-lg rounded-tr-lg  flex flex-col justify-start items-center gap-y-5 ">
        <div className="flex justify-start items-center mx-auto">
          <img src={Logo2} className="h-[60px] w-[60px] " alt="" />
          <p
            to={"/"}
           
            className="font-fontAY2 font-bold text-lg  text-blue-800 "
          >
            {" "}
            AY-<span className="text-orange-700">STORE</span>
          </p>
        </div>
        <div className="w-3/4 mx-auto flex justify-center  items-center gap-x-3">
            <div className="flex flex-col justify-start items-start font-semibold text-violet-800">
                <p>Make New</p>
                <p>Purchase</p>
            </div>
             <div className=" cursor-pointer bg-violet-800 rounded-full px-3 py-3 flex flex-col justify-center items-center">
                <FaPlus className="text-white" />
             </div>
        </div>
        <div className="mt-5 w-full  font-semibold flex flex-col justify-start items-centerb gap-y-4">
              <div onClick={()=>{setItem(1)}}className={`flex cursor-pointer justify-start gap-x-5 items-center w-2/3 mx-auto ${item==1 ?'text-black':'text-gray-500'}`}>
                <MdOutlineDashboard/>
                 <p>Dashboard</p></div>
              <div onClick={()=>{setItem(2)}}className={`flex cursor-pointer justify-start gap-x-5 items-center w-2/3 mx-auto ${item==2 ?'text-black':'text-gray-500'}`}>
                <BiSolidPurchaseTag/>

                <p>New purchase</p>
              </div>

              <div onClick={()=>{setItem(3)}}className={`flex cursor-pointer justify-start gap-x-5 items-center w-2/3 mx-auto ${item==3 ?'text-black':'text-gray-500'}`}>
                <FaHistory/>
                <p> history</p>
              </div>

              <div onClick={()=>{setItem(4)}}className={`flex cursor-pointer justify-start gap-x-5 items-center w-2/3 mx-auto ${item==4 ?'text-black':'text-gray-500'}`}>
              <FaCartPlus/>
                <p>Cart</p>
              </div>
              <div  onClick={()=>{setItem(5)}}className={`flex cursor-pointer justify-start gap-x-5 items-center w-2/3 mx-auto ${item==5 ?'text-black':'text-gray-500'}`}>
                 <FaUserEdit/>
                <p>Edit</p>
              </div>

             
             
            
             
        </div>
        <div className="flex flex-col justify-start items-center w-full gap-y-2">
            <div className="flex flex-col justify-center items-center w-full">
            <FaComputer className="text-violet-800 text-7xl"/>
            <p className="text-sm text-gray-500 w-2/3 flex flex-col justify-start items-center">
                <p>Brows more prooduct </p>
                <p>Make purchases </p>
                <p>we discount  </p>
            </p>
            </div>
            <button className="rounded-lg teext-white px-2 py-1 text-white font-semibold bg-violet-800">
                New purchase 
            </button>
        </div>
      </div>
      <div className="pt-2 px-10  w-5/6">
         <div className="flex justify-between items-center w-full pb-10">
            <div className="flex-col justify-start items-start gap-y-2">
                <p className="font-bold text-xl">Dashboard</p>
                <p className="text-gray-400 font-semibold"><span className="text-violet-800 font-semibold mr-[0.5px]">{Name}/</span>{day}/{month}/{year}</p>
            </div>
            <div className="flex justify-start items-center gap-x-7 px-2">
                <MdOutlineEmail className="text-violet-800 text-2xl"/>
                <MdOutlineNotifications  className="text-violet-800 text-2xl"/>
                <div className="flex justify-start  items-center gap-x-2 ">
                    <div className="px-1 py-1 flex flex-col justify-center items-center bg-violet-200 rounded-lg">
                        <p className="font-semibold text-violet-800">AY</p>
                    </div>
                    <p className="font-semibold text-violet-800">AY-STORE</p>
                </div>

            </div>
         </div>
         <div className="w-full py-[50px] px-4 rounded-xl bg-gray-200 relative">
            <p className="font-bold text-3xl mb-1">Hi ,{user.name}</p>
            <img src={products} alt="" className=" absolute top-[-30px] right-[130px] w-[220px] h-[220px]" />
            <p className="text-gray-600 text-sm font-semibold">Ready to start your day with new purchase from our store</p>
         </div>
         <p className="text-gray-500 font-semibold  text-sm pt-5 px-3 pb-3">Overview</p>
          <div className="w-full flex justify-between items-center pb-7">
            <div className="flex justify-start items-center px-10 gap-x-7 bg-yellow-400 rounded-lg py-2">
                <BsGraphDownArrow  className="text-3xl text-white font-semibold"/>

                
                <div className="flex flex-col justiify-start items-start gap-y-2 text-white ">
                    <p className="font-bold text-2xl">{user.balance}$</p>
                    <p className=" text-sm font-semibold">Balance</p>
                </div>
            </div>
            <div className="flex justify-start items-center px-10 gap-x-7 bg-blue-900 rounded-lg py-2">
                <BsGraphDownArrow  className="text-3xl text-white font-semibold"/>
                <div className="flex flex-col justiify-start items-start gap-y-2 text-white ">
                    <p className="font-bold text-2xl">16</p>
                    <p className=" text-sm font-semibold">Purchase</p>
                </div>
            </div>
            <div className="flex justify-start items-center px-10 gap-x-7 bg-pink-600 rounded-lg py-2">
                <BsGraphDownArrow  className="text-3xl text-white font-semibold"/>
                <div className="flex flex-col justiify-start items-start gap-y-2 text-white ">
                    <p className="font-bold text-2xl">13</p>
                    <p className=" text-sm font-semibold">Product in cart </p>
                </div>
            </div>
            <div className="flex justify-start items-center px-10 gap-x-7 bg-gray-500 rounded-lg py-2">
                <BsGraphDownArrow  className="text-3xl text-white font-semibold"/>
                <div className="flex flex-col justiify-start items-start gap-y-2 text-white ">
                    <p className="font-bold text-2xl">50%</p>
                    <p className=" text-sm font-semibold">Discounts </p>
                </div>
            </div>
          </div>
          <div className="w-full rounded-lg px-4 py-4 bg-gray-200 flex justify-start items-start gap-x-4">
            <img src="https://i.pinimg.com/564x/76/27/3b/76273b5e99d6b19e9ff2c8623ddf7ffb.jpg" className="w-[120px] h-[120px]" alt="" />
            <div className="flex flex-col justify-start items-start gap-y-2">
                <p className="text-blue-600 font-semibold">Watches offer</p>
                <p className="text-gray-500">in this month our store decide to discount watches price with 40%</p>
                <p className="text-gray-500 ">this offer start in 10th of this month</p>
               <p className="font-semibold">Limited offer</p>
            </div>
          </div>
          
      </div>
    </div>
  );
};
