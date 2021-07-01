import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './style.css'


function HeroImage() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div>
             <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div data-src="https://uidesign.gbtcdn.com/GB/image/7437/1190x420_en.jpg?imbypass=true" />
    <div data-src="https://uidesign.gbtcdn.com/GB/image/7180/1190x420_en.jpg?imbypass=true" />
    <div data-src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
  </AutoplaySlider>
        </div>
           
       
    )
    
}

export default HeroImage
