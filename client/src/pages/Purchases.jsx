import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useInRouterContext } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { ProductContext } from "../Context/ProductContext";
const Purchases = () => {
  const [purchases, setPurchases] = useState([]);
  const { user } = useContext(AuthContext);
  const [userPurchases, setUserPurchases] = useState([]);
  const { productContext } = useContext(ProductContext);

  useEffect(() => {
    const userPurchasesF = purchases.filter((p) => {
      return p.UserId == user.userId;
    });
    setUserPurchases(userPurchasesF);
    console.log(purchases);
  }, [purchases]);

  const getProductDetails = (id) => {
    return productContext.find((p) => p._id == id);
  };

  

  const [purchaseIndex,setPurchaseIndex]=useState(0);
  var purchaseNumber=Math.floor(userPurchases.length/5);
if(purchaseNumber%5!=0){
  purchaseNumber++;
}

  const displayPurchases = (index, r) => {
    if(index+r<userPurchases.length){
      const product = getProductDetails(userPurchases[index+r].ProductId);
      console.log(product)
      if(product!=null){
        return (
          <div className="grid grid-cols-6 text-lg font-bold mb-2 " key={index*5+r}>
            <div className="col-span-2 flex justify-start items-center gap-x-2">
              <img src={product.imgUrl} className="w-[100px] h-[100px]" alt="" />
              <p>{product.name}</p>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              {product.price}$
            </div>
            <div className="col-span-1 flex justify-center items-center">
              {userPurchases[index+r].Quantity}
            </div>
            <div className="col-span-1 flex justify-center items-center">
              {userPurchases[index+r].Total} $
            </div>
            <div className="col-span-1 flex justify-center items-center">
              {userPurchases[index+r].PurchaseDate}
            </div>
          </div>
        );
      }
      
    }else{
      return ''
    }
   
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5555/purchase`)
      .then((response) => {
        setPurchases(response.data.purchases);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="mt-20 py-20  w-full px-2 mx-auto border">
      <div className="grid grid-cols-6 mb-5 text-xl font-bold py-1 bg-gray-200">
        <div className="  col-span-2 flex justify-center items-center">
          Product
        </div>
        <div className="  col-span-1 flex justify-center items-center">
          Unite price
        </div>
        <div className="  col-span-1 flex justify-center items-center">
          Quantity
        </div>
        <div className="  col-span-1 flex justify-center items-center">
          Total
        </div>
        <div className="  col-span-1 flex justify-center items-center">
          Date
        </div>
      </div>
      {userPurchases.length > 0 ?
  [...Array(5)].map((_, i) => displayPurchases(purchaseIndex*5, i)) 
  : ''
}
      <div className="w-full border flex justify-between items-center px-3 py-2">
        <button onClick={()=>{if(purchaseIndex!=0){setPurchaseIndex(purchaseIndex-1)}}} className={`px-2 py-1 rounded-md text-md text-white font-bold   ${purchaseIndex==0?'cursor-default bg-gray-400':'cursor-pointer bg-red-600'} `}>Previous</button>
        <button onClick={()=>{if(purchaseIndex*5+5<userPurchases.length){setPurchaseIndex(purchaseIndex+1)}}} className={`px-2 py-1 rounded-md text-md text-white font-bold   ${purchaseIndex*5+5>=userPurchases.length?'cursor-default bg-gray-400':'cursor-pointer bg-blue-600'} `}>Next</button>
      </div>
    </div>
  );
};

export default Purchases;
