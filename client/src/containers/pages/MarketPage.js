import React from 'react'

import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
} from '@material-ui/core';

import PetIcon from '@material-ui/icons/Pets';

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
}));

export default function MarketPage() {

  const classes = useStyles();

  
  const openPet = () => {
    window.location = '/';
  };

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
              onClick={openPet}
            >
              <PetIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Pet Shop
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
}
