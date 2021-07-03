import React, { useEffect, useState } from 'react';

import {
  AppBar, Box, Button, CircularProgress, Grid, LinearProgress, makeStyles, Typography,
} from '@material-ui/core';

import petVideo from '../../resources/pet.mp4';

import LogoImage from '../../components/LogoImage';

import styled from 'styled-components';
import { getColorForPercentage } from '../../util/Colour';

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
    backgroundColor: 'black',
    height: '100vh',
    width: '100vw',
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

  petVideo: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },

  bottomOptions: {
    color: 'white',
    textAlign: 'center',
    margin: '0 auto',
    position: 'fixed',
    width: 1000,
    maxWidth: '100%',
    bottom: 100,
    left: '50%',
    transform: 'translateX(-50%)',
  },

  optionButton: {
    color: '#7289DA',
    border: '3px solid #7289DA',
    borderRadius: '10px',

    width: 120,
  },

  batteryPct: {
    position: 'relative',
    top: -10,
    left: -85,
    marginBottom: 10,
  },
}));

const StyledBattery = styled(LinearProgress)`
  border-radius: 10px;
  height: 40px;
  width: 200px;
  margin-bottom: 20px;

  position: relative;
  left: 50%;
  transform: translateX(-50%);

  &.MuiLinearProgress-root {
    overflow: hidden;
    background-color: #FFFFFF;
  }

  .MuiLinearProgress-bar {

    background-color: ${(props) => getColorForPercentage(props.level / 100)};;
  }
`;

const TopBox = styled(Box)`
  position: absolute;
  left: 50%;
  top: 150px;
  transform: translateX(-50%);
  color: white;
`;


export default function IndexPage() {
  const [pet, setPet] = useState({});

  const mockPet = {
    name: 'Ollie',
    energyLevel: 10,
  };

  useEffect(() => {
    setPet(mockPet);

    // fetch("/api/pet", { method: "GET" })
    // .then(async (res) => {
    //   let resObject = await res.json();
    //
    // });

  }, []);

  const classes = useStyles();

  const openMarket = () => {
    window.location = '/market';
  };

  const clickFeed = () => {
    setPet({ ...pet, energyLevel: Math.min(pet.energyLevel + 10, 100) });
  };


  return (
    <div className={classes.bg}>
      <div className={classes.appBar}>
        <AppBar position="static" style={{ backgroundColor: '#2C2F33' }}>
          <LogoImage />
          {/*<Toolbar>*/}
          {/*  <IconButton*/}
          {/*    edge="start"*/}
          {/*    className={classes.marketButton}*/}
          {/*    color="inherit"*/}
          {/*    aria-label="menu"*/}
          {/*    onClick={openMarket}*/}
          {/*  >*/}
          {/*    <StoreIcon />*/}
          {/*  </IconButton>*/}
          {/*  <Typography variant="h6" className={classes.title}>*/}
          {/*    Team ABC*/}
          {/*  </Typography>*/}
          {/*  <Button color="inherit">Logout</Button>*/}
          {/*</Toolbar>*/}
        </AppBar>
      </div>

      <TopBox>
        <Typography variant={'h4'}>
          {pet.name}
        </Typography>
      </TopBox>

      <video className={classes.petVideo} autoPlay={true} muted={true} width={350} height={350} loop={true}>
        <source src={petVideo} type={'video/mp4'} />
      </video>

      <Box className={classes.bottomOptions}>
        {
          pet.name ? (
            <Grid container>
              <Grid item xs={4}>
                <Button className={classes.optionButton} onClick={clickFeed}>
                  Feed Me
                </Button>
              </Grid>

              <Grid item xs={4}>
                <StyledBattery level={pet.energyLevel} className={classes.battery} variant="determinate"
                               value={pet.energyLevel} />
                <Typography variant={'body2'} className={classes.batteryPct}>{pet.energyLevel}%</Typography>
              </Grid>

              <Grid item xs={4}>
                <Button className={classes.optionButton} onClick={() => window.location = '/market'}>
                  Market
                </Button>
              </Grid>

            </Grid>
          ) : <CircularProgress />
        }

      </Box>

      <div className={classes.strip} />
    </div>
  );
}
