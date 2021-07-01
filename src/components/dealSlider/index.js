import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        marginRight: 9,
        marginLeft : 11,
        marginTop: 21,
        boxShadow: "3px 4px 3px 5px lightgrey",
        borderRadius: 10,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: "white",
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    foodtitle:{
        fontSize: 22,
        display: 'flex',
        alignItems: 'center',
        marginLeft: 14,
        paddingTop: 12,
        paddingBottom: 14,
        fontFamily: ['Roboto', "Helvetica", "Arial",'sans-serif'],
        fontWeight: 400,
        lineHeight: 1.75,
        letterSpacing: '0.00938em',
    },
    icon:{
        fontSize: 37,
        marginLeft: 11,
        color: '#3F51B5',
    },
}));


// The example data is structured as follows:

// [etc...]

const tileData = [
    {
        img: 'https://images.pexels.com/photos/5872364/pexels-photo-5872364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Italian Restuarant',
        author: 'author',
    },
    {
        img:'https://images.pexels.com/photos/4450334/pexels-photo-4450334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'The Disaster Café',
        author: 'author',
    },
    {
        img:'https://images.pexels.com/photos/2290070/pexels-photo-2290070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Blue Plate',
        author: 'author',
    },
    {
        img:'https://images.pexels.com/photos/5379707/pexels-photo-5379707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'California Pizza kitchen',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/5922447/pexels-photo-5922447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Desi Addicts',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Cafeteria',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/1383776/pexels-photo-1383776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'La Poma',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Public House',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Buffet House',
        author: 'author',
    }
];

export default function DealSlider() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.foodtitle}>
               <h3>Upto 50% Off</h3><LocalOfferIcon className={classes.icon}/> 
            </div>
            <GridList className={classes.gridList} cols={2.5}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img}>
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
