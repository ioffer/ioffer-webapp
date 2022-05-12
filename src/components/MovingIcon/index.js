import React from 'react';
import Slider from 'infinite-react-carousel';
import './moving-icon.scss';
import movingicon1 from '../../assets/images/movingicon1.jpg';
import movingicon2 from '../../assets/images/movingicon2.jpg';
import movingicon3 from '../../assets/images/movingicon3.jpg';
import movingicon4 from '../../assets/images/movingicon4.png';


function MovingIcon(){
  const sliderImages = [movingicon1,movingicon2,movingicon3,movingicon4,movingicon2,movingicon3,movingicon1,movingicon4]
  return (
      <div className="top-icon">
          <Slider 
            autoplay={true}
            row={1}
            autoplayScroll={1}
            slidesToShow={5}
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
            {/* <div>
              <img src={movingicon1} />
            </div >
            <div>
              <img src={movingicon2} />
            </div >
            <div>
              <img src={movingicon3} />
            </div >
            <div>
              <img src={movingicon4} />
            </div >
            <div>
              <img src={movingicon1} />
            </div >
            <div>
              <img src={movingicon2} />
            </div >
            <div>
              <img src={movingicon3} />
            </div >
            <div>
              <img src={movingicon4} />
            </div >
            <div>
              <img src={movingicon1} />
            </div >
            <div>
              <img src={movingicon2} />
            </div >
            <div>
              <img src={movingicon3} />
            </div >
            <div>
              <img src={movingicon4} />
            </div > */}
          </Slider>
      </div>
  )
 }
 export default MovingIcon