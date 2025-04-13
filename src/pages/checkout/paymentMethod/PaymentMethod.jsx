import React, { useState } from 'react'
import AddPaymentCard from './AddPaymentCard'
import PayPalDetail from './PayPalDetail'
import GooglePayDetail from './GooglePayDetail'
import { CreditCard } from 'lucide-react'
import { LiaAngleRightSolid } from "react-icons/lia"
import appleLogo from "../../../assets/apple.png"
import googleLogo from "../../../assets/google.png"
import paypalLogo from "../../../assets/paypal.png"
import { IoIosRadioButtonOff } from "react-icons/io"

const PaymentMethod = () => {
  const [selectedCard, setSelectedCard] = useState("")

  const otherPaymentMethod = [
    { id: "paypal", name: "paypal", logo: paypalLogo },
    { id: "applePay", name: "applePay", logo: appleLogo },
    { id: "googlePay", name: "googlePay", logo: googleLogo },
  ]

  const handleAddCard = () => {
    setSelectedCard("addcard")
  }

  const handleOtherPayment = (item) => {
    setSelectedCard(item)
  }

  // Render AddPaymentCard or other payment details conditionally
  if (selectedCard === "addcard") return <AddPaymentCard />
  if (selectedCard === "paypal") return <PayPalDetail />
  if (selectedCard === "googlePay" || selectedCard === "applePay") return <GooglePayDetail />

  return (
    <div className='min-w-80'>
      <div className='flex flex-col items-center justify-center'>
        <p className='mb-6'>Credit & Debit Card</p>

        <div className='flex justify-between rounded-md shadow-sm p-2'>
          <div className='flex items-center gap-4 w-full min-w-80'>
            <CreditCard className='w-10 h-10 text-[#6D4C41]' />
            <span>Add Card</span>
          </div>
          <button className='cursor-pointer' onClick={handleAddCard}>
            <LiaAngleRightSolid />
          </button>
        </div>

        <div>
          <p className='my-2'>More Payment Options</p>
          <div className='rounded-md border shadow-md'>
            {otherPaymentMethod.map((item) => (
              <button
                key={item.id}
                onClick={() => handleOtherPayment(item.name)}
                className='flex items-center justify-between border-b last:border-b-0 p-2 cursor-pointer'
              >
                <div className='flex items-center gap-4 min-w-80'>
                  <img src={item.logo} alt={item.name} className='h-10 w-10' />
                  <span>{item.name}</span>
                </div>
                <IoIosRadioButtonOff />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod
