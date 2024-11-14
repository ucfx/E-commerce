import express from "express";
import { PORT,mongoDBURL  } from "./config.js";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";
import userRouter from "./routes/userRouter.js";
import PurchaseRoute from "./routes/PurchaseRoute.js";
import chatRoutes from './routes/chatRoutes.js'
import { user } from "./Models/UserModel.js";
import cartRoutes from "./routes/cartRoutes.js"
import cors from "cors"
 import { Server  } from "socket.io";
 import http from "http"
const app=express();
app.use(express.json())
const server = http.createServer(app);
app.use(cors())
server.listen(PORT,()=>{
    console.log(`app is listen to port ${PORT}`)
});

app.get('/',(request,response)=>{
    console.log('hello')
    return response.status(234).send('e-commerce project');
}) 


app.use('/product',productRoutes)
app.use('/chat',chatRoutes);

app.use('/user',userRouter)
app.use('/purchase',PurchaseRoute)
app.use('/cart',cartRoutes)

app.get('/:token',async (request,response)=>{
    try {
        const {token}=request.params;
     await user.updateOne({token:token},{$set:{isVerified:true}})
     response.redirect('http://localhost:5173/Singin');   
       return response.status(234).send('email verified successfully');
     
    } catch (error) {
        
    }
    
})




mongoose
.connect(mongoDBURL)
.then(()=>{
     console.log('app connected with DB ')
})
.catch((error)=>{
   console.log(error)
})

const io=new Server(server,{
    cors:{
        origin:'http://localhost:5173',
        credentials:true,
    }

})
global.onlineUsers=new Map();

io.on('connection',(socket)=>{

      global.checkSocket=socket;
      socket.on('add-user',(userId)=>{
        onlineUsers.set(userId,socket.id)
        console.log(`new user ${userId} ${socket.id}`)
        console.log(onlineUsers)
      })
      socket.on('send-message',(data)=>{
        const sendUsersSocket= onlineUsers.get(data.receiver);
        console.log(`message submit ${data.sender}  ${data.receiver}`)
        console.log(data)
        if(sendUsersSocket){
            io.to(sendUsersSocket).emit('message-recive',data)
            console.log(sendUsersSocket)
        }else {
            console.log(`No active connection for user ID: ${data.receiver}`);
          }
      })

      
})

