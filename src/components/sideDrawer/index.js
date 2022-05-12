import React,{useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MenuIcon from '@material-ui/icons/Menu';
import ioffer from '../../assets/images/ioffer.png';
import {Link} from 'react-router-dom';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { selectUser } from '../../redux/reducer/userSlice';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  logo:{
    textAlign: 'center',
  },
  linkColor:{
    color: 'gray',
  },
  iconColor:{
    color: '#3F51B5',
  },
  text:{
    marginLeft: 9,
  },
});

const sidebars = [
  {
    title: 'Home',
    link: '/',
    icon: <HomeIcon />
},
  {
      title: 'Deals',
      link: '/deals',
      icon: <CardGiftcardIcon />
  },
  {
    title: 'Offers',
    link: '/offers',
    icon: <LocalOfferIcon />
  },
  {
    title: 'Promotions',
    link: '/promotions',
    icon: <LocalActivityIcon />
  },
  {
    title: 'Shops',
    link: '/shops',
    icon: <StorefrontIcon />
  },
  {
    title: 'Brands',
    link: '/brands',
    icon: <AddShoppingCartIcon />
  },
];

export default function SwipeableTemporaryDrawer() {
  const user= useSelector(selectUser)
  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className={classes.logo}>
        <Link to='/'><img src={ioffer} /></Link>
        </div>
        {sidebars.map((sidebar,index) => (
          <Link key={index}   className={classes.linkColor} to={sidebar.link}><ListItem button >
            {sidebar.icon}
            <ListItemText className={classes.text} primary={sidebar.title} />
          </ListItem></Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            edge="start"
            color="inherit"
            aria-label="open drawer"
            style={{padding: "0"}}
          >
            <MenuIcon />
          </IconButton>
        
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
