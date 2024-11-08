import React, { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { ProductContext } from "../Context/ProductContext";
import { useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { CiHeart } from "react-icons/ci";
import { IoRemoveCircleOutline } from "react-icons/io5";


const ProductListe = () => {

  const {productContext,productListDispatch,product,productDispatch}=useContext(ProductContext);
  const {user,dispatch}=useContext(AuthContext);


const [productList,setProductList]=useState([]);
const [productListP,setProductListP]=useState([]);


useEffect(()=>{
  console.log(user)
  setProductList(productContext)
  setProductListP(productList)
  },[productContext,user]);
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






  const DisplayProduct=(index)=>{
    return [...Array(8)].map((_,i)=>{
      if(index*8+i < productList.length)
      {
        return <div key={index*8+i} className="col-span-1 border rounded-lg border-gray-500 pb-2">
        <div className="flex  flex-col justify-center items-center px-4 py-7 bg-gray-50 rounded-xl relative ">
          <img src={productList[index*8+i].imgUrl} className="w-[120px] h-[120px]" alt="" />
          <CiHeart className="text-lg absolute top-3 right-5"/>
        </div>
        <div className="w-full flex flex-col justify-start items-start pl-2">
          <div className="flex justify-between items-center w-full pr-3 pb-2">
          <p className="font-semibold">{productList[index*8+i].name}</p>
          <p className="font-semibold">{productList[index*8+i].price} $</p>
        
          </div>
          <p className="font-semibold text-gray-700 text-sm mb-2">{productList[index*8+i].description}</p>
        <div className="w-full  flex justify-between items-center pr-3">
        <button onClick={()=>{addToCart(productList[index*8+i]._id)}} className="rounded-lg px-2 py-1 bg-white text-black border  border-black hover:bg-orange-600 hover:border-none hover:text-white">Add cart</button>
        <button onClick={()=>{productDispatch({payload:productList[index*8+i]})}} className="rounded-lg px-2 py-1 bg-blue-600 text-white border-black hover:bg-blue-500 hover:border-none hover:text-white">Buy Now</button>

        </div>
        </div>
        </div>
      }else{
        return ''
      }

    });
    
  }
  const [productType,setProductType]=useState('all');
  useEffect(()=>{
    setProductPrice(0)
        const list=productContext.filter((product)=> product.productType == productType)
         setProductList(list)
         if(productType == 'all'){
          setProductList(productContext)
         }
  },[productType])

  

  const [productPrice,setProductPrice]=useState(0);
  useEffect(()=>{
    console.log(productPrice,productType)
          var list2;
         if(productPrice !== 0){
           if(productType !== 'all'){
            list2=productContext.filter((product)=>product.price<productPrice && product.productType===productType)
           }
           else{
            list2=productContext.filter((product)=>product.price<productPrice )

           }
         }
         else{
          if(productType !== 'all'){
            list2=productContext.filter((product)=> product.productType===productType)
           }
           else{
            list2=productContext;
           }
         }
          setProductList(list2)
        },[productPrice])

    
        
  return (
    <div className="w-full px-10 pt-2 " id="productsList">
      <div className="w-full flex justify-between items-center ">
        <div className="flex justify-start items-start gap-x-5 ">
          <div className="flex flex-col bg-gray-200 rounded-tr-lg rounded-tl-lg    text-md font-semibold  group">
              <div className="w-full flex justify-start items-center gap-x-3  px-3 group-hover:text-orange-600 cursor-pointer">
                <p>Product type</p>
                <FaAngleDown />
              </div>
              <div className="relative w-full hidden group-hover:flex z-3">
                <div className=" flex justify-start flex-col items-start bg-white w-full px-3 pb-4 rounded-br-lg rounded-bl-lg">
                      <a onClick={()=>{setProductType('all')}} href="#productsList" className="cursor-pointer hover:text-orange-600 hover:font-semibold">All products</a>

                       <a onClick={()=>{setProductType('Laptop')}} href="#productsList" className="cursor-pointer hover:text-orange-600 hover:font-semibold">Laptops</a>
                       <a onClick={()=>{setProductType('phone')}} href="#productsList" className="cursor-pointer hover:text-orange-600 hover:font-semibold">Phones</a>
                       <a onClick={()=>{setProductType('camera')}} href="#productsList" className="cursor-pointer hover:text-orange-600 hover:font-semibold">Cameras</a>
                       <a onClick={()=>{setProductType('watch')}} href="#productsList" className="cursor-pointer hover:text-orange-600 hover:font-semibold">Watches</a>

                </div>
              </div>
          </div>
          <div className="flex flex-col bg-gray-200 rounded-tr-lg rounded-tl-lg    text-md font-semibold  group">
            <div className="w-full flex justify-start items-center gap-x-3  px-3 group-hover:text-orange-600 cursor-pointer">
            <p>Price</p>
            <FaAngleDown />
            </div>
            <div className="relative w-full hidden group-hover:flex z-3">
                <div className=" flex justify-start flex-col items-start bg-white w-full px-3 pb-4 rounded-br-lg rounded-bl-lg">
                      <a onClick={()=>{setProductPrice(0)}} href="#productsList" className="cursor-pointer hover:text-orange-600 hover:font-semibold">All products</a>

                       <a onClick={()=>{setProductPrice(200)}} href="#productsList" className="cursor-pointer  w-full hover:text-orange-600 hover:font-semibold">- 200$</a>
                       <a onClick={()=>{setProductPrice(400)}} href="#productsList" className="cursor-pointer  w-full hover:text-orange-600 hover:font-semibold">-400$</a>
                       <a onClick={()=>{setProductPrice(600)}} href="#productsList" className="cursor-pointer  w-full hover:text-orange-600 hover:font-semibold">-600$</a>
                       <a onClick={()=>{setProductPrice(900)}} href="#productsList" className="cursor-pointer  w-full hover:text-orange-600 hover:font-semibold">-900$</a>

                </div>
              </div>
            
          </div>
          <div className="bg-gray-200 rounded-lg px-3 flex justify-start items-center gap-x-3 text-md font-semibold hover:text-orange-700 cursor-pointer">
            <p>Review</p>
            <FaAngleDown />
          </div>
          <div className="bg-gray-200 rounded-lg px-3 flex justify-start items-center gap-x-3 text-md font-semibold hover:text-orange-700 cursor-pointer">
            <p>Color</p>
            <FaAngleDown />
          </div>
          <div className="bg-gray-200 rounded-lg px-3 flex justify-start items-center gap-x-3 text-md font-semibold hover:text-orange-700 cursor-pointer">
            <p>Material</p>
            <FaAngleDown />
          </div>
          <div className="bg-gray-200 rounded-lg px-3 flex justify-start items-center gap-x-3 text-md font-semibold hover:text-orange-700 cursor-pointer">
            <p>Offers</p>
            <FaAngleDown />
          </div>
          <div className="bg-gray-200 rounded-lg px-3 flex justify-start items-center gap-x-3 text-md font-semibold hover:text-orange-700 cursor-pointer">
            <p>All filters</p>
            <FaAngleDown />
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg px-3 flex justify-start items-center gap-x-3 text-md font-semibold hover:text-orange-700 cursor-pointer">
            <p>Store by</p>
            <FaAngleDown />
          </div>
      </div>
      <div className="w-full">
         <p className="text-2xl font-bold mt-5 pb-3">Product for you !!</p>
         <div className="flex justify-start items-center gap-x-8">
           {productType!==  'all'?<div className="group cursor-pointer flex justify-between items-center gap-x-5 rounded-lg pr-1 pl-3 py-1 font-bold border border-orange-600 text-orange-600">
             <p>{productType}</p>
<IoRemoveCircleOutline onClick={()=>{setProductType('all')}} className="group-hover:text-black cursor-pointer"/>
           </div>:''}
           {productPrice!==  0?<div className="group font-bold  cursor-pointer flex justify-between items-center gap-x-5 rounded-lg pr-1 pl-3 py-1  border border-orange-600 text-orange-600">
             <p>- {productPrice} $</p>
<IoRemoveCircleOutline onClick={()=>{setProductPrice(0)}} className="group-hover:text-black "/>
           </div>:''}
         </div>
         <div className="grid grid-cols-4 gap-x-3 mt-5 gap-y-2 pb-5">
         {
          productList.length>0 ? DisplayProduct(0):''
         }
         </div>
        
          
      </div>
    </div>
  );
};

export default ProductListe;
