import React from 'react';
import LogoImage from '../../components/LogoImage.js';
import DogVideo from '../../resources/dog.mp4';
import FoxVideo from '../../resources/fox.mp4';
import KoalaVideo from '../../resources/koala.mp4';
import { Typography, Button, makeStyles, Box } from '@material-ui/core';
import Strip from '../../components/Strip';
import ScrollAnimation from 'react-animate-on-scroll';


const useStyles = makeStyles((theme) => ({
  navButton: {
    backgroundColor: 'transparent',
    borderBottom: '3px solid white',
    padding: '0 0 5px 0',
    margin: 40,
    marginTop: 40,
  },

  boxRight: {
    position: 'fixed',
    right: 120,
    top: 35,
  },

  whiteBodyText: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: 19,
  },

  whiteButtonText: {
    color: 'white',
    fontFamily: 'Rubik',
    fontSize: 18,

    padding: 10,
    textTransform: 'capitalize',
  },

  whiteBlurbText: {
    color: 'white',
    fontFamily: 'Rubik',
    fontSize: 27,
  },

  whiteBlurbBody: {
    color: 'white',
    fontFamily: 'Rubik',
    fontSize: 18,
  },

  blurbBox: {
    position: 'fixed',
    marginTop: 255,
    marginLeft: 200,
  },

  bodyBox: {
    position: 'fixed',
    marginTop: 370,
    marginLeft: 200,
  },

  startButton: {
    position: 'fixed',
    borderColor: '#7289DA',
    borderWidth: 4,
    marginTop: 500,
    marginLeft: 380,
    borderRadius: 16,
  },

  dog: {
    position: 'fixed',
    marginTop: 160,
    marginLeft: 850,
    transform: 'rotate(-35deg)',
  },

  fox: {
    position: 'fixed',
    marginTop: 240,
    marginLeft: 1100,
    transform: 'rotate(35deg)',
  },

  koala: {
    position: 'fixed',
    marginTop: 360,
    marginLeft: 870,
    transform: 'rotate(-10deg)',
  },

  bodyMain: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black !important',
  },
}));

export default function HomePage() {
  const classes = useStyles();

  const getStarted = () => {
    window.location = '/pet';
  };

  return (
    <React.Fragment>
      <div className={classes.bodyMain}>
        <div>
          <Box className={classes.boxRight}>
            <Button className={classes.navButton} variant="outlined">
              <Typography className={classes.whiteButtonText}>
                Log In
              </Typography>
            </Button>
            <Button className={classes.navButton} variant="outlined">
              <Typography className={classes.whiteButtonText}>
                Sign Up
              </Typography>
            </Button>
          </Box>
        </div>

        <div>
          <LogoImage />
        </div>

        <div>
          <Box className={classes.blurbBox} width="40%">
            <ScrollAnimation animateIn={'animate__fadeInDown'} duration={1}>
              <Typography className={classes.whiteBlurbText}>
                Introduce an interactive virtual team pet to your workplace
              </Typography>
            </ScrollAnimation>
          </Box>

          <Box className={classes.bodyBox} width="40%">
            <ScrollAnimation animateIn={'animate__fadeInUp'} duration={1}>
              <Typography className={classes.whiteBlurbBody}>
                Developets is the best platform to encourage better team
                performance and motivation through a fun and interactive mascot.
              </Typography>
            </ScrollAnimation>
          </Box>
        </div>

        <Button
          className={classes.startButton}
          variant="outlined"
          onClick={getStarted}
        >

          <Typography className={classes.whiteButtonText}>
            Get Started
          </Typography>

        </Button>

        <div>
          <video
            className={classes.dog}
            autoPlay={true}
            muted={true}
            width={270}
            height={270}
            loop={true}
          >
            <source src={DogVideo} type={'video/mp4'} />
          </video>

          <video
            className={classes.fox}
            autoPlay={true}
            muted={true}
            width={270}
            height={270}
            loop={true}
          >
            <source src={FoxVideo} type={'video/mp4'} />
          </video>

          <video
            className={classes.koala}
            autoPlay={true}
            muted={true}
            width={270}
            height={270}
            loop={true}
          >
            <source src={KoalaVideo} type={'video/mp4'} />
          </video>
        </div>
      </div>

      <Strip />
    </React.Fragment>
  );
}
