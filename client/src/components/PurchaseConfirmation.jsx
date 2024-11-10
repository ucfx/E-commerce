import React, { useContext, useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { ProductContext } from '../Context/ProductContext';
import { BsLaptop, BsLaptopFill } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { BsWatch } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";

import { BiSolidDollarCircle } from "react-icons/bi";
import { TbShoppingCartDiscount } from "react-icons/tb";
import logo2 from '../assets/img/logo2.png'
import { AuthContext } from '../Context/AuthContext';
import NavBarè from './NavBarè';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const PurchaseConfirmation = ({quantity}) => {

  const {user,dispatch}=useContext(AuthContext);
  const {product,productDispatch,productListDispatch}=useContext(ProductContext);
  const [Error,setError]=useState('')
  const navigate=useNavigate();

  const ConfirmPurchase=()=>{
    
    
      const Total=quantity*product.price;
if(Total<=user.balance){
  console.log('first')
  axios
  .post('http://localhost:5555/purchase', { productId: product._id, ...user, quantityP:quantity, Total:quantity*product.price })
  .then((response) => {
console.log(response.data.newBalance.balance)
    
    dispatch({ type: 'incrementBalance', payload: { balance: response.data.newBalance.balance } })
    localStorage.setItem('user', JSON.stringify({ ...user, balance: user.balance - Total }))
    productListDispatch({ type: 'updateOne', payload: { product, quantity: quantity } })
    productDispatch({ payload: null })
    navigate('/')
  })
  .catch(() => {
    
  })

}else{
  setError('you can not buy , your balance is Not enough')

}
     
    
   
  }
  return (
    <div className={`h-screen w-full flex flex-col justify-center items-center `}>
      <NavBarè/>
   
             <div className='w-[48%] rounded-xl bg-yellow-100 pb-5 mt-3'>
                 <div className="w-full px-4 py-3 flex gap-x-3 justify-between items-center rounded-tl-xl rounded-tr-xl bg-blue-600 ">
                    <FaHeart className='text-orange-600 text-5xl'/>
                    <p className='text-white font-semibold text-4xl'>PURCHASE CONFIRMATION</p>
                    <FaCheckCircle className='text-orange-600 text-5xl'/>
                 </div>
                 <div className=' px-3'>
                   <p className="text-3xl pt-2">Thank you for your purchase!</p>
                   <p className="text-xl px-2">We would be happy to have you buy from us again</p>
                   <p className="text-xl px-3 ">You will receive an email after confirmming your purchase !</p>
                 </div>
                 <div className="grid grid-cols-2 grid-rows-2 pt-6 pb-6">
                    <div className="col-span-1 px-4 border-b border-r flex flex-col justify-start items-center border-gray-500">
                        <p className='font-semibold text-xl'>{product.name}</p>
                        <p className='text-sm text-gray-600'>{product.description}</p>
                    </div>
                    <div className="col-span-1 border-b  border-gray-500 px-4  flex flex-col justify-start   items-start ">
                        <div className="flex justify-start gap-x-3 items-center w-full font-semibold">
                            <p className='text-lg'>Unit Price</p>
                            <p className='text-xl text-orange-600'>{product.price}$ </p>
                        </div>
                        <div className="flex justify-start items-center gap-x-3 w-full font-semibold">
                          <p className='text-xl'>{product.productType} product</p>
                          <BsLaptop className='text-2xl text-blue-600'/>

                        </div>
                    </div>
                    
                    <div className="col-span-1 px-4 border-r border-gray-500 pt-2">
                    <div className="flex justify-start items-center w-3/4 font-semibold gap-x-3">
                            <BiSolidDollarCircle className='text-2xl text-orange-500 shadow-2xl border'/>
                            <p className='text-2xl'>Total</p>
                            
                        </div>
                        <div className="flex justify-start items-center w-3/4 font-semibold gap-x-3">
                        <TbShoppingCartDiscount className='text-2xl text-blue-600'/>

                          <p className='text-2xl'>Discount</p>
                          
                        </div>
                    </div>
                    <div className="col-span-1 px-4  border-gray-500 pt-2">
                    <div className="flex justify-between items-center w-full font-semibold">
                         
                    <p className='text-2xl px-2 text-orange-600'>{product.price * quantity}$ -- {product.price*quantity -((product.price*quantity)*5/100) }$</p>

                        </div>
                        <div className="flex justify-between items-center w-3/4 font-semibold">
                          <p className='text-2xl px-2 text-blue-600'>5%</p>
                          
                        </div>
                    </div>
                 </div>
                <div onClick={ConfirmPurchase} className='w-3/4 mb-3 mx-auto rounded-lg font-semibold text-white text-2xl bg-orange-600 flex justify-center items-center py-2 hover:bg-green-700 cursor-pointer'>Confirm Your Purchase</div>
                <Link  onClick={()=>{productDispatch({payload:null})}} className='w-3/4 mx-auto rounded-lg font-semibold text-white text-2xl bg-gray-400 flex justify-center items-center py-2 hover:bg-black cursor-pointer'>Back And Cancel</Link>                 

             </div>
    </div>
  )
}

export default PurchaseConfirmation