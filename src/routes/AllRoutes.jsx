import React from 'react'
import Layout from '@/layout/Layout'
import { Routes,Route } from 'react-router-dom'
import Home from '@/pages/home/Home'
import About from '@/pages/about/About'
import Contact from '@/pages/contact/Contact'
import Shop from '@/pages/shop/Shop'
import Cart from '@/pages/cart/Cart'
import CheckOut from '@/pages/checkout/CheckOut'
import AddPaymentCard from "../pages/checkout/paymentMethod/AddPaymentCard"
import PayPalDetail from '@/pages/checkout/paymentMethod/PayPalDetail'
import GooglePayDetail from '@/pages/checkout/paymentMethod/GooglePayDetail'


const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Layout />} >
     <Route index element={<Home />} />
     <Route path='about' element={<About />} />
     <Route path='contact' element={<Contact />} /> 
     <Route path='shop' element={<Shop />} /> 
     <Route path ="cart" element={<Cart/>}/>
     <Route path="checkout" element={<CheckOut/>}/>
     <Route path="paypal-detail" element={<PayPalDetail/>}/>
     <Route path="googlepay-detail" element={<GooglePayDetail/>}/>
     <Route path="addpaymentcard" element={<AddPaymentCard/>}/>
    
    </Route>

   </Routes>
  )
}

export default AllRoutes