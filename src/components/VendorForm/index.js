import React from 'react'
import TextField from '@material-ui/core/TextField';


function VendorForm() {
    return (
        <div>
             <h1 className="h1"> Get started absolutely free.</h1>
              <p>Free forever. No credit card needed.</p>
              <form className="form-design" autoComplete="off">
                 <div className="form-grid">
                    <TextField
                    fullWidth
                    autoComplete="Shop Name"
                    type="text"
                    label="Enter Your Shop name"
                />
                <TextField
                    fullWidth
                    autoComplete="Shop Category"
                    type="text"
                    label="Shop Category"
                />
                    </div>
                    <div className="form-grid">
            <TextField
                fullWidth
                autoComplete="Address"
                type="text"
                label="Enter Your Address"
            />
            <TextField
                fullWidth
                autoComplete="Your Website"
                type="text"
                label="Website"
            />
            </div>
            <TextField
            fullWidth
            autoComplete="Email"
            type="email"
            label="Enter Your Email"
          />

          <TextField
            fullWidth
            autoComplete="Phone Number"
            type="text"
            label="Enter Your Phone Number"
          />
          <lable>Upload your Shop Logo</lable><br />
          <input type="file" />

          
          </form>
          <button className="button">Register</button>

        </div>
    )
}

export default VendorForm
