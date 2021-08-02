import React from 'react'
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import './enter-shop.scss'
import {Link} from 'react-router-dom'

function EnterYourShop() {
    return (
        <div className="dashboard-container">
            <div className="enter-shop">
            <h2>Enter Your Shop</h2>
            <Link to="/vendorshop"><AddCircleOutlineRoundedIcon /></Link>
            </div>
        </div>
    )
}

export default EnterYourShop
