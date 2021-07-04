import React, { useEffect, useState } from 'react';

import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  Grid,
  LinearProgress,
  makeStyles,
  Typography,
} from '@material-ui/core';

import petVideo from '../../resources/pet.mp4';

import LogoImage from '../../components/LogoImage';
import LogOut from '../../components/LogOut';
import styled from 'styled-components';
import { getColorForPercentage } from '../../util/Colour';
import Tokens from '../../components/Tokens';
import Strip from '../../components/Strip';
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
    top: '45%',
    transform: 'translate(-50%, -50%)',
  },

  bottomOptions: {
    color: 'white',
    textAlign: 'center',
    margin: '0 auto',
    position: 'fixed',
    width: 1000,
    maxWidth: '100%',
    bottom: -30,
    left: '50%',
    transform: 'translateX(-50%)',
  },

  optionButton: {
    color: '#FFFFFF',
    border: '4px solid #7289DA',
    borderRadius: '16px',
    backgroundColor: 'transparent',
    margin: 40,
    marginTop: 40,

    width: 140,
  },

  inventoryButton: {
    color: '#FFFFFF',
    border: '4px solid #7289DA',
    borderRadius: '16px',
    backgroundColor: 'transparent',
    margin: 40,
    marginTop: 40,

    width: 140,
  },

  batteryPct: {
    position: 'relative',
    top: -70,
    marginBottom: 10,
  },
}));

const StyledBattery = styled(LinearProgress)`
  border-radius: 10px;
  height: 40px;
  width: 200px;
  margin-bottom: 20px;

  bottom: 60px;

  position: relative;
  left: 50%;
  transform: translateX(-50%);

  &.MuiLinearProgress-root {
    overflow: hidden;
    background-color: #ffffff;
  }

  .MuiLinearProgress-bar {
    background-color: ${(props) => getColorForPercentage(props.level / 100)};
  }
`;

const TopBox = styled(Box)`
  position: absolute;
  left: 50%;
  top: 150px;
  transform: translateX(-50%);
  color: white;
`;

const SBoxRelative = styled(Box)`
  position: relative;
  top: -150px;
`;

const PetName = styled(Typography)`
  font-family: "Rubik", sans-serif;
`;

export default function IndexPage() {
  const [coins, setCoins] = useState(null);
  const [health, setHealth] = useState(null);

  useEffect(() => {
    const fetchMethod = () => {
      fetch('/api/pet', { method: 'GET' })
        .then(async (res) => {
          let resObject = await res.json();

          setCoins(resObject.coins);
          setHealth(resObject.hp);
        });
    }

    fetchMethod();
    setInterval(fetchMethod, 3000);

  }, []);

  const classes = useStyles();

  const clickFeed = () => {
    if (health === 100) {
      return;
    }

    if (coins < 5) {
      alert('lmao broke boi');
      return;
    }

    const newHealth = Math.min(health + 10, 100);
    const newCoins = coins - 5;

    setHealth(newHealth);
    setCoins(newCoins);

    // TODO: Post request to adjust coin

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
                             coin: newCoins,
                             hp: newHealth,
                           }),
    };

    fetch('/api/pet', options)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className={classes.bg}>
      <Tokens nTokens={coins} />
      <div className={classes.appBar}>
        <AppBar position="static" style={{ backgroundColor: '#2C2F33' }}>
          <LogoImage />
        </AppBar>
      </div>

      <div>
        <LogOut />
      </div>

      {
        coins !== null ? (
          <>
            <TopBox>
              <PetName variant={'h4'}>Einstein</PetName>
            </TopBox>

            <video
              className={classes.petVideo}
              autoPlay={true}
              muted={true}
              width={350}
              height={350}
              loop={true}
            >
              <source src={petVideo} type={'video/mp4'} />
            </video>
          </>
        ) : <LoadingBox loadingMsg={'Loading your favourite pet'} />
      }


      <Box className={classes.bottomOptions}>
        {coins !== null ? (
          <Grid container>
            <Grid item xs={4}>
              <Button
                className={classes.inventoryButton}
                onClick={() => (window.location = '/inventory')}
              >
                <b>Inventory</b>
              </Button>
            </Grid>

            <Grid item xs={4}>
              <Button className={classes.optionButton} onClick={clickFeed}>
                <b>Feed Me</b>
              </Button>

              <SBoxRelative>
                <StyledBattery
                  level={health}
                  className={classes.battery}
                  variant="determinate"
                  value={health}
                />
                <Typography variant={'body2'} className={classes.batteryPct}>
                  <b>{health} HP</b>
                </Typography>
              </SBoxRelative>
            </Grid>

            <Grid item xs={4}>
              <Button
                className={classes.optionButton}
                onClick={() => (window.location = '/market')}
              >
                <b>Market</b>
              </Button>
            </Grid>
          </Grid>
        ) : null
        }
      </Box>

      <Strip />
    </div>
  );
}
