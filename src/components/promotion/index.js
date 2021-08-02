import React,{useState} from 'react'
import './promotion.scss'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Pdffile from '../../Pdffile';
// import Pdf from './assets/document/Pdf.pdf'

function Promotion() {
    const [seePdf,setSeePdf] =useState(false)
    const promotions = [
        {
            img: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'https://www.48hourslogo.com/48hourslogo_data/2019/01/24/80909_1548261123.jpg',
            sale: '30% Off',
            desc: 'Valid till July 30',
            pdf: '/assets/document/Pdf.pdf'
        },
        {
            img: 'https://images.pexels.com/photos/3687999/pexels-photo-3687999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'https://www.48hourslogo.com/48hourslogo_data/2019/01/24/80909_1548261123.jpg',
            sale: '30% Off',
            desc: 'Valid till Sep 30',
            pdf: '/assets/document/Pdf.pdf'
        },
        {
            img: 'https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'https://www.48hourslogo.com/48hourslogo_data/2019/01/24/80909_1548261123.jpg',
            sale: '30% Off',
            desc: 'Valid till July 30',
            pdf: '/assets/document/Pdf.pdf'
        },
        {
            img: 'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'https://www.48hourslogo.com/48hourslogo_data/2019/01/24/80909_1548261123.jpg',
            sale: '30% Off',
            desc: 'Valid till July 30',
            pdf: '/assets/document/Pdf.pdf'
        },
        {
            img: 'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'https://www.48hourslogo.com/48hourslogo_data/2019/01/24/80909_1548261123.jpg',
            sale: '30% Off',
            desc: 'Valid till July 30',
            pdf: '/assets/document/Pdf.pdf'
        },
    ];
    return (
        <div>
            <div>
                {
                    promotions.map((promotion)=>(
                        <div className="promotion-flex">
                            <div className="text">
                            <img  src={promotion.title} width="50px" height="50px" />
                            {
                                seePdf &&
                                <Pdffile/>
                            }
                            
                            <p>{promotion.desc}</p>
                            <p>{promotion.sale}</p>
                            <FavoriteBorderIcon />
                            </div>
                            <div className="promotion-img">
                                <img onClick={()=>setSeePdf(!seePdf)} src={promotion.img} width="100%" height="100%"/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Promotion
