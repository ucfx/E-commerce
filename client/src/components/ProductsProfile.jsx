import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { MdCancel } from "react-icons/md";
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { IoReturnUpBackOutline } from "react-icons/io5";

const ProductsProfile = () => {
  const navigate = useNavigate()
  const { dispatch } = useContext(AuthContext);
  const [balanceError, setBalanceError] = useState(false)

  const [quantityP, setQuantityP] = useState(1)
  const [buy, setBuy] = useState(false)
  const { product } = useContext(ProductContext);
  const { user } = useContext(AuthContext)
  const { productContext, productDispatch, productListDispatch } = useContext(ProductContext);

  const confirmPurchase = () => {
    const Total = quantityP * product.price
    axios
      .post('http://localhost:5555/purchase', { productId: product._id, ...user, quantityP, Total })
      .then((response) => {


        dispatch({ type: 'incrementBalance', payload: { balance: response.data.newBalance.balance } })
        localStorage.setItem('user', JSON.stringify({ ...user, balance: user.balance - Total }))
        productListDispatch({ type: 'updateOne', payload: { product, quantity: quantityP } })
        productDispatch({ payload: null })
        setBuy(false)
      })
      .catch(() => {

      })
  }
  const addToCart = (productId) => {
    axios
      .post('http://localhost:5555/cart', { userId: user.userId, productId })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(()=>{console.log(productContext)},[productContext])

  
   
  //<button onClick={()=>{addToCart(producT._id)}} className=' text-xl text-white rounded-lg bg-red1 px-2 py-2 hover:bg-red-400'>add to cart</button>
  //<button onClick={()=>{productDispatch({payload:producT})}} className=' text-xl text-white rounded-lg bg-black px-4 py-2 hover:bg-gray-400'>Buy</button>
  //<div className="  h-full py-4     flex flex-col justify-center items-end col-span-1    ">
  // <div className='flex justify-center w-1/2  items-center mr-1 text-3xl font-bold text-black py-5'>{producT.price} $</div>
  // <div className='flex justify-center items-end gap-x-5 py-2'>

  // </div>
  //  </div>
  // <div className='col-span-2 w-full h-full flex justify-center items-center py-3 text-xl font-bold px-4 '>{producT.description}</div>
  //<div className='col-span-1'>
  // <img src={producT.imgUrl } className='h-[210px]' alt="" />
  //</div>
  const displayProducts = (index) => {
    return <div key={index} className={` flex flex-col justify-center items-center  mx-auto absolute top-25 w-full border  ' ${product != null ? 'hidden' : 'flex'}`}>
      <div className='grid grid-cols-3  w-4/5 mx-auto '>
          <div className="col-span-1  flex flex-col justify-start items-center  px-2 pt-4  ">
            <div className="flex justify-center flex-col items-center w-full mb-4   ">
              <img src={productContext[index*6+0].imgUrl} alt="" className='w-[150px] h-[150px]'  />
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2 w-full">
               <p className='text-xl text-gray-800'>{productContext[index*6+0].name}</p>
               <div className="flex justify-center items-center w-full gap-x-3  ">
               <button onClick={()=>{addToCart(productContext[index*6+0]._id)}} className='w-1/3 bg-yellow-500  rounded-lg border-ellow-500 text-lg text-white  py-1  '>add to cart</button>
               <button onClick={()=>{productDispatch({payload:productContext[index*6+0]})}} className='w-1/3 border-2 border-yellow-500  rounded-lg border-ellow-500 text-lg text-gray-800 py-[1px]   '>Buy</button>
  
               </div>
            </div>
          </div>
          <div className="col-span-1  flex flex-col justify-start items-center  px-2 pt-4  ">
            <div className="flex justify-center flex-col items-center w-full mb-4   ">
              <img src={productContext[index*6+1].imgUrl} alt="" className='w-[150px] h-[150px]'  />
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2 w-full">
               <p className='text-xl text-gray-800'>{productContext[index*6+1].name}</p>
               <div className="flex justify-center items-center w-full gap-x-3  ">
               <button onClick={()=>{addToCart(productContext[index*6+1]._id)}} className='w-1/3 bg-yellow-500  rounded-lg border-ellow-500 text-lg text-white  py-1  '>add to cart</button>
               <button onClick={()=>{productDispatch({payload:productContext[index*6+1]})}} className='w-1/3 border-2 border-yellow-500  rounded-lg border-ellow-500 text-lg text-gray-800 py-[1px]   '>Buy</button>
  
               </div>
            </div>
          </div>
          <div className="col-span-1  flex flex-col justify-start items-center  px-2 pt-4  ">
            <div className="flex justify-center flex-col items-center w-full mb-4   ">
              <img src={productContext[index*6+2].imgUrl} alt="" className='w-[150px] h-[150px]'  />
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2 w-full">
               <p className='text-xl text-gray-800'>{productContext[index*6+2].name}</p>
               <div className="flex justify-center items-center w-full gap-x-3  ">
               <button onClick={()=>{addToCart(productContext[index*6+2]._id)}} className='w-1/3 bg-yellow-500  rounded-lg border-ellow-500 text-lg text-white  py-1  '>add to cart</button>
               <button onClick={()=>{productDispatch({payload:productContext[index*6+2]})}} className='w-1/3 border-2 border-yellow-500  rounded-lg border-ellow-500 text-lg text-gray-800 py-[1px]   '>Buy</button>
  
               </div>
            </div>
          </div>
      </div>
      <div className='grid grid-cols-3  w-4/5 mx-auto '>
          <div className="col-span-1  flex flex-col justify-start items-center  px-2 pt-1   ">
            <div className="flex justify-center flex-col items-center w-full mb-4   ">
              <img src={productContext[index*6+3].imgUrl} alt="" className='w-[150px] h-[150px]'  />
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2 w-full">
               <p className='text-xl text-gray-800'>{productContext[index*6+3].name}</p>
               <div className="flex justify-center items-center w-full gap-x-3  ">
               <button onClick={()=>{addToCart(productContext[index*6+3]._id)}} className='w-1/3 bg-yellow-500  rounded-lg border-ellow-500 text-lg text-white  py-1  '>add to cart</button>
               <button onClick={()=>{productDispatch({payload:productContext[index*6+3]})}} className='w-1/3 border-2 border-yellow-500  rounded-lg border-ellow-500 text-lg text-gray-800 py-[1px]   '>Buy</button>
  
               </div>
            </div>
          </div>
          <div className="col-span-1  flex flex-col justify-start items-center  px-2 pt-1   ">
            <div className="flex justify-center flex-col items-center w-full mb-4   ">
              <img src={productContext[index*6+4].imgUrl} alt="" className='w-[150px] h-[150px]'  />
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2 w-full">
               <p className='text-xl text-gray-800'>{productContext[index*6+4].name}</p>
               <div className="flex justify-center items-center w-full gap-x-3  ">
               <button onClick={()=>{addToCart(productContext[index*6+4]._id)}} className='w-1/3 bg-yellow-500  rounded-lg border-ellow-500 text-lg text-white  py-1  '>add to cart</button>
               <button onClick={()=>{productDispatch({payload:productContext[index*6+4]})}} className='w-1/3 border-2 border-yellow-500  rounded-lg border-ellow-500 text-lg text-gray-800 py-[1px]   '>Buy</button>
  
               </div>
            </div>
          </div>
          <div className="col-span-1  flex flex-col justify-start items-center  px-2 pt-1   ">
            <div className="flex justify-center flex-col items-center w-full mb-4   ">
              <img src={productContext[index*6+5].imgUrl} alt="" className='w-[150px] h-[150px]'  />
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2 w-full">
               <p className='text-xl text-gray-800'>{productContext[index*6+5].name}</p>
               <div className="flex justify-center items-center w-full gap-x-3  ">
               <button onClick={()=>{addToCart(productContext[index*6+5]._id)}} className='w-1/3 bg-yellow-500  rounded-lg border-ellow-500 text-lg text-white  py-1  '>add to cart</button>
               <button onClick={()=>{productDispatch({payload:productContext[index*6+5]})}} className='w-1/3 border-2 border-yellow-500  rounded-lg border-ellow-500 text-lg text-gray-800 py-[1px]   '>Buy</button>
  
               </div>
            </div>
          </div>
      </div>

    </div>

  }





  return (
    <div >
      {
        buy ?
          <div className='flex justify-center items-center pt-15 h-screen border '>
            <div className='flex justify-start items-start  px-4 pb-2 border bg-white  w-1/2 rounded-xl shadow-xl mx-auto fixed '>
              <div className="flex flex-col justify-start items-end gap-y-3 ">
                <img src={product.imgUrl} className='w-[200px] h-[200px]' alt="" />
                <div className='flex justify-end items-center gap-x-3 '>
                  <button className='px-2 py-2 text-white bg-red1 text-lg rounded-xl cursor-pointer' onClick={confirmPurchase}>Confirm</button>
                  <button className='px-2 py-2 text-red1 bg-white text-lg rounded-xl border cursor-pointer' onClick={() => { setBuy(false) }}>Cancel</button>
                </div>
              </div>
              <div className="flex-col justify-start items-start px-5  h-full py-8 ">
                <p className='font-bold text-xl font-fontAY2 text-red1'>{product.price * quantityP}$</p>
                <div className='mt-7 gap-y-4 flex flex-col justify-start items-start'>
                  <p className='font-bold text-xl font-fontAY2'>{product.description}</p>
                  <div className='flex justify-start items-center gap-x-5'>
                    <div className='flex justify-start items-center gap-x-2'>
                      <p className=' text-lg font-fontAY2'>Quantity</p>
                      <p className=' text-lg font-fontAY2'>{quantityP}</p>
                    </div>
                    <div className='flex justify-start items-center gap-x-2'>
                      <p className=' text-lg font-fontAY2'>Toatal</p>
                      <p className=' text-lg font-fontAY2'>{product.price * quantityP}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          : ''
      }
      {product != null && !buy && !balanceError ?
        <div className='w-1/2 border-3  border-red1  fixed left-[300px] top-[300px] py-4 px-5 left-400 mx-auto rounded-xl bg-white flex justify-between items-center'>
          <MdCancel className='absolute right-[0] top-0 text-2xl cursor-pointer ' onClick={() => { productDispatch({ payload: null }) }} />
          <div className='text-3xl font-bold flex flex-col justify-center items-end  gap-y-3 w-2/3'>
            <div className='flex justify-between items-center w-full'>
              <div className='flex w-1/2  justify-start items-center gap-x-2 '>
                <p className='  text-sm text-red-600 flex justify-end'>Quantity</p>
                <input type="number" className='border rounded-lg px-2 text-gray-500 w-1/2 text-sm'
                  defaultValue={1}

                  onChange={(e) => {
                    if (e.target.value <= product.quantity) {
                      setQuantityP(e.target.value)
                    } else {
                      setQuantityP(product.quantity)
                    }
                  }}
                  value={quantityP}
                />
              </div>
              <p className=' w-1/4 text-2xl text-red-600 flex justify-end '>{product.price}$</p>

            </div>
            <div className='flex flex-col justify-start items-end '>
              <p className=' w-full text-xl  text-gray-500'>{product.description}</p>
              <div className='flex gap-x-2'>
                <p className='flex justify-end text-sm text-red1'>{product.quantity} </p>
                <span className='flex justify-end text-sm text-red1'>copies</span>
              </div>
            </div>
            <div className='flex justify-end items-center gap-x-3'>

              <p className='text-sm text-gray-500 '>Double your purchases and get discounts of up to 50%</p>
              <button className='rounded-xl px-4 py-2 text-white bg-red1 text-lg' onClick={() => { if (product.price * quantityP > user.balance) { setBalanceError(true) } else { setBuy(true); } }}>Buy</button>
            </div>
          </div>
          <img src={product.imgUrl} className='w-[200px] h-[200px]' alt="" />

        </div>
        : ''}
      <div className='py-10 mb-5'></div>
      {displayProducts(0)}

      {balanceError ?
        <div className='   rounded-lg shadow-lg flex flex-col justify-center items-center fixed left-1/4 gap-y-5 top-[300px] w-1/2 py-4 font-bold text-xl font-fontAY2 '>
          <p>You cant do this operation</p>
          <p>your balance is not enough</p>
          <b className='w-1/2 mx-auto py-2 text-white bg-red1 flex justify-center items-center rounded-lg'>  Recahrge your balance</b>
          <IoReturnUpBackOutline className='absolute top-1 left-1 text-red1 text-4xl font-bold cursor-pointer' onClick={() => { setBalanceError(false) }} />
        </div>
        : ''}


    </div>
  )
}

export default ProductsProfile
