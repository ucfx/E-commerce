import mongoose from "mongoose";
import { cart } from "../Models/Cart.js";
import  express from "express"

const route=express.Router();

route.post('/',async(request,response)=>{
    try {
        const {userId,productId}=request.body;
        const newCart=await cart.create({userId,productId})
        console.log('product add to cart')
        response.status(201).send({cart:newCart,message:'product add to cart'})
    } catch (error) {
        console.log(error)
        response.status(500).send({message:error.message})
    }
});
route.get('/:id',async(request,response)=>{
    try {
        const {id}=request.params;
        const cartProducts=await cart.find({userId:id})
        console.log('success')
        response.status(201).send({cartProducts,message:'user cart is get from db'})
    } catch (error) {
        console.log(error)
    }
})
route.delete('/:id',async(request,response)=>{
    try {
        
        const {id}=request.params;
        const cartProducts=await cart.findByIdAndDelete(id)
        console.log('product deleted well from cart ')
        response.status(201).send({message:'product delete from cart',cartProducts})
    } catch (error) {
        console.log(error)
    }
})
export default route;