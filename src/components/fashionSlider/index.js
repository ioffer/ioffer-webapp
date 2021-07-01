import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StoreIcon from '@material-ui/icons/Store';
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
    fashiontitle:{
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
    }
}));


// The example data is structured as follows:

// [etc...]

const tileData = [
    {
        img: 'https://images.pexels.com/photos/2529787/pexels-photo-2529787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'T-shirts',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/2129970/pexels-photo-2129970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Jeans',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Ladies Clothes',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Long Coats',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'T-shirts',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/1051744/pexels-photo-1051744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Sale',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/2490920/pexels-photo-2490920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Shirts',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Shoes',
        author: 'author',
    },
    {
        img: 'https://images.pexels.com/photos/5698853/pexels-photo-5698853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Sport Shoes',
        author: 'author',
    }
];

export default function FashionGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.fashiontitle}>
               <h3>Fashion</h3><StoreIcon className={classes.icon}/> 
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
