import React from 'react'
import FormComp from '@/components/FormComp'
import {BilligAdressSchema,intialValues,fields} from "./components/data/billingdata"

const BillingAddress = () => {
  return (
    <div className="  flex justify-center ">
        <div className=' w-[600px]   shadow-md  border-2 p-10 '>
        <FormComp schema={BilligAdressSchema} initialValues={intialValues} fields={fields}/>
        </div>
    </div>
  )
}

export default BillingAddress