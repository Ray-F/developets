import logoImage from "./images/logo.png"
import {
    Typography,
    makeStyles,
  } from '@material-ui/core';

  const useStyles = makeStyles((theme) => ({

    logoPNG: {
        position: 'fixed',
        marginTop: 40,
        marginLeft: 100,
    },

    whiteTextLogo: {
        position: 'fixed',
        marginTop: 60,
        marginLeft: 270,
        color: "white",
        fontWeight: 600,
        fontFamily: "Rubik",
    },

    whiteText: {
        position: 'fixed',
        marginTop: 110,
        marginLeft: 270,
        color: "white",
        fontFamily: "Rubik",
        fontStyle: "italic",
    },

}));

export default function LogoImage() {

    const classes = useStyles();

    return (
    <div className={classes.container}>
        <img src={logoImage} alt="Logo Image" width="160" height="120" className={classes.logoPNG}></img>
            <Typography className={classes.whiteTextLogo} variant="h3">
                Developets
            </Typography>
            <Typography className={classes.whiteText} variant="h6">
                Your favourite team companion
            </Typography>
    </div>
    )
}
