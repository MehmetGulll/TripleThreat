import React from 'react'
import './footer.scss'
function Footer() {
  return (
    <div className='footerContainer'>
        <div className='footerLogo'>LOGO</div>
        <div className='footerText'>© 2023 Nado's Pizza Reviews</div>
        <div className='footerLinks'>
            <div className='footerLink'>About Us</div>
            <div className='footerLink'>Contact Us</div>
        </div>
    </div>
  )
}

export default Footer
