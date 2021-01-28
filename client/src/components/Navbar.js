import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="navbar-color">
      <AppBar position="fixed" color="800" style={{opacity: 0.7}}>
        <Toolbar className="toolbar">

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src="/images/plant.png" className="logo"/>
          </IconButton>

          <Button color="inherit">My Campaign</Button>
          <Button color="inherit" href="/all_funds">Search Campaign</Button>

          <Typography variant="h6" className={classes.title}>
            <Link to={'/home'} style={{ textDecoration: 'none' }} className="link-home">
              Releaf
            </Link>
          </Typography>

          <Button color="inherit">Logout</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}