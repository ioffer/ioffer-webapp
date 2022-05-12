import React from 'react'
import HeroImage from '../../components/HeroImage'
import MovingIcon from '../../components/MovingIcon'
import DevicesIcon from '@material-ui/icons/Devices';
import ButtonBases from '../../components/complexButton'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import StoreIcon from '@material-ui/icons/Store';
import { fashionData,electronicsData,FoodData } from '../../data'
import SingleLineGridList from '../../components/cardsSlider'
import './style.css'

function Home() {
    return (
        <div className="container">
            <HeroImage />
            <MovingIcon />
            <ButtonBases />
            <SingleLineGridList title ="Electronics" array={electronicsData} icon={<DevicesIcon/>} />
            <SingleLineGridList  title="Restaurant" array={FoodData} icon={<FastfoodIcon/>}/>
            <SingleLineGridList title="Fashion" array={fashionData} icon={<StoreIcon/>}/>
        </div>
    )
}

export default Home
