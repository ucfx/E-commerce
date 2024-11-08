import mongoose from "mongoose";
import {product} from "../Models/productModel.js";
import express from "express"

const route =express.Router();

//insert a new product
route.post('/',async (request,response)=>{
    try {
        if(
            !request.body.name||
            !request.body.description||
            !request.body.productType||
            !request.body.price||
            !request.body.quantity||
            !request.body.imgUrl
        ){
return response.status(400).send({message:'send all product attributs please'})
        }
        const newProduct={
            name:request.body.name,
            description:request.body.description,
            productType:request.body.productType,
            price:request.body.price, 
            quantity:request.body.quantity,
            imgUrl:request.body.imgUrl
        };
        const product_create=await product.create(newProduct);
        response.status(201).send(product_create)
      

     } catch (error) {
        console.log(error.message)
        response.status(500).send({message:error.message})
     }
})
//show all product
route.get('/',async (request,response)=>{
    try {
        const products=await product.find({})
        return response.status(201).json({
            count:product.lenght,
            data:products
        })
    } catch (error) {
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})


route.get('/:id',async (request,response)=>{
    try {
        const {id}=request.params;
        const product_find=await product.findById(id);
        return response.status(201).json(product_find)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message})
    }
   
})
/
//update a  product


route.put('/:id',async (request,response)=>{
    try {
        const {id}=request.params;
        if(
            !request.body.name||
            !request.body.description||
            !request.body.price
        ){
             return response.status(400).send({message:'please enter all champs to update'})
        }else{
            const product_update=await product.findByIdAndUpdate(id,request.body);
            if(!product_update){
                return response.status(400).json({message:'product not found'})
            }
            return response.status(200).send({message:'product updated successfily'})
        }
    } catch (error) {
        console.log(errro.message)
        response.status(500).send({message:error.message})
    }
})

//delete a product
route.delete('/:id',async (request,response)=>{
    try {
        const {id}=request.params;
        const product_delete=await product.findByIdAndDelete(id);
        if(!product_delete){
            response.status(404).json({message:'product not found'})
        }
        return response.status(200).send({message:'product deleted successfully'})
    } catch (error) {
        response.status(500).send({message:error.message})
    }
})

export default route;