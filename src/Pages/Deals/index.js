import React from 'react'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { dealData,SecondDeal } from "../../data.js"
import AllDeals from '../../components/AllDeals/index.js';
import SingleLineGridList from '../../components/cardsSlider/index.js';

function Deals() {
    return (
        <div>
             <SingleLineGridList title="Upto 30% Off" array={dealData} icon={<LocalOfferIcon/>} />
            <SingleLineGridList title="Upto 50% Off" array={SecondDeal} icon={<LocalOfferIcon/>} />
            <AllDeals />
        </div>
    )
}

export default Deals
