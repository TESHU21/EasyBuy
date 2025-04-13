import React from 'react'
import FormComp from '@/components/FormComp'
 import { BillingAddressSchema,initialValues,fields} from "./components/data/billingdata"
import OrderItem from './OrderItem'
import { useEffect } from 'react'
import { usePayment } from '@/context/paymentContext'

const BillingAddress = ({ selectedItems,setBillingData}) => {
  const {setStep}=usePayment()

 
  console.log("Selected Items billing",selectedItems)
  const handleSubmit=(data)=>{
    setStep(1)
   
    
  }
  return (
    <div className=' flex flex-col justify-center'>
      
      <div  className="  flex flex-col md:flex-row gap-4 justify-center  p-4">
      
        <div className=' lg:w-[600px]   shadow-md  border-2 p-10  relative'>
        <FormComp schema={ BillingAddressSchema} initialValues={initialValues} fields={fields} submitBtnText="Continue" onSubmit={handleSubmit}/>
        </div>
        
       

        </div>
    </div>
  )
}

export default BillingAddress