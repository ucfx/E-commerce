import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../Context/AuthContext";

import { FaAngleDown } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import Logo from "../assets/img/Logo.png";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Contacts = () => {
  const { user, dispatch } = useContext(AuthContext);
  const { itemP } = useParams();
  const [item, setItem] = useState(4);

  return (
    <div className="">
      <div className="w-full py-1 px-10 bg-blue-800 flex justify-between items-center">
        <div className="flex justify-start items-center gap-x-2">
          <FaPhone className="text-white text-md" />
          <p className="text-white text-md">+213 656149785</p>
        </div>
        <div className="flex justify-between items-center gap-x-5">
          <p className="text-white text-md ">Get 50% of selected items</p>
          <p className="text-white text-md ">|</p>
          <p className="text-white text-md ">Shop Now</p>
        </div>
        <div className="flex justify-between items-center gap-x-10">
          <div className="flex justify-start items-center gap-x-2">
            <p className="text-white text-md">Eng </p>
            <FaAngleDown className="text-md text-white" />
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <p className="text-white text-md">Location </p>
            <FaAngleDown className="text-md text-white" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full px-10  ">
        <div className="flex justify-start items-center gap-x-1 ">
          <img src={Logo} alt="" className="w-[65px] h-[65px] " />
          <Link to={'/'} className="font-fontAY2 font-bold text-lg text-blue-800 ">
            {" "}
            AY-<span className="text-orange-700">STORE</span>
          </Link>
        </div>
        <div className="flex justify-start items-center gap-x-10 px-4 ">
          <div
            onClick={() => {
              setItem(0);
            }}
            className={`flex justify-center items-center gap-x-2 group cursor-pointer ${
              item == 0 ? "text-orange-700 font-semibold" : "text-black"
            }`}
          >
            <p className="group-hover:font-semibold">Categories</p>
            <FaAngleDown className="group-hover:font-semibold" />
          </div>

          <p
            onClick={() => {
              setItem(1);
            }}
            className={`cursor-pointer hover:font-semibold ${
              item == 1 ? "text-orange-700 font-semibold" : "text-black"
            } `}
          >
            Purchases
          </p>
          <p
            onClick={() => {
              setItem(2);
            }}
            className={`cursor-pointer hover:font-semibold  ${
              item == 2 ? "text-orange-700 font-semibold" : "text-black"
            }`}
          >
            Deals
          </p>
          <p
            onClick={() => {
              setItem(3);
            }}
            className={`cursor-pointer hover:font-semibold  ${
              item == 3 ? "text-orange-700 font-semibold" : "text-black"
            } `}
          >
            Dilivery
          </p>
          <Link
            to={"/Contact/4"}
            onClick={() => {
              setItem(4);
            }}
            className={`cursor-pointer hover:font-semibold ${
              item == 4 ? "text-orange-700 font-semibold" : "text-black"
            } `}
          >
            Contact us
          </Link>
        </div>
        <div className=" flex justify-between items-center rounded-xl bg-gray-200 px-2 py-1 gap-x-5">
          <input
            type="text"
            className="rounded-lg px-2 border-none bg-transparent text-gray-600"
            placeholder="search"
          />
          <IoSearchOutline className="text-gray-600" />
        </div>
        <div className="flex justify-between items-center px-3 gap-x-5">
          <div className="flex justify-center items-center gap-x-2 cursor-pointer group">
            <VscAccount className="group-hover:text-orange-700 group-hover:font-semibold" />
            <p className="group-hover:text-orange-700 group-hover:font-semibold">
              Account
            </p>
          </div>
          <div className="flex justify-center items-center gap-x-2 cursor-pointer group">
            <FiShoppingCart className="group-hover:text-orange-700 group-hover:font-semibold" />
            <p className="group-hover:text-orange-700 group-hover:font-semibold">
              Cart
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center pt-10 gap-y-5 mb-10">
        <img src={Logo} alt="" className="w-[65px] h-[65px] " />
        <p className="text-4xl font-bold">Contact our freindly team</p>
        <p className="text-md text-gray-500 ">Let us know how we can help</p>
      </div>
      <div className="px-10 flex justify-between items-center pt-10">
        <div className="flex flex-col  justify-start items-start border rounded-lg px-5 w-1/5 shadow-xl pb-2 ">
            <div className="  flex justify-start items-start pt-3 pb-8">
<FaLocationDot className="text-black font-bold"/>
            </div>
            <div className="flex flex-col justify-start items-start">
                <p className="font-bold">Location</p>
                <p className=" text-gray-500">El-Guelta Chlef Algeria</p>
                <p className=" text-gray-500">El-Guelta Chlef Algeria</p>
            </div>
        </div>
        <div className="flex flex-col  justify-start items-start border rounded-lg px-5 w-1/5 shadow-xl pb-2 ">
            <div className="  flex justify-start items-start pt-3 pb-8">
<MdEmail className="text-black font-bold"/>
            </div>
            <div className="flex flex-col justify-start items-start">
                <p className="font-bold">Email</p>
                <p className=" text-gray-500">anteuryounes1@gmail.com</p>
                <p className=" text-gray-500">anteuryounes12@gmail.com</p>
            </div>
        </div>
        <div className="flex flex-col  justify-start items-start border rounded-lg px-5 w-1/5 shadow-xl pb-2 ">
            <div className="  flex justify-start items-start pt-3 pb-8">
<FaPhone className="text-black font-bold"/>
            </div>
            <div className="flex flex-col justify-start items-start">
                <p className="font-bold">Phone</p>
                <p className=" text-gray-500">+213 656149785</p>
                <p className=" text-gray-500">027464128</p>
            </div>
        </div>
        <div className="flex flex-col  justify-start items-start border rounded-lg px-5 w-1/5 shadow-xl pb-2 ">
            <div className="  flex justify-start items-start pt-3 pb-8">
<FaLocationDot className="text-black font-bold"/>
            </div>
            <div className="flex flex-col justify-start items-start">
                <p className="font-bold">Location</p>
                <p className=" text-gray-500">El-Guelta Chlef Algeria</p>
                <p className=" text-gray-500">El-Guelta Chlef Algeria</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
