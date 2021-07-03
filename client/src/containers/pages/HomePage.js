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
        backgroundColor: "gray",
        margin: 40,
        marginTop: 40,
    },

    boxRight: {
        position: 'fixed',
        right: 120,
        top: 35,
    },

    headText: {
        position: 'fixed',
        marginTop: 60,
        marginLeft: 290,
    },

    logoPNG: {
        position: 'fixed',
        marginTop: 25,
        marginLeft: 80,
    },

    whiteTextLogo: {
        color: "white",
        fontWeight: 600,
        fontFamily: "Rubik",
    },

    whiteText: {
        color: "white",
        fontFamily: "Rubik",
        fontStyle: "italic",
    },

}));

export default function HomePage() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <div style={{
                backgroundColor: "blue",}}
                >
                <div>
                        <Box className={classes.boxRight}>
                            <Button className={classes.navButton}
                                variant="contained" 
                                color="primary">
                                <Typography>
                                Log In
                                </Typography> 
                            </Button>
                            <Button className={classes.navButton}
                                variant="contained" 
                                color="primary">
                                <Typography>
                                    Sign Up
                                </Typography>
                            </Button>
                        </Box>
                </div>

                <div className={classes.logoPNG}>
                    <LogoImage></LogoImage>
                </div>
            </div>
        </React.Fragment>
    );
}
