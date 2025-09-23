import React from 'react'
import { PaymentSucess } from '../component/Navbar/PaymentSuccess/PaymentSucess'

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