import {purchase} from'../Models/PurchaseModel.js';
import express from 'express'
import jwt from 'jsonwebtoken';
import { product } from '../Models/productModel.js';
import { cart } from '../Models/Cart.js';
import { user } from '../Models/UserModel.js';


const route=express.Router();

route.post('/',async (request,response)=>{
    const {userId,productId,quantityP,Total}=request.body;
    const DateN=new Date();
    const day = ("0" + DateN.getDate()).slice(-2); // Ensure 2 digits for day
  const month = ("0" + (DateN.getMonth() + 1)).slice(-2); // Ensure 2 digits for month
  const year = DateN.getFullYear(); // Get full year
  const purchasDate=`${day}/${month}/${year}`;
    try {
        const purchaseCreate=await purchase.create({UserId:userId,ProductId:productId,PurchaseDate:purchasDate,Quantity:quantityP,Total})
          const userAuth=await user.updateOne({_id:userId},{$inc:{balance:-Total}})
          const newUser=await user.findById(userId)
          const productBuy=await product.updateOne({_id:productId},{$inc:{quantity:-quantityP}})
        return response.status(201).json({purchaseCreate,newBalance:newUser })
    } catch (error) {
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})


route.post('/byCart',async (request,response)=>{
    console.log('eloo')
    const {userId,cartProduct,quantities,products,total}=request.body;
    const DateN=new Date();
    const day = ("0" + DateN.getDate()).slice(-2); // Ensure 2 digits for day
    const month = ("0" + (DateN.getMonth() + 1)).slice(-2); // Ensure 2 digits for month
    const year = DateN.getFullYear(); // Get full year
    const purchasDate=`${day}/${month}/${year}`;
    try {
        var i;
        for( i=0;i<cartProduct.length;i++){
            const productP=await product.findById(cartProduct[i].productId)
            const purchaseCreate=await purchase.create({UserId:userId,ProductId:cartProduct[i].productId,PurchaseDate:purchasDate,Quantity:quantities[i],Total:quantities[i] * productP.price})
            const deleteFromCart=await cart.findByIdAndDelete(cartProduct[i]._id)
            const productUpdate=await product.updateOne({_id:productP._id},{$inc:{quantity:-quantities[i]}})
            
        }
        const userUp=await user.updateOne({_id:userId},{$inc:{balance:-total}})
        const userBUP=await user.findOne({_id:userId})
        return response.status(201).json({message:'all cart product are buying',newBalance:userBUP.balance })
    } catch (error) {
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})

route.get('/',async (request,response)=>{
    
    try {
        const purchases= await purchase.find();
        return response.status(201).json({purchases})
    } catch (error) {
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})

export default route;