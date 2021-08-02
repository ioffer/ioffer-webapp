import React from 'react'
import VendorForm from '../../components/VendorForm'
import register from '../../assets/images/register.png'
import ioffer from '../../assets/images/ioffer.png';
import {Link} from 'react-router-dom'

function VendorShop() {
    return (
        <div className="background-color">
        <div className="container">
        <div className="login-flex">
            <div className="figure-side">
               <Link to='/'><img src={ioffer} /></Link> 
            <h1 className="h1"> Register Your Shop</h1>
            <figure>
                <img className="img-width" src={register} />
                </figure>
            </div>
            <VendorForm />
        </div>
        </div>
        </div>
    )
}

export default VendorShop
