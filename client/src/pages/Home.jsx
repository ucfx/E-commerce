import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";
import SmMenu from "../components/SmMenu";
import axios from "axios";
import AboutUs from "../components/AboutUs";
import { useEffect, useContext } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { AuthContext } from "../Context/AuthContext.jsx";
import electronic from "../assets/img//electronic.png";
import AllTypes from "../components/AllTypes.jsx";
import { FcElectronics } from "react-icons/fc";

import { IoMdLogOut } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";


import { FaLaptop } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";
import { BsSmartwatch } from "react-icons/bs";
import { BsCameraReelsFill } from "react-icons/bs";
import Laptops from "../components/Laptops.jsx";
import Phones from "../components/Phones.jsx";
import Watches from "../components/Watches.jsx";
import Cameras from "../components/Cameras.jsx";
import { ProductContext } from "../Context/ProductContext.jsx";
import { FaCarTunnel } from "react-icons/fa6";

const Home = () => {
  const context = useContext(AuthContext);
  const { user } = context;
  const { dispatch } = context;

  const productContext = useContext(ProductContext);

  
const {product}=productContext
const {productDispatch}=productContext
const [products, setProducts] = useState([]);


 useEffect(()=>{
         
    console.log(product)
},[products,product])


  
  useEffect(() => {
    axios
      .get("http://localhost:5555/product")
      .then((response) => {
        setProducts(response.data.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [dark, setDark] = useState(false);
  const [smMenu, setSmMenu] = useState(false);

  const handleDark = () => {
    setDark(!dark);
  };
  const handleSmMenu = () => {
    setSmMenu(!smMenu);
  };
  const Logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const [productDisplay,setProductDisplay]=useState(0);

const displayType=(i)=>{
  setProductDisplay(i)
}

  return (
    <>
      <div className="w-full px-4 py-2 justify-between items-center  hidden lg:flex     bg-gray-200 ">
        <div className="flex justify-start item-center gap-x-7 w-3/4  ">
          <Link to={"/"} className={`font-bold text-xl text-red1 `}>
            AY-SHOP
          </Link>
          {user ?<Link to={'/Buy'} className="flex justify-center items-center gap-x-3 border group ">
               <BsCart4 className="font-bold text-xl text-gray-500 cursor-pointer group-hover:text-red1 " />
               <p className="font-bold text-xl text-gray-500 cursor-pointer group-hover:text-red1 ">Buy</p>
          </Link>:''}
          
          

          <a
            href={"#contactUs"}
            className={`font-bold text-xl text-gray-500 hover:text-red1 `}
          >
            Contact
          </a>

          <a
            href={"#aboutUs"}
            className={`font-bold text-xl text-gray-500 hover:text-red1 `}
          >
            About us
          </a>
        </div>
       
        <div className="flex justify-end  w-1/4   items-center gap-x-10   ">
       
          {user == null ? 
          <>
           <div className="border   flex justify-start items-center px-4 gap-x-5 ">
           <Link to={'/Singin'} className="px-2 flex justify-center py-2 text-xl  text-red1 bg-white border-2 border-red1 hover:text-white hover:bg-red1 rounded-md">Sing in</Link>     
           <Link to={'/Singup'} className="px-2   flex justify-center py-2 text-xl text-red1 bg-white border-2 border-red1 hover:text-white hover:bg-red1 rounded-md">Sign up</Link>      
 
           </div>
           {!dark ? (
            <CiLight
              className="text-2xl text-black cursor-pointer"
              onClick={handleDark}
            />
          ) : (
            <CiDark
              className="text-2xl text-black cursor-pointer"
              onClick={handleDark}
            />
          )}</>
           : 
           <div className="  flex justify-between items-center gap-x-10">
            <p className="text-xl text-gray-500 hover:text-red1 font-bold cursor-pointer " onClick={Logout}>Logout</p>
           {!dark ? (
            <CiLight
              className="text-2xl text-black cursor-pointer"
              onClick={handleDark}
            />
          ) : (
            <CiDark
              className="text-2xl text-black cursor-pointer"
              onClick={handleDark}
            />
          )
        }

          </div>
          }

          
        </div>
      </div>
     

      <div className="flex justify-between  w-full lg:hidden px-3 py-2 bg-gray-200">
        <Link to={"/"} className={`font-bold text-xl text-red1 `}>
          AY-SHOP
        </Link>
        <div className="flex justify-between items-center gap-x-3">
          <TiThMenu className="text-xl text-black" onClick={handleSmMenu} />
          {!dark ? (
            <CiLight
              className="text-2xl text-black cursor-pointer"
              onClick={handleDark}
            />
          ) : (
            <CiDark
              className="text-2xl text-black cursor-pointer"
              onClick={handleDark}
            />
          )}
        </div>
      </div>
      {smMenu ? <SmMenu /> : ""}
      
      <div className="w-[97%] mx-auto flex justify-around items-center py-2 mt-6">
        <div onClick={()=>{displayType(0)}} className="flex flex-col justify-between items-center cursor-pointer group  ">
          <FaLaptop className={`text-3xl ${productDisplay==0?'text-red1':'text-gray-600'} group-hover:text-red1`} />
          <p className={`${productDisplay==0?'text-red1':'text-gray-600'} group-hover:text-red1 font-bold font-fontAY2`}>
            Laptops
          </p>
        </div>
        <div  onClick={()=>{displayType(1)}} className="flex flex-col justify-between items-center cursor-pointer group ">
          <MdOutlineSmartphone className={`text-3xl ${productDisplay==1?'text-red1':'text-gray-600'} group-hover:text-red1`} />
          <p className={`${productDisplay==1?'text-red1':'text-gray-600'} group-hover:text-red1 font-bold font-fontAY2`}>
            Phones
          </p>
        </div>
        <div  onClick={()=>{displayType(2)}} className="flex flex-col justify-between items-center cursor-pointer group ">
          <BsSmartwatch className={`text-3xl ${productDisplay==2?'text-red1':'text-gray-600'} group-hover:text-red1`} />
          <p className={`${productDisplay==2?'text-red1':'text-gray-600'} group-hover:text-red1 font-bold font-fontAY2`}>
            Watches
          </p>
        </div>
        <div onClick={()=>{displayType(3)}}  className="flex flex-col justify-between items-center cursor-pointer group ">
          <BsCameraReelsFill className={`text-3xl ${productDisplay==3?'text-red1':'text-gray-600'} group-hover:text-red1`} />
          <p className={`${productDisplay==3?'text-red1':'text-gray-600'} group-hover:text-red1 font-bold font-fontAY2`}>
            Cameras
          </p>
        </div>
      </div>
      {products.length>0?
        productDisplay==0? <Laptops products={products}/>:
        productDisplay==1? <Phones products={products}/>:
        productDisplay==2? <Watches products={products}/>:
        productDisplay==3? <Cameras products={products}/>:''
      :''}
     
      <div className="font-fontAY2 text-4xl text-green-600 font-bold flex justify-center items-center mt-20 mb-5 ">
        About us
      </div>

      <AboutUs />

      <div className="font-fontAY2 text-4xl text-green-600 font-bold flex justify-center items-center mt-20 mb-7 ">
        Our contacts
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
