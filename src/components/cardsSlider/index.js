import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import EyeIcon from '../../assets/images/eye.svg';
import HeartIcon from '../../assets/images/heart.svg';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './card-slider.scss'

// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        marginRight: 9,
        marginLeft : 11,
        marginTop: 30,
        boxShadow: "3px 4px 11px 5px lightgrey",
        borderRadius: 10,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        padding: 8,
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        
    },
    title: {
        color: "white",
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    gridtitle:{
        fontSize: 22,
        display: 'flex',
        alignItems: 'center',
        marginLeft: 14,
        paddingTop: 10,
        paddingBottom: 3,
        fontFamily: ['Roboto', "Helvetica", "Arial",'sans-serif'],
        fontWeight: 400,
        lineHeight: 1.2,
        letterSpacing: '0.00938em',
    },
    icon:{
        marginLeft: 11,
        color: '#45B26B',
    },
    imgBorder:{
        borderRadius: "6px",
    },
}));


export default function SingleLineGridList({array,title,icon}) {
    const classes = useStyles();

    return (
        <div className="categories-sec">
            <div className="cat-title">
               <h3>
                   {title}
                </h3>
               <span className="icon">
                   {icon}
                </span> 
            </div>
            <div classes={{root:classes.gridList}} className="scroller" cols={2.5}>
                {array.map((tile) => (
                    <div class="card">
                        <div class="card-img">
                            <img src={tile.img} alt={tile.title} id="image"/>
                        </div>
                        <div class="card-detail">
                            <h3>{tile.title}</h3>
                            <div class="card-icons">
                                <img src={HeartIcon} alt="Eye Icon"/>
                                <img src={EyeIcon} alt="Heart Icon"/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
