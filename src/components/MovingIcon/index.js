import React from 'react'
import Carousel from 'react-elastic-carousel'
import Item from 'react-elastic-carousel'
import './moving-icon.scss'
import movingicon1 from '../../assets/images/movingicon1.jpg';
import movingicon2 from '../../assets/images/movingicon2.jpg';
import movingicon3 from '../../assets/images/movingicon3.jpg';
import movingicon4 from '../../assets/images/movingicon4.png';


function MovingIcon(){
  return (
      <div className="top-icon">
          <Carousel itemsToShow={2} enableAutoPlay infinite>
            <Item><img src={movingicon1} /></Item>
            <Item><img src={movingicon2} /></Item>
            <Item><img src={movingicon3} /></Item>
            <Item><img src={movingicon4} /></Item>
            <Item><img src={movingicon1} /></Item>
            <Item><img src={movingicon2} /></Item>
            <Item><img src={movingicon3} /></Item>
            <Item><img src={movingicon4} /></Item>
            <Item><img src={movingicon1} /></Item>
            <Item><img src={movingicon2} /></Item>
            <Item><img src={movingicon3} /></Item>
            <Item><img src={movingicon4} /></Item>

</Carousel>
      </div>
  )
 }
 export default MovingIcon