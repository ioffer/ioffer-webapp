import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
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
        <div className={classes.root}>
            <div className={classes.gridtitle}>
               <h3>{title}</h3>
               <span className={classes.icon}>{icon}</span> 
            </div>
            <GridList classes={{root:classes.gridList}} className="scroller" cols={2.5}>
                {array.map((tile) => (
                    <GridListTile key={tile.img} className="items">
                        <img src={tile.img} alt={tile.title}/>
                        <GridListTileBar  
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${tile.title}`}>
                                    <StarBorderIcon className={classes.title}/>
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
