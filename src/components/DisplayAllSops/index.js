import React from 'react'
import { selectUser } from '../../redux/reducer/userSlice';
import { useSelector } from 'react-redux';
import './display-all-shops.scss'
import {useParams,Link} from 'react-router-dom'

function DisplayAllShop() {
     const user= useSelector(selectUser)
     const shops=(user.shops)
     const {addShop}=useParams()
    return (
        <div>
        {
            shops.map((shop)=>(
                <div key={addShop} className="display-shops">
                  <img className="shop-main-logo" src="https://images.pexels.com/photos/374894/pexels-photo-374894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <div className="shops-name">
                <Link className="link_color" to={`/shop_data/${shop.id}`}>
                <div className="shop_button_title">
                <div>
                <h6>{shop.name}</h6>
                <p>{shop.address}</p>
                </div>
                <div>
                <Link to={`/promotion/${shop.id}`}><button>Add Promotion</button></Link>
                </div>
                </div>
                </Link>
                </div>
                </div>
            ))
        }
           
        </div>
    )
}

export default DisplayAllShop
