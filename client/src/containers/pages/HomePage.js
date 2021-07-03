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
        margin: 15,
        spacing: 20,
    },

    boxRight: {
        position: 'fixed',
        right: 120,
        top: 35,
    },

    centerLeft: {
        position: 'fixed',
        marginTop: 40,
        marginLeft: 200,
    },

    logoPNG: {
        position: 'fixed',
        marginTop: 60,
        zIndex: 100,
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

                <div>
                    <Grid 
                    className={classes.centerLeft}
                    direction="column"
                    justify="center"
                    alignItems="baseline">
                        <Typography variant="h3">
                            Developets
                        </Typography>
                        <Typography variant="h6">
                            Your favourite virtual pet
                        </Typography>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}
