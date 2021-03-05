import React, {useContext, useEffect} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { authContext } from '../../contexts/AuthContext';
import FavoriteIcon from '@material-ui/icons/Favorite';


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
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { loginUser, getLoginUser } = useContext(authContext);
  const history = useHistory();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  useEffect(() => {
    getLoginUser()
  }, [])

  useEffect(() => {
    if (!localStorage.getItem('currentUser')) {
      localStorage.setItem('currentUser', '[]');
    }
    if (loginUser[0]) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      currentUser.push(loginUser[0])
      localStorage.setItem('currentUser', JSON.stringify(currentUser))
    }
  }, [loginUser])

  
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    
  };
  const handleClose23 = ()=>{
    isAdmin()
    handleMenuClose()
  }
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const logOut =()=>{
    localStorage.setItem('currentUser', JSON.stringify([]))
    getLoginUser()
    handleMenuClose()
  }

  const isAdmin = () => {
    if(loginUser[0]?.email==='admin@mail.ru'){
      history.push("/admin")
    }else{
      history.push('/')
    }
  }


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
        <Link to="/register">
        <MenuItem onClick={handleMenuClose}>Регистрация</MenuItem>
      </Link>

      

      {loginUser.length ? 
      <div>
        <MenuItem onClick={handleClose23}>{loginUser[0]?.email}</MenuItem>
      <Link to="/">
        <MenuItem onClick={logOut}>Выйти</MenuItem>
      </Link>
      </div>
       : <Link to="/login">
          <MenuItem onClick={handleMenuClose}>Вход</MenuItem>
        </Link>}
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
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (

    <div className="classes-grow" style={{backgroundColor:'red'}}>
        
      <AppBar position="static" style={{backgroundColor: 'transparent', color: 'black', boxShadow:'none',opacity:'1'}}>
        <Toolbar>
          <Link to='/'>
           
          </Link>
          <div className={classes.search}>
          </div>
          <div className={classes.grow} />
          <div className="hamburger-menu " style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id="menu__toggle" />
            <label htmlFor="menu__toggle" className="menu__btn">
              <span></span>
            </label>
            <ul className="navbar__menu menu__box">
                <li className="navbar__item icons__navbar">
                  <button style={{border:'0', backgroundColor:'transparent'}} onClick={isAdmin}>


{loginUser[0]?.email}
                  </button>
                </li>
              <li className="navbar__item"></li>
              <Link className="shopping-cart-link" to='/cart'>
                <li className="navbar__item icons__navbar"><ShoppingCartIcon />
                </li>
              </Link>
              <Link className="shopping-cart-link" to='/favorite'>
                <li className="navbar__item icons__navbar"><FavoriteIcon />
                </li>
              </Link>
              <li className="login__form">
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color='inherit'
                >
                  <AccountCircle />
                </IconButton></li>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}