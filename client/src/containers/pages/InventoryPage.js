import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import LogoImage from "../../components/LogoImage.js";
import nohat from '../../components/images/noHat.png';
import hat from '../../components/images/withHat.png';
import BackButton from '../../components/BackButton.js';
import Tokens from '../../components/Tokens';
import LogOut from '../../components/LogOut';


const useStyles = makeStyles((theme) => ({

  container: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
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

  nohat: {
    position: 'absolute',
    marginTop: 201,
    marginLeft: 100,
    width: 1000

  },

  hat: {
    position:'absolute',
    marginTop: 199,
    marginLeft: 101,
    width: 1000

  },

  hitbox: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    width: 89,
    left: 708,
    top: 200,
    height: 89,
    opacity: 0,
    transitionDuration: '0.2s',

    '&:hover': {
      transitionDuration: '0.2s',
      opacity: 0.5
    }
  },

  content: {
    transform: 'translateY(-30px)'
  }

}));


export default function InventoryPage() {
  const classes = useStyles();

  const [coins, setCoins] = useState(null);

  useEffect(() => {
    fetch("/api/pet", { method: "GET" })
      .then(async (res) => {
        let resObject = await res.json();

        setCoins(resObject.coins);
      });
  }, []);

  const [isHatEnabled, setIsHatEnabled] = useState(false);

  const changeImage = () => {
    setIsHatEnabled(true);
  }

  return (
    <div className={classes.container}>
      <BackButton />
      <LogoImage />
      <Tokens nTokens={coins} />
      <LogOut />

      <div className={classes.content}>
        {isHatEnabled ? (
          <img src={hat} className={classes.hat} />
        ) : (
          <img src={nohat} className={classes.nohat} />
        )}
        <div className={classes.hitbox} onClick={changeImage}>
        </div>
      </div>
      <div className={classes.strip} />
    </div>
  )
}
