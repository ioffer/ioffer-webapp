import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DevicesIcon from '@material-ui/icons/Devices';

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
        padding: 8,
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
    imgBorder:{
        borderRadius: 5,
    },
}));


// The example data is structured as follows:

// [etc...]

const tileData = [
    {
        img: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Cellphones Sales',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Camera & Photography',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Gaming Pc',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Headphones ',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Laptops',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Controllers',
        author: 'author',
    },
    {
        img:'https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Gaming Accessories',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Voice over Mics',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/8534225/pexels-photo-8534225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'See More',
        author: 'author',
    }
];

export default function FoodLineGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.gridtitle}>
               <h3>Electronics</h3><DevicesIcon className={classes.icon}/> 
            </div>
            <GridList className={classes.gridList} cols={2.5}>
                {tileData.map((tile) => (
                    <GridListTile   key={tile.img}>
                        <img className="imgBorder" src={tile.img} alt={tile.title}/>
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
