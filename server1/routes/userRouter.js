import {user} from "../Models/UserModel.js";
import mongoose from "mongoose";
import express from "express";
import jwt from 'jsonwebtoken';

const route =express.Router();
const SECRET="agdjikxnbvcydhipzjk";

const createToken=(_id)=>{
     return jwt.sign({_id},SECRET,{expiresIn:'3d'})
}


route.get('/',async (request,response)=>{
    try {
        const users=await user.find({})
        return response.status(201).json({
            count:users.length,
            data:users
        })
    } catch (error) {
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})


route.post('/login',async (request,response)=>{
    const {email,password}=request.body;
    try {
        const userLogin=await user.login(email,password);
        const token=createToken(userLogin._id);
        if(userLogin==1){
response.redirect('http://localhost:5173/accountActivate')
        }else{
            response.status(200).json({email,name:userLogin.name,isAdmin:userLogin.isAdmin,birthDate:userLogin.birthDate,token,balance:userLogin.balance,userId:userLogin._id})

        }
    } catch (error) {
        response.status(400).json({error:error.message})


    }
})

route.post('/singup',async (request,response)=>{

    const {name,email,password,passwordConfirm,birthDate,isAdmin}=request.body

    try {
        
        const userCreate= await user.singup(name,email,password,passwordConfirm,birthDate,isAdmin)
       
        if(await user.verifyEmail(email,userCreate.token)){
            response.status(200).json({email,name,birthDate,isAdmin,balance:userCreate.balance,userId:userCreate._id})

        }
else{
    response.status(200).json({error:'email mssg false'})

}
    } catch (error) {
        response.status(400).json({error:error.message})

    }
})

export default route;