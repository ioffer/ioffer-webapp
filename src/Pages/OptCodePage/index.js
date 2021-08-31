import React from 'react'
import otp from '../../assets/svgicons/otp.svg'
import './otp-page.scss'

function OptCodePage() {
 
    return (
        <div>
            <div className="svg-icon-position">
            <img src={otp} className="svg-icon-otp" />
            </div>
            <div className="text-align-otp">
            <h2 >OTP Verification</h2>
            <p >Please enter your 6-Digit code </p>
            </div>
            <div>
            <form className="text-center">
				<div className="form-group">
					<label for="password" className="otp-label">Enter 6 Digit Password</label>
					<div class="passcode-wrapper">
						<input id="codeBox1" type="number" maxlength="1"  />
						<input id="codeBox2" type="number" maxlength="1"  />
						<input id="codeBox3" type="number" maxlength="1"  />
						<input id="codeBox4" type="number" maxlength="1"  />
                        <input id="codeBox5" type="number" maxlength="1"  />
                        <input id="codeBox6" type="number" maxlength="1"  />
                    </div>
				</div>
			</form>
            </div>
            <div className="button-position-otp">
            <button className="button">Verify and Register</button>
            </div>
            
        </div>
    )
}

export default OptCodePage
