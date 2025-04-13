import React,{createContext,useContext,useState} from "react";
const PaymentContext=createContext()
export const usePayment=()=>{
    return useContext(PaymentContext)
}
export const PaymentProvider=({children})=>{
    const [step,setStep]=useState(0)

    return (<PaymentContext.Provider value={{step,setStep }} >
        {children}
    </PaymentContext.Provider>)

}
