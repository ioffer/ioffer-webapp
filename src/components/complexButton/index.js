import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import shop from '../../assets/images/shop.jpg';
import deal from '../../assets/images/deal.jpeg';
import offer from '../../assets/images/offer.png';
import promotion from '../../assets/images/promotion.png';
import brand from '../../assets/images/brand.jpg';
import './card.scss';

const images = [
    {
        url: deal,
        title: 'DEALS',
        link: '/deals',
        width: '30%',
    },
    {
        url: offer ,
        title: 'OFFERS',
        link: '/offers',
        width: '30%',
    },
    {
        url: promotion,
        title: 'PROMOTIONS',
        link: '/promotions',
        width: '40%',
    },
    {
        url: shop ,
        title: 'SHOPS',
        link: '/shops',
        width: '40%',
    },
    {
        url: brand,
        title: 'BRANDS',
        link: '/brands',
        width: '40%',
    },
];



export default function ButtonBases() {
    return (
        <div className="btn-container">
            {images.map((image) => (
                <div
                    focusRipple
                    key={image.title}
                    className="btn-image"
                    // focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                    }}
                >
                    <span
                        className="imageSrc"
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                    />
                    <span className="imageBackdrop" />
                    <span className="image-button">
                        <Link className="link" to={image.link}>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                className="imageTitle"
                            >
                                {image.title}
                                <span className="imageMarked" />
                            </Typography>
                        </Link>
                    </span>
                </div>
            ))}
        </div>
    );
}
