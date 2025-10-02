import React from 'react'
import { PaymentSucess } from '../component/Navbar/PaymentSuccess/PaymentSucess'
import { Routes, Route } from 'react-router-dom';


const CustomerRoute = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/payment/sucess/:id' element={<PaymentSucess />} />
      </Routes>

      <Auth/>

    </div>
  )
}

export default CustomerRoute