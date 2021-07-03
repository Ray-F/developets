import React, {useState, useEffect} from 'react'

import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
  CircularProgress
} from '@material-ui/core';

import PetIcon from '@material-ui/icons/Pets';

import ItemCard from '../../components/ItemCard';

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
  strip: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '20px',
    borderStyle: 'solid',
    borderColor: '#7289DA',
    backgroundColor: '#7289DA',
  },
  gridItem: {
    padding: '20px',
  },
}));

const orgId = 123;

export default function MarketPage() {

  const [items, setItems] = useState([]);
  const [tokens, setTokens] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/market?orgId=${orgId}`, { method: 'GET' })
    .then(async (res) => {
      const resObject = await res.json();
      setItems(resObject.accessories);
      setTokens(resObject.tokens);
      setLoading(false);
      console.log(resObject);
    });
  }, []);

  const classes = useStyles();

  const openPet = () => {
    window.location = '/';
  };

  const subtractTokens = (cost) => {
    setTokens(tokens-cost);
  }

  const handleUnmount = (index) => {
    console.log('handle unmount' + index);
    items.splice(index, 1);
    setItems(items);
  }

  return (
    <React.Fragment>
      <div className={classes.appBar}>
        <AppBar position="static" style={{ backgroundColor: '#2C2F33' }}>
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
              MARKET PLACE
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Tokens: {tokens}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

      <Grid container>
        {items.map((item, i) => {
          return (
            <Grid
              item
              key={i}
              xs={12}
              sm={6}
              md={3}
              className={classes.gridItem}
            >
              <ItemCard
                index={i}
                name={item.accessory.name}
                cost={item.accessory.cost}
                amount={item.amount}
                imageUrl={item.accessory.media}
                subtractTokens={subtractTokens}
                handleUnmount={handleUnmount}
                tokens={tokens}
              />
            </Grid>
          );
        })}
      </Grid>

      <div className={classes.strip} />
    </React.Fragment>
  );
}
