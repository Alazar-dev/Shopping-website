import { useState, useEffect } from 'react'
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const useStyles = makeStyles(() => ({
    grid: {
        width: '100%',
        margin: '0px'
    },
    userButton: {
        color: 'white',
        display: 'flex',
        marginLeft: 'auto'
    },
    countButton: {
        color: 'white',
        display: 'flex',
        marginLeft: 'auto',
        fontSize: 20
    }
}))
const NavBar = () => {
      const [anchorEl, setAnchorEl] = useState(null);
      const [count, setCount] = useState(0)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };
    
    const classes = useStyles()
    return ( 
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Pick Fasion
                </Typography>
                
                <IconButton className={classes.userButton} color="primary" aria-label="add to shopping cart">
                  <AddShoppingCartIcon />
                  <Button className={classes.countButton}>{count}</Button>
                </IconButton>
                <Button onClick={handleClick} className={classes.userButton}><AccountCircle></AccountCircle></Button>
                <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Orders</MenuItem>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                
            </Toolbar>
        </AppBar>
     );
}
 
export default NavBar;

