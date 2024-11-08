import React from 'react'
import { Link } from 'react-router-dom'

const AccountActivate = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-gray-300)'>
         <div className='flex flex-col justify-center items-center gap-y-4 py-10 rounded-xl shadow-lg bg-white relative  w-1/2'>
            <img className=''  src='https://i.pinimg.com/564x/0b/37/08/0b3708dfbb8f16c4ea3b80b374765159.jpg'/>
             <p className='text-xl text-green-500 font-fontAY2 font-bold'>we have sent email to your account</p>
             <p className='text-xl text-green-500 font-fontAY2 font-bold'>check your email and activate your account</p>
<Link to={'/Singin'} className="absolute top-3 font-bold left-3 text-xl font-fontAY2 text-green-500">Sign in</Link>
         </div>
    </div>
  )
}

export default AccountActivate
