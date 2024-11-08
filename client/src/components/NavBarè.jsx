import React from 'react'
import Logo from "../assets/img/Logo.png";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoGift, IoSearchOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { LuFileDown } from "react-icons/lu";

import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import Headphone from "../assets/img/headphone.png";
import background from "../assets/img/a2.jpg";
import ProductListe from "../components/ProductListe";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import visa from "../assets/img/visa.png";
import paypal from "../assets/img/paypal.png";
import master from "../assets/img/master.png";
import payments from "../assets/img/payments.png";
import apple from "../assets/img/apple.png";
import klarna from "../assets/img/klarna.png";
import strip from "../assets/img/strip.png";
import amazon from "../assets/img/amazon.png";
import { IoBagRemoveOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaGift } from "react-icons/fa";
import ContactsSection from "../components/ContactsSection";
import { BiPurchaseTag } from "react-icons/bi";
import { ProductContext } from "../Context/ProductContext";
import { TbTruckDelivery } from "react-icons/tb";
import axios from "axios";
import PurchaseConfirmation from "../components/PurchaseConfirmation";
import { AccountContext } from '../Context/UserAccountContext';
const NavBarè = () => {
    const [item, setItem] = useState(0);
    const {user,Dispatch}=useContext(AuthContext)
    const {product,productDispatch}=useContext(ProductContext)
    const {AccountView,AccountDispatch}=useContext(AccountContext);



  return (
    <div className='w-full'>
         <div className="w-full py-1 px-10 bg-blue-800 flex justify-between items-center ">
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
          <div className="flex justify-between items-center w-full px-10     ">
            <div className="flex justify-start items-center gap-x-1 ">
              <img src={Logo} alt="" className="w-[65px] h-[65px] " />
              <Link
                to={"/"}
                onClick={()=>{productDispatch({payload:null})}}
                className="font-fontAY2 font-bold text-lg  text-blue-800 "
              >
                {" "}
                AY-<span className="text-orange-700">STORE</span>
              </Link>
            </div>
            <div className="flex justify-start items-center gap-x-10 px-4 ">
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
              <a
                onClick={() => {
                  productDispatch({payload:null})

                  setItem(4);
                }}
                href="#contacts"
                className={`cursor-pointer hover:font-semibold ${
                  item == 4 ? "text-orange-700 font-semibold" : "text-black"
                } `}
              >
                Contact us
              </a>
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
              <Link onClick={()=>{AccountDispatch({payload:{value:'Account'}})}} to={'/userAccount'}  className="flex justify-center items-center gap-x-2 cursor-pointer group">
                <VscAccount className="group-hover:text-orange-700 group-hover:font-semibold" />
                <p className="group-hover:text-orange-700 group-hover:font-semibold">
                  Account
                </p>
              </Link>
              <Link onClick={()=>{AccountDispatch({payload:{value:'Cart'}})}} to={'/userAccount'} className="flex justify-center items-center gap-x-2 cursor-pointer group">
                <FiShoppingCart className="group-hover:text-orange-700 group-hover:font-semibold" />
                <p className="group-hover:text-orange-700 group-hover:font-semibold">
                  Cart
                </p>
              </Link>
              <Link onClick={()=>{AccountDispatch({payload:{value:'Purchase'}})}} to={'/userAccount'} className="flex justify-center items-center gap-x-2 cursor-pointer group">
                <BiPurchaseTag className="group-hover:text-orange-700 group-hover:font-semibold" />
                <p className="group-hover:text-orange-700 group-hover:font-semibold">
                  Purchases
                </p>
              </Link>
            </div>
          </div>
    </div>
  )
}

export default NavBarè