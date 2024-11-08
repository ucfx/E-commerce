import mongoose  from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const PurchaseShema=mongoose.Schema(
    {
        UserId:{
            requered:true,
            type:String
        },
        ProductId:{
            requered:true,
            type:String
        },
        PurchaseDate:{
            requered:true,
            type:String
            
        },
        Quantity:{
            requered:true,
            type:Number
        },
        Total:{
            type:Number,
            requered:true,
           
            default:0.0
        }
    }  ,  {
        timestamps:true, 
    }
);

export const purchase=mongoose.model('Purchase',PurchaseShema);