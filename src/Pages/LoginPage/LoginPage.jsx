import React from 'react'
import Navbar from '../../Layout/Navbar'
import Booking from '../Booking/Booking'
import Innovative from '../Innovative/Innovative'
import Stories from '../Stories/Stories'
import UpperFooter from '../../Layout/UpperFooter/UpperFooter'
import Footer from '../../Layout/Footer/Footer'

const LoginPage = () => {
  return (
    <div>
       <Navbar />
      <Booking />
      <Innovative />
      <Stories />
      <UpperFooter />
      <Footer />
    </div>
  )
}

export default LoginPage
