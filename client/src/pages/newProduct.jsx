import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const NewProduct = () => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [productType, setProductType] = useState('computer');
const navigate=useNavigate()


  const handleSubmit=(e)=>{
    e.preventDefault()
    axios
    .post('http://localhost:5555/product',{name,description,price,quantity,productType,imgUrl})
    .then(()=>{
navigate('/admin')
    })
    .catch((error)=>{
console.log(error)
    })
  }

  return (
    <div className="flex justify-center items-start py-10 h-screen w-full bg-gray-100">
    <div className="w-4/5 mx-auto rounded-xl shadow-xl flex flex-col justify-center px-5 py-5 gap-y-20 bg-white ">
      <div className="flex flex-col justify-center items-center gap-y-4">
        <h1 className="font-bold font-fontAY2 text-gray-500 text-2xl">
          Update Product
        </h1>
        <div className="border-2 border-gray-500 w-[300px] rounded-lg"></div>
      </div>
      <form onSubmit={handleSubmit} action="" className="flex flex-col justify-start items-start px-5 gap-y-4">
        <div className="flex justify-start items-center gap-x-3 w-full">
            <label htmlFor="" className="w-1/6 font-bold font-fontAY2 text-black text-lg">name</label>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} className="px-3 py-1 rounded-lg text-black border border-black font-bold font-fontAY2" />
        
        </div>
        <div className="flex justify-start items-center gap-x-3 w-full">
            <label htmlFor="" className="w-1/6 font-bold font-fontAY2 text-black text-lg">description</label>
            <input type="text" onChange={(e)=>{setDescription(e.target.value)}} value={description} className="px-3 py-1 rounded-lg text-black border border-black font-bold font-fontAY2" />
        
        </div>
        <div className="flex justify-start items-center gap-x-3 w-full">
            <label htmlFor="" className="w-1/6 font-bold font-fontAY2 text-black text-lg">Type</label>
            <select type="text" onChange={(e)=>{setProductType(e.target.value); console.log(productType)} } className="px-14 py-1 rounded-lg text-black border border-black font-bold font-fontAY2" >
              <option className="px-3 py-1 rounded-lg text-black border border-black font-bold font-fontAY2" value="computer">Laptop</option>
              <option className="px-3 py-1 rounded-lg text-black border border-black font-bold font-fontAY2" value="phone">Phone</option>
              <option className="px-3 py-1 rounded-lg text-black border border-black font-bold font-fontAY2" value="watch">Watch</option>
              <option className="px-3 py-1 rounded-lg text-black border border-black font-bold font-fontAY2" value="camera">Camera</option>

            </select>
        
        </div>
        <div className="flex justify-start items-center gap-x-3 w-full">
            <label htmlFor="" className="w-1/6 font-bold font-fontAY2 text-black text-lg">quantity</label>
            <input type="text" onChange={(e)=>{setQuantity(e.target.value)}} value={quantity} className="px-3 py-1 rounded-lg text-black border border-black font-bold font-fontAY2" />
        
        </div>
        <div className="flex justify-start items-center gap-x-3 w-full">
            <label htmlFor="" className="w-1/6 font-bold font-fontAY2 text-black text-lg">price</label>
            <input type="text" onChange={(e)=>{setPrice(e.target.value)}} value={price} className="px-3 py-1 rounded-lg text-black border border-black font-bold font-fontAY2" />
        
        </div>
        <div className="flex justify-start items-center gap-x-3 w-full">
            <label htmlFor="" className="w-1/6 font-bold font-fontAY2 text-black text-lg">image</label>
            <input type="text" onChange={(e)=>{setImgUrl(e.target.value)}} value={imgUrl} className="px-3 py-1 rounded-lg text-black border border-black font-bold font-fontAY2" />
        
        </div>
        <div className="flex justify-start items-center px-2 gap-x-4 ">
        <button type="submit" className="px-3 py-2 hover:bg-green-400 text-white font-bold font-fontAY2 rounded-lg bg-green-500">Create</button>
<button className="px-3 py-2 hover:bg-red-400 text-white font-bold font-fontAY2 rounded-lg bg-red-500">Cancel</button>
 
     </div>
       
      </form>
      
    </div>
    </div>
  )
}

export default NewProduct;