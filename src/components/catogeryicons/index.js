import React from 'react'
import './catogeryicon.scss'

function Catogeryicons() {
    const tileData = [
        {
            img: 'https://image.flaticon.com/icons/png/512/1161/1161674.png',
        },
        {
            img:'https://image.flaticon.com/icons/png/512/2933/2933190.png',
        },
        {
            img:'https://image.flaticon.com/icons/png/512/24/24697.png',
        },
        {
            img:'https://image.flaticon.com/icons/png/512/821/821528.png',
        },
        {
            img:'https://image.flaticon.com/icons/png/512/287/287623.png',
        },
        
    ];
    return (
        <div className="icon-box">
            <div className="catogery-icon">
            {
               tileData.map((tile) => (
                <div className="image-size"  key={tile.img}>
                    <img src={tile.img} width="25px" height="25px"/>
                </div>

               ))
            }
            <div>
                <button className="btn">See More</button>
            </div>
           
            </div>
        </div>
    )
}

export default Catogeryicons
