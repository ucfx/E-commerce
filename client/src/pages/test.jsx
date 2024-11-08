import React, { useContext, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Watch1 from "../assets/img/watch1.png";
import Logo from "../assets/img/Logo.png";
import ele from "../assets/img/ele-removebg-preview.png";
import electrique from "../assets/img/electrique2.png";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Test = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [item, setItem] = useState(0);

  return (
    <>
      <div className="min-h-screen w-full bg-gray-300  ">
        <div className="flex justify-between items-center w-full px-10 bg-gray-200 shadow-2xl ">
          <div className="flex justify-start items-center gap-x-1 ">
            <img src={Logo} alt="" className="w-[80px] h-[80px] " />
            <p className="font-fontAY2 font-bold text-2xl text-blue-900 ">
              {" "}
              AY-<span className="text-orange-700">STORE</span>
            </p>
          </div>
          <div className="flex justify-start items-center gap-x-6 text-xl font-semibold">
            {user ? (
              <Link
                to={"/"}
                className="flex justify-center items-center gap-x-3  group "
              >
                <p
                  onClick={() => {
                    setItem(0);
                  }}
                  className={`cursor-pointer ${
                    item == 0 ? "text-orange-700" : "text-gray-700"
                  }`}
                >
                  Home
                </p>
              </Link>
            ) : (
              ""
            )}

            <a
              href={"#contactUs"}
              onClick={() => {
                setItem(1);
              }}
              className={`cursor-pointer ${
                item == 1 ? "text-orange-700" : "text-gray-700"
              }`}
            >
              Contact
            </a>

            <a
              href={"#aboutUs"}
              onClick={() => {
                setItem(2);
              }}
              className={`cursor-pointer ${
                item == 2 ? "text-orange-700" : "text-gray-700"
              }`}
            >
              About us
            </a>
            <Link
              onClick={() => {
                setItem(3);
              }}
              to={`${user ? "/Buy" : "/Buy"}`}
              className={`cursor-pointer ${
                item == 3 ? "text-orange-700" : "text-gray-700"
              }`}
            >
              Buy
            </Link>
          </div>
          <div className="flex justify-center items-center gap-x-3 font-semibold-">
            {!user ? (
              <>
                <Link
                  to={"/Singin"}
                  className="  text-xl text-blue-900 font-semibold"
                >
                  Sign in
                </Link>
                <Link
                  to={"/Singup"}
                  className=" text-xl text-orange-700 font-semibold"
                >
                  Sign up
                </Link>{" "}
              </>
            ) : (
              <button
                onClick={() => {
                  dispatch({ type: "LOGOUT" });
                }}
                className="text-xl  text-blue-900 font-semibold  "
              >
                Sign out
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-start  items-start px-10 w-1/2 mt-36 gap-y-9">
          <div className="text-6xl  font-bold">AY-STORE</div>

          <p className="font-bold text-6xl ">
            Delivery in <span className="font-light">1 week</span>
          </p>
          <p className="font-light ">
            AY-STORE a wide range of electronique products , Laptops , Phones ,
            Watches and Cameras . You can pay using Wise, Paysera, Gold Card and
            other bank cards.
          </p>

          <div className="w-full flex justify-start items-center gap-x-4">
            <Link
              to={"/Buy"}
              className="py-1 border-orange-700 border rounded-md px-2 flex justify-center items-center gap-x-3 text-orange-700 bg-white font-semibold text-lg"
            >
              Buy Now <BsCart4 />
            </Link>
            <a
              href="#"
              className="px-2  py-1 border-blue-900 border rounded-md text-blue-900 bg-white text-lg font-semibold"
            >
              Brows{" "}
            </a>
          </div>
        </div>
        <img
          src={Watch1}
          alt=""
          className="absolute top-[170px] right-[140px] w-[400px] h-[400px]"
        />
      </div>
      <div className="w-full pb-20 pt-5">
        <div className="w-full flex flex-col justify-center items-center gap-y-4">
          <div className="text-2xl font-bold">Connect with our team</div>
          <div className="font-semibold">
          <p className="text-gray-700">contact our team by sending us an email</p>
          <p className="text-gray-700">and you will find on this page all our contact details</p>
        
          </div>
         </div>
         <div className="flex justify-center items-start gap-x-5 mt-5 ">

          <div className="px-5  border-black bg-gray-300 py-3 ">
            <p className="font-black text-2xl font-fontAY2">Get in touch with us</p>
            <div className="grid grid-cols-2 grid-rows-5 gap-y-5 mt-5  pb-3 ">
              <div className="col-span-1 flex justify-start items-center">
                 <input type="text" className="rounded-md w-3/4 py-2 px-2 " placeholder="your name" />
              </div>
              <div className="col-span-1  flex justify-end items-center">
              <input type="text" className="rounded-md w-3/4  py-2 px-2 " placeholder="your email" />

              </div>
              <div className="col-span-2">
              <input type="text" className="rounded-md w-full py-2 px-2 " placeholder="your email" />

              </div>
              
              <input type="text" className="rounded-md w-full  py-2 px-2 row-span-3 col-span-2 flex justify-start items-start " placeholder="your message" />

            
            </div>
            <button className="text-white bg-black font-semibold px-2 py-2 rounded-lg">send message</button>
          </div>
          <div className="w-1/2 px-5 pt-2 bg-gray-200">
          <p className="font-black text-2xl font-fontAY2 mb-5">Contact Details</p>
          <div className="w-4/5 mb-4">
          <p className="font-semibold text-gray-700 "> in this section you will find our adresse , our phone number , email adresse and our availability</p>

          </div>
          <div className="w-full border py-3 flex flex-col justify-start items-start gap-y-5 pb-10 mb-10">
            <div className="w-full flex justify-center items-center">
              <div className="w-1/2 flex justify-start items-center gap-x-3">
                 <div className="bg-black px-3 py-3 flex flex-col justify-center items-center">
                         <FaPhone className="text-white text-xl"/>
                 </div>
                 <div className="flex flex-col justify-center items-start">
                  <p className="text-lg font-semibold">Phone</p>
                  <p className="text-sm font-semibold text-gray-700">+213 656149785</p>
                 </div>
              </div>
              <div className="w-1/2 flex justify-start items-center gap-x-3">
                 <div className="bg-black px-3 py-3 flex flex-col justify-center items-center">
                         <FaLocationDot className="text-white text-xl"/>
                 </div>
                 <div className="flex flex-col justify-center items-start">
                  <p className="text-lg font-semibold">Location</p>
                  <p className="text-sm font-semibold text-gray-700">EL-GUELTA CHLEF ALGERIA</p>
                 </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
            <div className="w-1/2 flex justify-start items-center gap-x-3">
                 <div className="bg-black px-3 py-3 flex flex-col justify-center items-center">
                         <FaClock className="text-white text-xl"/>
                 </div>
                 <div className="flex flex-col justify-center items-start">
                  <p className="text-lg font-semibold">Availability</p>
                  <p className="text-sm font-semibold text-gray-700">Daily 08 am - 04 pm</p>
                 </div>
              </div>
              <div className="w-1/2 flex justify-start items-center gap-x-3">
                 <div className="bg-black px-3 py-3 flex flex-col justify-center items-center">
                         <MdEmail className="text-white text-xl"/>
                 </div>
                 <div className="flex flex-col justify-center items-start">
                  <p className="text-lg font-semibold">Email</p>
                  <p className="text-sm font-semibold text-gray-700">anteuryounes12@gmail.com</p>
                 </div>
              </div>
              
            </div>
          </div>
<div className="w-full flex justify-between items-center py-6 mt-10 ">
  <p className="text-xl font-semibolds">Social Media</p>
  <div className="flex justify-center items-center gap-x-5">
<FaLinkedin className="text-xl "/><FaFacebookSquare className="text-xl "/><BsTwitterX className="text-xl "/><FaInstagramSquare className="text-xl "/>
  </div>
</div>
          </div>

         </div>
      </div>
    </>
  );
};

export default Test;
