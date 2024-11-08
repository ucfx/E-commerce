import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { AuthContext } from "../Context/AuthContext";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { MdProductionQuantityLimits } from "react-icons/md";



import { SlBasket } from "react-icons/sl";

import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import ProductsProfile from "../components/ProductsProfile";
import { FaSearch } from "react-icons/fa";

import { useEffect } from "react";
import Purchases from "./Purchases";
import Basket from "../components/Basket";
import { BsCart4 } from "react-icons/bs";




const Buy = () => {

const [productSearched,setProductSearched]=useState([]);
const [searchValue,setSearchValue]=useState('');

const filterProduct=()=>{
   if(searchValue!='')
   {
    const result=productContext.filter(p=>{
      return p.description.includes(searchValue);
     })
     setProductSearched(result)
   }
   else{
    setProductSearched([])
   }
   
}

useEffect(()=>{
      filterProduct();
},[searchValue])

useEffect(()=>{
console.log(productSearched)
},[productSearched])



  const { product, productDispatch,productContext } = useContext(ProductContext);
  const { user, dispatch } = useContext(AuthContext);
  

  const [i, setI] = useState(1);

  const displayFiltredProduct=productSearched.map((product,key)=>{
    return <div key={key} className="w-full px-2 text-lg text-black hover:bg-gray-100 cursor-pointer" onClick={()=>{productDispatch({payload:product}),setSearchValue('')}}>
        {product.name} -- {product.productType}
    </div>

  })

  const handleChangeI=(par)=>{
     setI(par)
  }
  useEffect(()=>{console.log(i)},[i])
  return (
    <div>
      
      <div className="w-full px-2 flex justify-start items-center gap-x-14 bg-gray-100 fixed top-0 ">
        <div className="flex justify-start items-center gap-x-4 py-2">
          <p className="text-lg font-bold">AY-STORE</p>

          <Link to={"/"} className="text-lg font-bold hover:text-red1 ">
            HOME
          </Link>
        </div>
        <div className="flex justify-start items-center gap-x-9">
              <div className=" flex  justify-start items-center gap-x-5">  
                <MdEmail className="text-2xl" />
              <p className="text-gray-600 text-xl">{user.email}</p></div>
              <div className=" flex  justify-start items-center gap-x-5"> 
                 <FaUser className="text-2xl" />
              <p className="text-gray-600 text-lg">{user.name}</p></div>
              <div className="flex  justify-start items-center gap-x-5">  
                <HiMiniCurrencyDollar className="text-2xl" />
              <p className="text-gray-600 text-xl">{user.balance}</p></div>
              <div className=" flex  justify-start items-center gap-x-5"> 
                 <MdProductionQuantityLimits className="text-2xl" />
              <p className="text-gray-600 text-lg">{user.name}</p></div>
        </div>
      </div>
      
      <div className={`flex justify-start items-center top-11 w-full gap-x-5 fixed bg-gray-50 z-10 `}>
        <div className="w-1/3 flex justify-start items-center ">
        <div
          className={`cursor-pointer flex flex-col justify-center items-center text-yellow-600 hover:border-b hover:border-b-gray-200 rounded-full px-10 py-2 ${
            i == 1 ? "border-b border-b-200" : ""
          }`}
          onClick={() => {
            setI(1);
          }}
        >
          <MdOutlineProductionQuantityLimits className="text-xl" />
          <p className="font-bold cursor-pointer text-lg text-gray-800">
            Products
          </p>
        </div>
        <div
          className={`flex flex-col justify-center items-center text-yellow-600 cursor-pointer hover:border-b hover:border-b-gray-200 rounded-full px-10 py-2 ${
            i == 2 ? "border-b border-b-gray-200" : ""
          }`}
          onClick={() => {
            setI(2);
          }}
        >
          <FaFileInvoiceDollar className="text-xl" />
          <p  className="font-bold cursor-pointer text-lg text-gray-800">
            Purchases
          </p>
        </div>
        <div
          className={`flex flex-col justify-center items-center text-yellow-600 cursor-pointer hover:border-b hover:border-b-gray-200 rounded-full px-10 py-2 ${
            i == 3 ? "border-b border-b-gray-200" : ""
          } `}
          onClick={() => {
            setI(3);
          }}
        >
          <BsCart4 className="text-xl" />

          <p className="font-bold cursor-pointer text-lg text-gray-800 ">
            Cart
          </p>
        </div>
        </div>
        <div className=" flex justify-center items-center gap-x-2 w-1/2  "> 
             <FaSearch className="text-xl"/> 
             <div className="w-1/2 flex flex-col justify-start items-start">
             <input value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}} type="text" className="rounded-full  py-2 border w-full px-4 text-lg" placeholder="serach for product " />
             <div className={`w-full relative   py-2 ${productSearched.length>0? 'flex':'hidden'}` }>
                  <div className="absolute w-full  z-10 bg-white border-2 rounded-xl overflow-y-scroll h-[100px]">
{displayFiltredProduct}
                  </div>
             </div>
             </div>
        </div>
        
        
       
      </div>
     
      {i==1 ?<ProductsProfile />:
        i==2?<Purchases/>:
          i==3?<Basket handleChangeI={handleChangeI}/>:''
        
      }
      
        
    </div>
  );
};

export default Buy;
