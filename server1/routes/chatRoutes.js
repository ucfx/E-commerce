import { chat } from "../Models/ChatModel.js";
import express from 'express';

const route=express.Router();

route.post('/',async (request,response)=>{
    const {msg,sender,receiver}=request.body;
    try {
        const newMsg=await chat.create({message:msg,sender,receiver});
        console.log('msg add successfully')
        response.status(201).send({msg:newMsg})
        
    } catch (error) {
        console.log(error)
        
    }
});

route.get('/:id',async (request,response)=>{
    const {id}=request.params;
    try {
        const messages=await chat.find({$or:[{receiver:id},{sender:id}]});
       
        response.status(201).send({messages})
        
    } catch (error) {
        console.log(error)
        
    }
});
export default route;