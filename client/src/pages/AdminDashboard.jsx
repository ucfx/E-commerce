import React, { useContext, useEffect, useState } from "react";
import { FcElectronics } from "react-icons/fc";
import AdminProducts from "../components/AdminProducts";
import axios from "axios";
import Customers from "../components/Customers";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
const AdminDashboard = () => {
  const [box, setBox] = useState(0);
  const [products,setProducts]=useState([])
  const [users,setUsers]=useState([])
  const {user,dispatch}=useContext(AuthContext);
  const navigate=useNavigate()

  const logOut=()=>{
     dispatch({type:'LOGOUT'})
navigate('/')
  }

  useEffect(()=>{
    if(user==null){
      navigate('/')
    }else{
      if(user.isAdmin==false){
        navigate('/')
      }
    }
   
    
    axios
    .get("http://localhost:5555/product")
    .then((response) => {
      setProducts(response.data.data);
      console.log(users)
    })
    .catch((error) => {
      console.log(error);
    });




    axios
    .get("http://localhost:5555/user")
    .then((response) => {
      setUsers(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });

}, []);
useEffect(()=>{
  console.log(box)
},[box]

)

useEffect(()=>{
  console.log(users)
},[users]

)

  return (
    <div className="flex justify-start items-start  gap-x-5  ">
      <div className="h-screen bg-yellow-300 flex flex-col justify-between items-center py-8 px-8 rounded-lg">
        
        <div className="flex flex-col justify-start items-center gap-y-20">
        <div className="flex justify-center items-center gap-x-2">
          <FcElectronics className="text-2xl" />
          <h1 className="font-bold font-fontAY2 text-white text-xl">AY-SHOP</h1>
        </div>
        <div className="flex flex-col justify-between items-center gap-y-5">
             <h1 className={`text-xl font-bold font-fontAY2 ${box==0? 'text-red1':'text-gray-600 hover:text-red1'} cursor-pointer `} onClick={()=>{setBox(0)}}>Products</h1>
             <h1 className={`text-xl font-bold font-fontAY2 ${box==1?'text-red1':'text-gray-600 hover:text-red1'} cursor-pointer `} onClick={()=>{setBox(1)}}>Customers</h1>
             <h1 className={`text-xl font-bold font-fontAY2 ${box==2?'text-red1':'text-gray-600 hover:text-red1'} cursor-pointer `} onClick={()=>{setBox(2)}}>Sales</h1>
             <h1 className={`text-xl font-bold font-fontAY2 ${box==3?'text-red1':'text-gray-600 hover:text-red1'} cursor-pointer `} onClick={()=>{setBox(3)}}>Offers</h1>
             <h1 className={`text-xl font-bold font-fontAY2 ${box==4?'text-red1':'text-gray-600 hover:text-red1'} cursor-pointer `} onClick={()=>{setBox(4)}}>Laptops</h1>
             <h1 className={`text-xl font-bold font-fontAY2 ${box==5?'text-red1':'text-gray-600 hover:text-red1'} cursor-pointer `} onClick={()=>{setBox(5)}}>Phones</h1>
             <h1 className={`text-xl font-bold font-fontAY2 ${box==6?'text-red1':'text-gray-600 hover:text-red1'} cursor-pointer `} onClick={()=>{setBox(6)}}>Watches</h1>
             <h1 className={`text-xl font-bold font-fontAY2 ${box==7?'text-red1':'text-gray-600 hover:text-red1'} cursor-pointer `} onClick={()=>{setBox(7)}}>Cameras</h1>


            
        </div>
        </div>
        
        <h1 className={`text-xl font-bold font-fontAY2 text-gray-600 hover:text-red1 cursor-pointer `} onClick={logOut}>Logout</h1>
      </div>
      {
        products.length>0 ?
        box==0?<AdminProducts products={products}  product={0}/>:
        box==1?<Customers users={users}/>:
        box==2?<AdminProducts products={products}  product={0}/>:
        box==3?<AdminProducts products={products}  product={0}/>:
        box==4?<AdminProducts products={products}  product={0}/>:
        box==5?<AdminProducts products={products}  product={1}/>:
        box==6?<AdminProducts products={products}  product={2}/>:
        box==7?<AdminProducts products={products}  product={3}/>:'':''
        
      }
    </div>
  );
};

export default AdminDashboard;
