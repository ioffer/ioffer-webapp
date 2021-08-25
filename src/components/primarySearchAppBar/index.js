import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ResponsiveDrawer from '../sideDrawer'
import {Link} from 'react-router-dom'
import StoreIcon from '@material-ui/icons/Store';
import Avatar from '@material-ui/core/Avatar';
import './primary-search.scss'
import TextsmsIcon from '@material-ui/icons/Textsms';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import {useDispatch, useSelector} from 'react-redux'
import { selectUser } from '../../redux/reducer/userSlice';
import { logout } from '../../redux/reducer/userSlice';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import {removeLocalStorage} from "../../lib/services";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function PrimarySearchAppBar() {
    const user= useSelector(selectUser)
    const dispatch=useDispatch()
    const signOut =()=>{
        removeLocalStorage();
        dispatch(logout());
    }
   
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
           <Link to="/profile"> <MenuItem onClick={handleMenuClose}>Profile</MenuItem></Link>
            <Link to="/register"><MenuItem onClick={handleMenuClose}>My account</MenuItem></Link>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {
                !localStorage.getItem('token') &&
                <div>
                    <Link  className="color-link" to="/login">
                        <MenuItem onClick={handleMenuClose}>
                            <IconButton aria-label="show 4 new favorites" color="inherit">
                                <VpnKeyIcon/>
                            </IconButton>
                            <p>Login </p>
                        </MenuItem>
                    </Link>
                    <MenuItem onClick={handleMenuClose}>
                        <IconButton aria-label="show 11 new notifications" color="inherit">
                            <TextsmsIcon/>
                        </IconButton>
                        <p>About Us </p>
                    </MenuItem>
                </div>
            }


            {
                localStorage.getItem('token') &&
                <div>
                    <Link onClick={handleMenuClose} className="color-link">
                        <MenuItem>
                            <IconButton aria-label="show 4 new favorites" color="inherit">
                                <Avatar src={user.avatar} />
                            </IconButton>
                            {user ? <p>{user.userName} </p> : !user ? <p></p> : ""}
                        </MenuItem>
                    </Link>
                    <hr/>
                    <Link  onClick={handleMenuClose} className="color-link" to="/vendor_shop">
                        <MenuItem>
                        <IconButton aria-label="show 4 new favorites" color="inherit">
                            <StoreIcon/>
                        </IconButton>
                        <p>Add Shop</p>
                    </MenuItem>
                    </Link>
                    <Link onClick={handleMenuClose} className="color-link" to="/user_profile"><MenuItem>
                        <IconButton aria-label="show 4 new favorites" color="inherit">
                            <ContactMailIcon/>
                        </IconButton>
                        <p>User Profile</p>
                    </MenuItem>
                    </Link>
                    <Link onClick={handleMenuClose} className="color-link" to="/user_kyc"><MenuItem>
                        <IconButton aria-label="show 4 new favorites" color="inherit">
                            <ContactMailIcon/>
                        </IconButton>
                        <p>User KYC</p>
                    </MenuItem>
                    </Link>
                    <Link className="color-link" onClick={handleMenuClose} to={'favorite'}>
                        <MenuItem>
                            <IconButton aria-label="show 4 new favorites" color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <FavoriteIcon/>
                                </Badge>
                            </IconButton>
                            <p>Favourites</p>
                        </MenuItem>
                    </Link>
                    <Link  className="color-link" onClick={handleMenuClose} to={'notification'}>
                        <MenuItem>
                            <IconButton aria-label="show 11 new notifications" color="inherit">
                                <Badge badgeContent={11} color="secondary">
                                    <NotificationsIcon/>
                                </Badge>
                            </IconButton>
                            <p>Notifications</p>
                        </MenuItem>
                    </Link>
                    <Link className="color-link" onClick={handleMenuClose} to={'about_us'}>
                        <MenuItem>
                            <IconButton aria-label="show 11 new notifications" color="inherit">
                                <TextsmsIcon/>
                            </IconButton>
                            <p>About Us </p>
                        </MenuItem>
                    </Link>
                    <Link to="/" className="color-link" onClick={signOut}><MenuItem>
                        <IconButton aria-label="show 11 new notifications" color="inherit">
                            <ExitToAppIcon/>
                        </IconButton>
                        <p>LogOut </p>
                    </MenuItem></Link>
                </div>
            }
            {/*<MenuItem onClick={handleProfileMenuOpen}>*/}
            {/*    <IconButton*/}
            {/*        aria-label="account of current user"*/}
            {/*        aria-controls="primary-search-account-menu"*/}
            {/*        aria-haspopup="true"*/}
            {/*        color="inherit"*/}
            {/*    >*/}
            {/*        <AccountCircle />*/}
            {/*    </IconButton>*/}
            {/*    <p>Profile</p>*/}
            {/*</MenuItem>*/}
        </Menu>
    );
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <ResponsiveDrawer/>
                
                   <Link to="/"> <Typography className={classes.title} variant="h6" noWrap>
                        IOFFER.PK
                    </Typography></Link>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new favorites" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <FavoriteIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
