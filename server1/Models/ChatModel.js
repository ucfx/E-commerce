import mongoose, { Types } from "mongoose"

const chatShema=mongoose.Schema({
    message:{
        type:String,
        requered:true
    },
    sender:{
        type:String,
        requered:true
    },
    receiver:{
        type:String,
        requered:true
    }

},{
    timestamps:true,
}
);
export const chat=mongoose.model('chat',chatShema);