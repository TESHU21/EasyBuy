import React, { useState } from 'react'
import BillingAddress from './BillingAddress'
import OrderItem from './OrderItem'
import PaymentMethod from './PaymentMethod'
import { useLocation } from 'react-router-dom'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";


const CheckOut = () => {
const stepLabels = ['Billing Address', 'Payment Method', 'Order Item']
const [billingData,setBillingData]=useState(null)
  const [step, setStep] = useState(0)
    const location=useLocation()
    const selectedItems = location.state.cart
    const handleBillingData=()=>{
        console.log

    }
  

  return (
    <div>
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
      {/* Stepper */}
      <div className="flex justify-center  gap-10 items-center  mb-6">
        {stepLabels.map((label, index) => (
          <div key={index} className="flex items-center space-x-2 ">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold
              ${index <= step ? 'bg-indigo-600' : 'bg-gray-300'}`}>
              {index + 1}
            </div>
            <span className={`text-sm ${index === step ? 'font-semibold text-indigo-600' : 'text-gray-500'}`}>
              {label}
            </span>
            {index < stepLabels.length - 1 && <div className="w-8 h-px bg-gray-300 mx-2" />}
          </div>
        ))}
      </div>

      {/* Step Content */}
      {step === 0 && <BillingAddress selectedItems={selectedItems} setStep={setStep} setBillingData={setBillingData}/>}
      {step === 1 && <PaymentMethod />}
      {step === 2 && <OrderItem />}
    </div>
  )
}

export default CheckOut
