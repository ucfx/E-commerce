import React, { useContext, useEffect } from "react";
import Home from "./pages/Home";
import Buy from "./pages/Buy.jsx";
import Singin from "./pages/Singin.jsx";
import { Routes, Route,Router, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Singup from "./pages/Singup.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import DeleteProduct from "./pages/DeleteProduct.jsx";
import UpdateProduct from "./pages/UpdateProduct.jsx";
import NewProduct from "./pages/newProduct.jsx";
import Purchases from "./pages/Purchases.jsx";
import AccountActivate from "./pages/AccountActivate.jsx";
import { ProductContext } from "./Context/ProductContext.jsx";
import axios from "axios";
import Test from "./pages/test.jsx"
import Account from "./pages/Account.jsx";
import Contact from "./components/Contact.jsx";
import Contacts from "./components/Contacts.jsx";
import { UserAccount } from "./pages/userAccount.jsx";
const App = () => {

  const { product, productDispatch,productContext,productListDispatch }=useContext(ProductContext);
  useEffect(()=>{
    axios
    .get('http://localhost:5555/product')
    .then((response)=>{
      console.log(response.data.data)
        productListDispatch({type:'initialize',payload:{products:response.data.data}})
        
    })
    .catch((error)=>{
console.log(error)
    })
    
  },[])
  useEffect(()=>{console.log(productContext)},[productContext])
  return (
    
 <Routes>
   <Route path="/" element={<Account />}/>
   <Route path="/userAccount" element={<UserAccount />}/>

   <Route path="/Contact/:itemP" element={<Contacts />}/>
   <Route path="/test" element={<Test />}/>
   <Route path="/admin" element={<AdminDashboard />}/>
   <Route path="/Buy" element={<Account />}/>
   <Route path="/Singin" element={<Singin />}/>
   <Route path="/Singup" element={<Singup />}/>
   <Route path="/product/delete/:id" element={<DeleteProduct />}/>
   <Route path="/product/update/:id" element={<UpdateProduct />}/>
   <Route path="/product/new" element={<NewProduct />}/>
   <Route path="/purchases/:id" element={<Purchases />}/>
   <Route path="/accountActivate" element={<AccountActivate />}/>




</Routes>
      

    
   

    
  );
};

export default App;
