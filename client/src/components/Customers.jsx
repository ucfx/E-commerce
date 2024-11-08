import React, { useEffect } from "react";
import { useState } from "react";
const Customers = ({ users }) => {
  console.log(users);
  const [index, setIndex] = useState(0);
  const ListNumber =Math.floor(users.length / 11) +1

  useEffect(()=>{
    console.log(ListNumber)
  },[index])
  const previous=()=>{
    if(index!=0){
      setIndex(index-1)
    }
  }

  const next=()=>{
    if(index != (ListNumber-1)){
      setIndex(index+1)
    }
  }

  const displayCustomer=(i,n)=>{
    if(11*i+n<users.length){
        return <div className="flex justify-start items-center gap-x-3 w-full py-1 border-b ">
        <h1 className="text-gray-900 font-bold w-1/5">{users[i*11+n].name}</h1>
        <h1 className="text-gray-900 font-bold w-1/5">{users[i*11+n].email}</h1>
        <h1 className="text-gray-900 font-bold w-1/5">{users[i*11+n].birthDate}</h1>

        <h1 className="text-gray-900 font-bold w-1/5">{users[i*11+n].Balance}</h1>
        <button className="px-3 py-2 text-white font-bold bg-green-500 rounded-lg">Purchases</button>
        <button className="px-3 py-2 text-white font-bold bg-red-500 rounded-lg">Delete</button>
        
      </div>
    }
    else{
        return ''
    }
  }

  return (
    <div className="h-[screen] w-[80%] py-2 flex flex-col justify-start items-start gap-y-5 ">
      <h1 className="font-bold font-fontAY2 text-gray-700 text-3xl ">
        Customers
      </h1>
      <div className="flex flex-col justify-start items-center gap-y-1 w-full  ">
        <div className="flex justify-start items-center gap-x-3 w-full py-1 border-b ">
          <h1 className="text-gray-900 font-bold w-1/5">Name</h1>
          <h1 className="text-gray-900 font-bold w-1/5">Email</h1>
          <h1 className="text-gray-900 font-bold w-1/5">Birth Date</h1>

          <h1 className="text-gray-900 font-bold w-1/5">Balance</h1>
        </div>
        {displayCustomer(index,0)}
        {displayCustomer(index,1)}
        {displayCustomer(index,2)}
        {displayCustomer(index,3)}
        {displayCustomer(index,4)}
        {displayCustomer(index,5)}
        {displayCustomer(index,6)}
        {displayCustomer(index,7)}
        {displayCustomer(index,8)}
        {displayCustomer(index,9)}
        {displayCustomer(index,10)}

        <div className="w-full px-2 flex justify-between items-center ">
          <button onClick={previous} className={`px-3 py-2 text-white rounded-lg font-bold ${index==0?'bg-gray-300':'bg-gray-700 hover:bg-gray-900'}`}>Previous</button>
          <button onClick={next} className={`px-3 py-2 text-white rounded-lg font-bold ${index==ListNumber-1?'bg-gray-300':'bg-gray-700 hover:bg-gray-900'}`}>Next</button>
      </div>
              
      </div>
      
    
    </div>
  );
};

export default Customers;
