import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, IconButton, MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <MenuItem>Sell</MenuItem>
          <MenuItem>Buy</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
          {/* <Typography variant="h6" className={classes.title}>
            Ashley Vanessa Realtors
          </Typography> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
