import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import LogoImage from "../../components/LogoImage.js";
import nohat from '../../components/images/noHat.png';
import hat from '../../components/images/withHat.png';


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

  },

  hat: {
    position:'absolute',
    marginTop: 199,
    marginLeft: 101,

  },

  hitbox: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    width: 121,
    left: 930,
    top: 200,
    height: 121,
    opacity: 0,
    transitionDuration: '0.2s',

    '&:hover': {
      transitionDuration: '0.2s',
      opacity: 0.5
    }
  }

}));


export default function InventoryPage() {
  const classes = useStyles();

  const [isHatEnabled, setIsHatEnabled] = useState(false);

  const changeImage = () => {
    setIsHatEnabled(true);
  }

  return (
    <div className={classes.container}>
      <div className={classes.logoPNG}>
        <LogoImage></LogoImage>

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