import React from 'react'
import verifyemail from '../../assets/svgicons/emailverify.svg'

function VerifyEmailPassword() {
    return (
        <div className="verify-height">
        <div className="main-forgot-div">
       <img src={verifyemail} className="success-svg" />
       <h2> Check Your Email</h2>
       <p>We have sent a Password recover instructions to your email</p>
        </div>
       
        
   </div>
    )
}

export default VerifyEmailPassword
