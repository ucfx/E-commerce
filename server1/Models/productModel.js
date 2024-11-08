import mongoose  from "mongoose";


const productShema=mongoose.Schema(

    {
        name:{
            type:String,
            requered:true
        },
        quantity:{
            type:Number,
            requered:true
        },
        productType:{
            type:String,
            requered:true
        },
        description:{
            type:String,
             requered:true
        },
        imgUrl:{
            type:String,
             requered:true
        },
        price:{
            type:Number,
            requered:true
        }
      
    }
    ,  {
        timestamps:true, 
    }
);

export const product =mongoose.model('Cat',productShema);

