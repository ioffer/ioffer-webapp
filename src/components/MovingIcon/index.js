import React, { useEffect, useState } from 'react';
import Slider from 'infinite-react-carousel';
import './moving-icon.scss';
import movingicon1 from '../../assets/images/movingicon1.jpg';
import movingicon2 from '../../assets/images/movingicon2.jpg';
import movingicon3 from '../../assets/images/movingicon3.jpg';
import movingicon4 from '../../assets/images/movingicon4.png';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function MovingIcon(){
  const { width } = useWindowDimensions();
  const sliderImages = [movingicon1,movingicon2,movingicon3,movingicon4,movingicon2,movingicon3,movingicon1,movingicon4]
  let slides;
  if(width > 1280){
    slides = 6;
  }
  else if(width > 1024 && width <= 1280){
    slides = 5;
  }
  else if(width > 800 && width <= 1024){
    slides = 4;
  }
  else if(width > 450 && width <= 800){
    slides = 3;
  }
  else if(width <= 450){
    slides = 1;
  }
  return (
      <div className="top-icon">
          <Slider 
            autoplay={true}
            row={1}
            autoplayScroll={1}
            slidesToShow={slides}
            autoplaySpeed={3000}
            arrows={false}
            centerMode
          >
            {
              sliderImages.map((image,index) =>(
                <div key={index}>
                  <img src={image} />
                </div >
              ))
            }
          </Slider>
      </div>
  )
 }
 export default MovingIcon