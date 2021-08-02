import React from 'react'
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import AllOffer from '../../components/AllOffer'
import Catogeryicons from '../../components/catogeryicons'
import SingleLineGridList from '../../components/cardsSlider'
import { PopularOffer, near } from '../../data'

function Offers() {
    return (
        <div>
            <Catogeryicons />
            <SingleLineGridList title="Popular Offers" array={PopularOffer}  icon={<LoyaltyIcon/>}/>
            <SingleLineGridList title="NearBy Offers" array={near} icon={<LoyaltyIcon/>}/>
            <AllOffer />
        </div>
    )
}

export default Offers
