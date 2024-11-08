import mongoose  from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
import nodemailer from "nodemailer"
import crypto from 'crypto';
 


const userShema=mongoose.Schema(

    {
        name:{
            type:String,
            requered:true
        },
        familyName:{
            type:String,
            requered:false
        },
        email:{
            type:String,
            requered:true
        },
        isAdmin:{
            type:Boolean,
            requered:true
        },
        token:{
         type:String,
         requered:true
        },
        isVerified:{
            type:Boolean,
            default:false,
            requered:true
           },
        password:{
            type:String,
             requered:true
        },
        birthDate:{
            type:Date,
            requered:true
        },
        balance:{
            type:Number,
            requered:true,
            default:0.0
        }
      
    }
    ,  {
        timestamps:true, 
    }
);

userShema.statics.verifyEmail = async function(email, link) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'anteuryounes12@gmail.com', // Your Gmail email
          pass: 'outc eail iamy imaz',   // Your Gmail app password (or OAuth2)
        },
      });
  
      await transporter.sendMail({
        from: 'anteuryounes12@gmail.com',
        to: email,
        subject: 'Email Verification',
        text: `Welcome ${email}`,
        html: `
          <div>
            <p>Please verify your email by clicking the link below:</p>
            <a href='http://localhost:5555/${link}'>click here to active your  <span className='font-fontAY2 text-xl text-red1'>AY-Store account</span></a>
          </div>
        `
      });
  
      console.log('Email sent successfully');
      return true
    } catch (error) {
        console.error('Error sending email:', error); // log error to understand it

     return false
    }
  };


userShema.statics.singup=async function (name,email,password,passwordConfirm,birthDate,isAdmin){

    if(!name || !email || !password || !birthDate ){
        throw Error('all fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(password!=passwordConfirm){
        throw Error('Error confirming password')

    }
 

    const exist=await this.findOne({email})
    if(exist ){
        if(exist.isVerified){
            throw Error('Email already exist')

        }
    }
    const salt=await bcrypt.genSalt(10)
    const hash=await bcrypt.hash(password,salt)
    const token=crypto.randomBytes(16).toString('hex');
    const user=await this.create({name,email,isAdmin,password:hash,birthDate,balance:0,token:token})
    
    return user

}

userShema.statics.login=async function(email,password){
    if(!email || !password){
        throw Error('all fields must be filled')
    }
    const user=await this.findOne({email})
    if(!user){
        throw Error('Incorrect email')
    }
    
    const match=await bcrypt.compare(password,user.password)
    if(!match){
        throw Error('Incorrect password')
    }
    if(!user.isVerified){
        try {
            const transporter = nodemailer.createTransport({
              service: 'Gmail',
              auth: {
                user: 'anteuryounes12@gmail.com', // Your Gmail email
                pass: 'outc eail iamy imaz',   // Your Gmail app password (or OAuth2)
              },
            });
        
            await transporter.sendMail({
              from: 'anteuryounes12@gmail.com',
              to: email,
              subject: 'Email Verification',
              text: `Welcome ${email}`,
              html: `
                <div>
                  <p>Please verify your email by clicking the link below:</p>
                  <a href='http://localhost:5555/${user.token}'>click here to active your  <span className='font-fontAY2 text-xl text-red1'>AY-Store account</span></a>
                </div>
              `
            });
        
           
          } catch (error) {
              console.error('Error sending email:', error); // log error to understand it
      
           
          }
          throw Error('check your email and activate your account')

    }

    return user;
}


export const user =mongoose.model('User',userShema);

