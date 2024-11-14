import React, { useEffect } from "react";
import Logo from "../assets/img/Logo.png";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoGift, IoSearchOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { LuFileDown } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";

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
import NavBarè from "../components/NavBarè";

const Account = () => {
  const [confirm,setConfirm]=useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const { product, productDispatch } = useContext(ProductContext);
  const { productContext, productListDispatch } = useContext(ProductContext);
  const [productWithSameType, setProductWithSameType] = useState([]);
  const [quantity,setQuantiy]=useState(1)
  const [item, setItem] = useState(0);
  const navigate=useNavigate()
const [error,setErorr]=useState('')
 const goToConfirm=()=>{
  if(user!=null){
    setConfirm(true)
  }else{
    navigate('/Singin')
  }
 }

 const goToAddToCart=()=>{
  if(user!=null){
    addToCart(product._id)
  }else{
    navigate('/Singin')
  }
 }

 useEffect(()=>{console.log(product)},[product])

  const addToCart=(id)=>{
    axios
    .post('http://localhost:5555/cart',{userId:user.userId,productId:id})
    .then((response)=>{
  console.log(response)
    })
    .catch((error)=>{
  console.log(error)
    })
  }  

  const decrementQuantity=()=>{
    setErorr('')
    if(quantity>1){
      setQuantiy(quantity-1)
    }
  }
  const incrementQuantity=()=>{
    setErorr('')
    if(quantity<product.quantity){
      setQuantiy(quantity+1)
    }
  }
  useEffect(() => {
    if(product !=null){
      const productType = productContext.filter(
        (pro) => pro.productType == product.productType
      );
      setProductWithSameType(productType);
      console.log(product);
    }
    else{
      setConfirm(false)
    }
    
    setQuantiy(1);
  }, [product]);
  const displayProductWithSameType = [...Array(4)].map((_, i) => {
    if (productWithSameType.length > i) {
      return (
        <img
        onClick={()=>{productDispatch({payload:productWithSameType[i]})}}
          key={i}
          src={productWithSameType[i].imgUrl}
          className="w-[67px] h-[67px] cursor-pointer"
        />
      );
    } else {
      return "";
    }
  });
  return (
    <div>
      {product == null ? (
        <div>
         <NavBarè/>
     
         
          <div className="w-full px-10 pt-3 ">
            <div className="w-full   bg-gray-100 pr-10 pl-20 relative ">
              <div className="w-[95%]  flex justify-between items-center">
                <div className="flex flex-col gap-y-5 items-start  justify-start">
                  <div className="flex flex-col justify-start items-start gap-y-2">
                    <p className="font-bold  text-blue-800 text-5xl">
                      Grap upto 50% off on
                    </p>
                    <p className="font-bold text-blue-800 text-5xl ">
                      Selected Headphone
                    </p>
                  </div>
                  <button className="text-white bg-orange-700 px-4 py-2 rounded-2xl font-semibold text-md">
                    Buy Now
                  </button>
                </div>
                <img
                  src={Headphone}
                  alt=""
                  className=" w-[230px] h-[210px] right-25  top-[20px]"
                />
              </div>
            </div>
          </div>

          <ProductListe className="z-10" />

          <ContactsSection />
          <div>
            <div className="footer w-full px-10 flex justify-start items-start gap-x-10 pb-10 pt-10 mt-5    ">
              <div className=" ">
                <div className="flex justify-start items-center pb-7">
                  <img src={Logo} className="w-[130px] h-[130px]" alt="" />
                  <p className="text-4xl font-bold text-blue-800">
                    AY-<span className="text-orange-600">STORE</span>
                  </p>
                </div>
                <div className="font-semibold text-gray-600 w-[400px] text-sm pb-7">
                  Buy from AY-STORE , we always strive to improve our products
                  and our services . if you have question or find a dificult in
                  brows our website , you can send Email from here
                </div>
                <div className="flex flex-col justify-start items-start">
                  <p className="text-xl font-semibold">Accepted payments</p>
                  <div className="grid grid-cols-4 w-3/4 gap-y-7 gap-x-3 pt-8">
                    <div className="col-span-1 border flex justify-center items-center py-2 bg-gray-300">
                      <img src={visa} alt="" className="" />
                    </div>

                    <div className="col-span-1 border flex justify-center items-center py-2 bg-gray-300">
                      <img src={master} alt="" className="" />
                    </div>
                    <div className="col-span-1 border flex justify-center items-center py-2 bg-gray-300">
                      <img src={apple} alt="" className="" />
                    </div>
                    <div className="col-span-1 border flex justify-center items-center py-2 bg-gray-300">
                      <img src={amazon} alt="" className="" />
                    </div>
                    <div className="col-span-1 border flex justify-center items-center py-2 bg-gray-300">
                      <img src={klarna} alt="" className="" />
                    </div>
                    <div className="col-span-1 border flex justify-center items-center py-2 bg-gray-300">
                      <img src={payments} alt="" className="" />
                    </div>
                    <div className="col-span-1 border flex justify-center items-center py-2 bg-gray-300">
                      <img src={paypal} alt="" className="" />
                    </div>
                    <div className="col-span-1 border flex justify-center items-center py-2 bg-gray-300">
                      <img src={strip} alt="" className="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="  w-full px-15 ">
                <div className="grid grid-cols-4 w-full gap-x-10  pb-6 pt-10">
                  <div className="col-span-1  flex justify-start  items-center font-semibold text-xl">
                    Departments
                  </div>
                  <div className="col-span-1  flex justify-start  items-center font-semibold text-xl">
                    About us
                  </div>
                  <div className="col-span-1  flex justify-start  items-center font-semibold text-xl">
                    Services
                  </div>
                  <div className="col-span-1  flex justify-start  items-center font-semibold text-xl">
                    Help
                  </div>
                </div>
                <div className="grid grid-cols-4 pb-3 w-full gap-x-10 ">
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 ">
                    Laptops
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    {" "}
                    About AY-STORE
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Gift card
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    AY-STORE help
                  </div>
                </div>
                <div className="grid grid-cols-4 pb-3 w-full gap-x-10 ">
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Phones
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    {" "}
                    Creers
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Services
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Returns
                  </div>
                </div>
                <div className="grid grid-cols-4 pb-3 w-full gap-x-10 ">
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Watches
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    News & blog
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Shipping & dilivery
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Track orders
                  </div>
                </div>
                <div className="grid grid-cols-4 pb-3 w-full gap-x-10 ">
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Cameras
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Help
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Order pickup
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Contact Us
                  </div>
                </div>
                <div className="grid grid-cols-4 pb-3 w-full gap-x-10 ">
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Other products
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Shop By Locationn
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Account Signup
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    FeedBack
                  </div>
                </div>
                <div className="grid grid-cols-4 pb-3 w-full gap-x-10 ">
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Laptop components
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    SAY-STORE Brands
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold"></div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Security & Fraud
                  </div>
                </div>
                <div className="grid grid-cols-4 pb-3 w-full gap-x-10 ">
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Telivision
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Afiliate & Partners
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold"></div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Security & Fraud
                  </div>
                </div>
                <div className="grid grid-cols-4 pb-3 w-full gap-x-10 ">
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Laptop maitenance
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Ideas & Guides
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold"></div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold"></div>
                </div>
                <div className="grid grid-cols-4 pb-3 w-full gap-x-10 ">
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold">
                    Phone maitenance
                  </div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold"></div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold"></div>
                  <div className="col-span-1  flex justify-start  items-center hover:px-3 hover:text-orange-600 text-sm cursor-pointer text-gray-600 hover:font-semibold"></div>
                </div>
              </div>
            </div>
            <hr className="w-[95%] mx-auto " />
            <div className="w-full flex justify-start items-center py-5   px-10">
              <div className="flex justify-start items-center gap-x-5 pr-5">
                <div className="flex justify-start items-center gap-x-2 text-pink-800 text-lg font-semibold">
                  <IoBagRemoveOutline className="text-xl" />
                  <p className="text-black">Becom Seller</p>
                </div>
                <div className="flex justify-start items-center gap-x-2 text-pink-800 text-lg font-semibold">
                  <FaGift className="text-xl" />
                  <p className="text-black">Gift Cards</p>
                </div>
                <div className="flex justify-start items-center gap-x-2 text-pink-800 text-lg font-semibold">
                  <IoMdHelpCircleOutline className="text-xl" />
                  <p className="text-black">Help Center</p>
                </div>
              </div>
              <div className="pl-10 font-semibold text-lg flex justify-start items-center">
                <div className="flex justify-start items-center gap-x-5 pl-4 ">
                  <p>Term of service</p>
                  <p>Privacy & Policy</p>
                </div>
                <div className="pl-10">
                  <p>
                    Alll rights reserved by Musemind{" "}
                    <span className="underline">mern stuck dev</span> | 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        !confirm ?<div>
          <NavBarè/>
          <div className="px-10 w-full pt-3">
            <p className="text-md text-gray-600 ">
              Electronics / {product.productType} /{" "}
              <span className="text-black font-semibold">{product.name}</span>
            </p>
            <div className="w-full flex justify-start items-center px-5 ">
              <div className="flex flex-col gap-y-5 justify-start items-center pt-3 border w-1/2">
                <div className="flex flex-col justify-center items-center px-6 py-6 w-full ">
                  <img
                    src={product.imgUrl}
                    className="w-[300px] h-[300px]"
                    alt=""
                  />
                </div>
                <div className=" flex justify-start items-center px-2 gap-x-7 w-1/2 mx-auto">
                  {displayProductWithSameType}
                </div>
              </div>
              <div className="w-1/2 border py-5 px-10">
                <p className=" font-bold text-3xl">{product.name}</p>
                <p className="text-gray-600 px-3">{product.description}</p>
                <p className="font-bold text-2xl  pt-3">{product.price} $</p>
                <p className="text-gray-600 px-3 ">suggetion: buy 3 article by {product.price*3 -30} $</p>
                
                <div className="pt-8 flex justify-start items-center gap-x-6 w-full">
                  <div className="cursor-pointer flex justify-start items-center gap-x-7 bg-gray-400 px-3 ">
                    <p onClick={decrementQuantity} className="text-2xl font-semibold hover:text-white">-</p>
                    <p className="text-xl font-semibold">{quantity}</p>
                    <p onClick={incrementQuantity} className="text-2xl font-semibold hover:text-white">+</p>

                  </div>
                  <div className="">
                    <p className="text-gray-600 text-sm">only <span className="font-semibold text-orange-600">{product.quantity} item </span> Left !</p>
                    <p className="text-gray-600 text-sm">Don't miss it</p>
                  </div>

                </div>

                <div className=" pt-5 flex justify-start items-center gap-x-5 ">
                  <button onClick={goToConfirm} className="hover:bg-gray-800 hover:border-gray-800  border border-orange-600 px-6 py-2 bg-orange-600 text-white  font-semibold ">Buy Now</button>
                  <button onClick={goToAddToCart} className=" hover:text-white hover:bg-green-800 hover:border-green-800  px-6 py-2 bg-white text-black border border-black  font-semibold ">Add to Cart</button>
                </div>

                <div>
                  <div className="flex justify-start items-center pt-7 gap-x-3">
<TbTruckDelivery className="text-black font-semibold text-2xl"/>
<p className="text-md font-semibold text-black">Delivery</p>
                  </div>
                  <p className="px-7 text-gray-600 text-sm"> enter your postal code for free delivery</p>
                </div>
                <div className="flex flex-col jutify-start items-start pt-3">
                  <div className="flex justify-start items-center gap-x-3 ">
                     <LuFileDown className="text-black font-semibold text-2xl"/>
                     <p className="text-md font-semibold text-black">Return Delivery</p>
                  </div>
                  <div className="w-full px-7 text-gray-600 text-sm">
                    Free 30 Day Delivery Returns Details
                  </div>

                </div>
                <div className="w-full flex justify-center items-center pt-3 text-xl text-red-800 font-semibold">
                  {error} 
                </div>
              </div>
            </div>
          </div>
        </div>:<PurchaseConfirmation quantity={quantity}/>
        
      )}
     
     
    </div>
  );
};

export default Account;
