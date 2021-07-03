import React from 'react'
import LogoImage from "../../components/LogoImage.js"
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  Box
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'blue',
    },

    navButton: {
        backgroundColor: "transparent",
        borderColor: "#7289DA",
        borderWidth: 4,
        margin: 40,
        marginTop: 40,
        borderRadius: 16,
    },

    boxRight: {
        position: 'fixed',
        right: 120,
        top: 35,
    },

    whiteBodyText: {
        color: "white",
        fontFamily: "Arial",
        fontSize: 19,
    },

    whiteButtonText: {
        color: "white",
        fontFamily: "Rubik",
        fontSize: 18,
    },

    whiteBlurbText: {
        color: "white",
        fontFamily: "Rubik",
        fontSize: 27,
    },

    blurbBox: {
        position: "fixed",
        marginTop: 240,
        marginLeft: 200,
    },

    bodyBox: {
        position: "fixed",
        marginTop: 380,
        marginLeft: 200,
    },

    startButton: {
        position: "fixed",
        borderColor: "#7289DA",
        borderWidth: 4,
        marginTop: 540,
        marginLeft: 380,
        borderRadius: 16,
    },

}));

export default function HomePage() {

    const classes = useStyles();

    const getStarted = () => {
        window.location = './PetPage.js';
      };

    return (
        <React.Fragment>
            <div>
                <div>
                        <Box className={classes.boxRight}>
                            <Button className={classes.navButton}
                                variant="outlined"
                                >
                                <Typography className={classes.whiteButtonText}>
                                Log In
                                </Typography> 
                            </Button>
                            <Button className={classes.navButton}
                                variant="outlined" 
                            >
                                <Typography className={classes.whiteButtonText}>
                                    Sign Up
                                </Typography>
                            </Button>
                        </Box>
                </div>

                <div>
                    <LogoImage></LogoImage>
                </div>

                <div>
                <Box className={classes.blurbBox} width="40%">
                    <Typography className={classes.whiteBlurbText}>
                        Introduce an interactive virtual team pet to your workplace
                    </Typography>
                </Box>

                <Box className={classes.bodyBox} width="40%">
                    <Typography className={classes.whiteButtonText}>
                        Developets is the best platform to encourage better team performance and motivation through a fun and interactive team mascot.
                    </Typography>
                </Box>
                </div>

                <div>
                    <Button 
                    className={classes.startButton}
                    variant="outlined" 
                    onClick={getStarted}
                    >
                        <Typography className={classes.whiteButtonText}>
                            Get Started
                        </Typography>
                    </Button>
                </div>

            </div>
        </React.Fragment>
    );
}
