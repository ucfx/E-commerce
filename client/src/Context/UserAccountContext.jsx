import React, { createContext, useReducer } from 'react'

export const AccountContext=createContext();

export const AccountDispatcher =(state,action)=>{
     return action.payload.value;
}

export  const AccountContextProvider = ({children}) => {
    const [AccountView,AccountDispatch]=useReducer(AccountDispatcher,'younes')
  return (
    <AccountContext.Provider value={{AccountView,AccountDispatch}}>
       {children}
    </AccountContext.Provider>
  )
}

