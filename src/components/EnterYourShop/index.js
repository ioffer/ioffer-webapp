import React from 'react';
import './enter-shop.scss';
import { selectUser } from '../../redux/reducer/userSlice';
import { useSelector } from 'react-redux';
import ImageUpload from '../ImageUpload';
import {Link} from 'react-router-dom';
import AddLocationIcon from "@material-ui/icons/AddLocation";
import CallIcon from "@material-ui/icons/Call";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import MoreIcon from '@material-ui/icons/More';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StoreIcon from '@material-ui/icons/Store';
import {useParams} from 'react-router-dom'


function EnterYourShop() {
    const user= useSelector(selectUser)
    const shops=(user.shops)
    const {id}=useParams()
   
    return (
        <div className="static-position">
             <div className="shop-absoulute">
               

              {
            shops.map((shop)=>{
                if(shop.id===id){
            return   ( <div key={id} >
                <div className="display-shops">
                 <div className="shop-logo-position">
           <ImageUpload cameraIcon={false} />
            <Link to={`/promotion/${shop.id}`}><button>Add Promotion</button></Link>
            </div>
            
                 <div className="shops-name">
                 <div className="enter-shop">
                 <div>
                <StoreIcon />
                </div>
                <div className="context-text">
                 <h2>Shop Name </h2>
                <p>{shop.name}</p>
                </div>
                </div>

                <div className="enter-shop">
                <div>
                <AddLocationIcon />
                </div>
                <div className="context-text">
                <h2>Shop Address</h2>
                <p>{shop.address}</p>
                </div>
                </div>

                <div className="enter-shop">
                <div>
                <CallIcon />
                </div>
                <div className="context-text">
                <h2>Phone Number</h2>
                <p>{shop.phoneNumbers}</p>
                </div>
                </div>

                <div className="enter-shop">
                <div>
                <LocationCityIcon />
                </div>
                <div className="context-text">
                <h2>Shop Location</h2>
                <p>{shop.location}</p>
                </div>
                </div>

                 <div className="enter-shop">
                <div>
                <CallIcon />
                </div>
                <div className="context-text">
                <h2>Mobile Number</h2>
                <p>{shop.mobileNumber}</p>
                </div>
                </div>
                
                
                 <div className="enter-shop">
                <div>
                <ShoppingCartIcon />
                </div>
                <div className="context-text">
                <h2>Shop Category</h2>
                <p>{shop.shopCategory}</p>
                </div>
                </div>
                
               <div className="enter-shop">
                <div>
                <MoreIcon />
                </div>
                <div className="context-text">
                <h2>Tags</h2>
                <p>{shop.tags}</p>
                </div>
                </div>
                
                </div>
                </div>
                    {
                        shop.promotions.map(promotion=>{
                            return (
                                <div className="display-promotions">
                                    <div className="shops-name">
                                    <div className="enter-shop">
                                        <div>
                                        <MoreIcon />
                                        </div>
                                        <div className="context-text">
                                        <h2>Promotion Name</h2>
                                        <p>{promotion.name}</p>
                                        </div>
                                        </div>
                                        
                                        <div className="enter-shop">
                                        <div>
                                        <ShoppingCartIcon />
                                        </div>
                                        <div className="context-text">
                                        <h2>Promotion Category</h2>
                                        <p>{promotion.category}</p>
                                        </div>
                                        </div>

                                        <div className="enter-shop">
                                        <div>
                                        <MoreIcon />
                                        </div>
                                        <div className="context-text">
                                        <h2>Tags</h2>
                                        <p>{promotion.tags}</p>
                                        </div>
                                        </div>

                                        <div className="enter-shop">
                                        <div>
                                        <ShoppingCartIcon />
                                        </div>
                                        <div className="context-text">
                                        <h2>Description</h2>
                                        <p>{promotion.description}</p>
                                        </div>
                                        </div>
                                        
                                        <div className="enter-shop">
                                        <div>
                                        <ShoppingCartIcon />
                                        </div>
                                        <div className="context-text">
                                        <h2>Starting Price</h2>
                                        <p>{promotion.price}</p>
                                        </div>
                                        </div>

                                        <div className="enter-shop">
                                        <div>
                                        <ShoppingCartIcon />
                                        </div>
                                        <div className="context-text">
                                        <h2>Starting Date</h2>
                                        <p>{promotion.startDate}</p>
                                        </div>
                                        </div>

                                        <div className="enter-shop">
                                        <div>
                                        <ShoppingCartIcon />
                                        </div>
                                        <div className="context-text">
                                        <h2>End Date</h2>
                                        <p>{promotion.endDate}</p>
                                        </div>
                                        </div>
                                    
                                    </div>
                                    </div>
                            )
                        })

                        
                    }
                </div>

           
             
            )
        }
            })
        }
            
            </div>

           
             
        </div>
    )
}

export default EnterYourShop
