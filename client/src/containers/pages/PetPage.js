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
    height: '100vh',
    width: '100vw',
    backgroundImage: `url("http://hdlatestwallpaper.com/wp-content/uploads/2015/04/Dog-House.jpg")`,
    backgroundPosition: 'center',
  },
  strip: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '20px',
    borderStyle: 'solid',
    borderColor: '#7289DA',
    backgroundColor: '#7289DA',
  },
}));



export default function IndexPage() {

  useEffect(() => {
    // fetch("http", { method: "GET" })
    // .then(async (res) => {
    //   let resObject = await res.json();
    // });

  }, []);

  const classes = useStyles();

  const openMarket = () => {
    window.location = "/market";
  }

  return (
    <div className={classes.bg}>
      <div className={classes.appBar}>
        <AppBar position="static" style={{ backgroundColor: '#2C2F33' }}>
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
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </div>

      <div className={classes.strip} />
    </div>
  );
}
