import React from 'react';
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

function ShowPromotion() {
    const user= useSelector(selectUser)
    const shops=(user.shops)
   
    return (
        <div className="static-position">
             
             {
                        shops.map(promotion=>{
                            return (
                                <div>
                                    {
                                       promotion.promotions.map(promotion=>{
                                            return(
                                                <div>
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
                                    
                                                 </div>
                                            )
                                        })
                                    }
                               
                                    
                                    </div>
                            )
                        })

                        
                    }
            
         
             
        </div>
    )
}

export default ShowPromotion
