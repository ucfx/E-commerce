import React, { createContext, useReducer, useContext } from 'react';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';

export const ProductContext = createContext();

export const productDispatcher = (state, action) => {
  return { product: action.payload };
};

export const productListDispatcher= (state, action) => {
  var newTAB;
  switch(action.type){
    case 'updateOne':
        newTAB=state.map((p,i)=>{
         if(p ==action.payload.product){
          return {...p,quantity:p.quantity-action.payload.quantity}
         } 
         return p;
       })
       return newTAB;
       case 'initialize' :
            return  action.payload.products;
       default :
       return state     

     
            
      
  }
};


export const ProductContextProvider = ({ children }) => {
   const [productContextFr,setProductContext]=useState()




  const [productState, productDispatch] = useReducer(productDispatcher, { product: null });
  const [productContext, productListDispatch] = useReducer(productListDispatcher,[] );

  return (
    <ProductContext.Provider value={{ ...productState, productDispatch,productContext,productListDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};


