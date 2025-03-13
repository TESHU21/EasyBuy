import React from 'react'
import FormComp from '@/components/FormComp'
import {BilligAdressSchema,intialValues,fields} from "./components/data/billingdata"

const BillingAddress = () => {
  return (
    <div>
        <FormComp schema={BilligAdressSchema} initialValues={intialValues} fields={fields}/>
    </div>
  )
}

export default BillingAddress