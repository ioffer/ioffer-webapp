import React from 'react'
import './catogeryicon.scss'

function Catogeryicons() {
    const tileData = [
        {
            img: 'https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706__340.jpg',
        },
        {
            img:'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        },
        {
            img:'https://cdn.pixabay.com/photo/2020/06/13/08/33/star-scatter-5293466__340.png',
        },
        {
            img:'https://cdn.pixabay.com/photo/2013/07/13/12/38/dices-160005__340.png',
        },
        {
            img:'https://cdn.pixabay.com/photo/2016/03/31/21/57/crown-1296751__340.png',
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
