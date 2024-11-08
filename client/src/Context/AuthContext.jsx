import { createContext,useReducer } from "react";

export const AuthContext=createContext();

export const authReducer=(state,action)=> {
     switch(action.type){
        case'LOGIN':

          return {user:action.payload}

          case 'LOGOUT':
            localStorage.setItem('user',null)

            return {user:null}

            case 'incrementBalance':
              return {...state,user:{... state.user ,balance : action.payload.balance}}
            default: 
              return state
     }
}

export const AuthContextProvider=({children})=>{
    const initialState = JSON.parse(localStorage.getItem('user')) 

    const [state,dispatch]=useReducer(authReducer,{user:initialState})
   

    return(
        <AuthContext.Provider value={{...state,dispatch}}>
            { children }
        </AuthContext.Provider>
       
        
    );

}