import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import shop from '../../assets/images/shop.jpg';
import deal from '../../assets/images/deal.jpeg';
import offer from '../../assets/images/offer.png';
import promotion from '../../assets/images/promotion.png';
import brand from '../../assets/images/brand.jpg';
import {Link} from 'react-router-dom'


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

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        margin: '10px',
        flex:'auto',
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            // width: '100% !important', // Overrides inline-style
            height: 150,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    link:{
        color: 'white',
    }
}));

export default function ButtonBases() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {images.map((image) => (
                <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                    }}
                >
          <span
              className={classes.imageSrc}
              style={{
                  backgroundImage: `url(${image.url})`,
              }}
          />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
            <Link className={classes.link} to={image.link}>
            <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
            >
              {image.title}
                <span className={classes.imageMarked} />
            </Typography>
            </Link>
          </span>
          
                </ButtonBase>
            ))}
        </div>
    );
}
