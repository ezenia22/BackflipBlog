import { Link, useHistory, useLocation } from 'react-router-dom';
import Image from 'next/image';
import logo from '../images/backflip_logo.png';
import navStyles from '../styles/nav.module.css';
import useStyles from '../styles/nav.module.js';
import { AppBar, Avatar, Toolbar, Button, Typography } from '@material-ui/core';
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import * as actionType from '../pages/constants/actionTypes';

const Nav = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT })
    history.push('/auth');
    setUser(null); 
  }

  useEffect(() => {
    const token = user?.token;

    if(token) {
      const decodedToken = decode(token);
      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    } 
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]) 

  return (
    <AppBar className={classes.appBar} position="static" color='inherit'>
      <nav className={classes.brandContainer}>
        <Image src={logo} alt='/' width="80px" height="38px" className={navStyles.logo} />
        <ul>
          <li>
            <Link href='#'>Home</Link>
          </li>
          <li>
            <Link href='#'>Blogs</Link>
          </li>
          <li>
            <Link href='#'>About</Link>
          </li>
          <li>
            <Link href='#'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.username} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Nav