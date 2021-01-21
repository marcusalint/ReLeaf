// import React from 'react'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import IconButton from '@material-ui/core/IconButton'
// import classes from '@material-ui/core/classes'
// import MenuIcon from '@material-ui/icons/Menu'
// import Typography from '@material-ui/core/Typography'



// export default function Navbar() {
//   return (
//     <div>
//     <AppBar position="static">
//   <Toolbar>
//     <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//       <MenuIcon />
//     </IconButton>
//     <Typography variant="h6" className={classes.title}>
//       News
//     </Typography>
//     <Button color="inherit">Login</Button>
//   </Toolbar>
// </AppBar>
//     </div>
//   )
// }
// // import React from 'react';
// // import { Button } from '@material-ui/core';
// // export default function Navbar() {
// //   return <Button color="primary">Hello World</Button>;
// // }


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.css'

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
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          <img className="logo" src="/images/plant.png"/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Releaf
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}