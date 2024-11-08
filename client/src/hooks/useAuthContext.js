import { AuthContext } from "../Context/AuthContext.jsx";
import { useContext } from "react";

export const UseAuthContext=()=>{
const context=useContext(AuthContext)

if(!context){
     throw Error('context not found')
}



    return context
}