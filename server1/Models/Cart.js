import mongoose, { Types } from "mongoose";

const CartShema=mongoose.Schema({
    userId:{
        type:String,
        requered:true
    },
    productId:{
        type:String,
        requered:true
    },
},  {
    timestamps:true, 
}
);
export const cart=mongoose.model('cart',CartShema);