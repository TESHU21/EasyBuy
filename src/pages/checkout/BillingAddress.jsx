import React from 'react'
import FormComp from '@/components/FormComp'
import {BilligAdressSchema,intialValues,fields} from "./components/data/billingdata"
import OrderItem from './OrderItem'
import { useLocation } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const BillingAddress = ({item}) => {
  const location=useLocation()
  const selectedItems = location.state?.selectedItems 
  console.log("Selected Items billing",selectedItems)
  return (
    <div className=' flex flex-col justify-center'>
       <nav aria-label='Breadcrumb Navigation'>
            <Breadcrumb className="flex justify-center">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" aria-label="Go to homepage">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage arial-current="page">Checkout</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            </nav>
      <div  className="  flex flex-col md:flex-row gap-4 justify-center  p-4">
      
        <div className=' lg:w-[600px]   shadow-md  border-2 p-10 '>
        <FormComp schema={BilligAdressSchema} initialValues={intialValues} fields={fields} submitBtnText="Continue"/>
        </div>
        <OrderItem item={selectedItems}/> 
        </div>
    </div>
  )
}

export default BillingAddress