import React, {useState, useEffect} from 'react';

import { Grid, AppBar, Toolbar, Typography, Button, IconButton, makeStyles } from "@material-ui/core";

import StoreIcon from '@material-ui/icons/Store';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'red',
  },
  appBar: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  marketButton: {
    marginRight: theme.spacing(2),
  },
  bg: {
    background: `url(http://hdlatestwallpaper.com/wp-content/uploads/2015/04/Dog-House.jpg)`,
  },
}));



export default function IndexPage() {

  const classes = useStyles();

  const openMarket = () => {
    window.location = "/market";
  }

  return (
    <React.Fragment>
      <div className={classes.appBar}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.marketButton}
              color="inherit"
              aria-label="menu"
              onClick={openMarket}
            >
              <StoreIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Team ABC
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>

      <div className={classes.bg}>

      </div>
      
    </React.Fragment>
  );
}
