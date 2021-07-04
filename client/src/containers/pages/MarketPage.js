import React, { useEffect, useState } from 'react';

import {
  Box,
  CircularProgress,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

import ItemCard from '../../components/ItemCard';
import LogoImage from '../../components/LogoImage';
import Tokens from '../../components/Tokens';
import LogOut from '../../components/LogOut';
import BackButton from '../../components/BackButton';

import styled from 'styled-components';
import Strip from '../../components/Strip';

import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import LoadingBox from '../../components/LoadingBox';

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
  gridItem: {
    padding: '20px',
  },
  navSection: {
    height: 150,
  },
}));


const orgId = 123;

export default function MarketPage() {
  const [items, setItems] = useState([]);
  const [tokens, setTokens] = useState(null);
  const [accountData, setAccountData] = useState();

  useEffect(() => {
    fetch(`/api/market?orgId=${orgId}`, { method: 'GET' }).then(async (res) => {
      const resObject = await res.json();
      console.log(resObject);

      setItems(resObject.accessories);
      setTokens(resObject.tokens);
      console.log(resObject.accessories);

      // during data blockchain fetch get address of wallet aswell
      const allInjected = await web3Enable('Developets NFT Market');
      const allAccounts = await web3Accounts();
      console.log(allAccounts);

      // take the first account from the list
      setAccountData(allAccounts[0]);
    });
  }, []);

  const classes = useStyles();

  const openPet = () => {
    window.location = '/pet';
  };

  const subtractTokens = (cost) => {
    setTokens(tokens - cost);
  };

  const handleUnmount = (index) => {
    console.log('handle unmount' + index);
    items.splice(index, 1);
    setItems(items);
  };

  return (
    <React.Fragment>
      <Box className={classes.navSection}>
        <LogoImage />
        <Tokens nTokens={tokens} />
        <div>
          <LogOut />
        </div>
      </Box>

      <Container maxWidth={'lg'}>
        <Grid container>
          {items.length === 0 ? (
            <LoadingBox loadingMsg={"Retrieving NFT accessories from the CennzNet"} />
          ) : (
            items.map((item, i) => {
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
                    accountData={accountData}
                    accessoryId={item.accessory.accessoryId}
                  />
                </Grid>
              );
            })
          )}
        </Grid>
      </Container>

      <Strip />
      <BackButton />
    </React.Fragment>
  );
}
