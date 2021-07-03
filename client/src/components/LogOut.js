import {
    Typography,
    makeStyles,
    Button,
    Box,
  } from '@material-ui/core';

  const useStyles = makeStyles((theme) => ({

    whiteButtonText: {
        color: "white",
        fontFamily: "Rubik",
        fontSize: 18,
    },

    logOut: {
    position: "fixed",
    marginTop: 77,
    right: 100,
    },

    outButton: {
    borderColor: "#7289DA",
    borderWidth: 4,
    borderRadius: 16,
    },

}));

export default function LogoImage() {

    const classes = useStyles();

    const logOut = () => {
        window.location = '/';
      };

    return (
    <div>
        <Box className={classes.logOut}>
            <Button className={classes.outButton}
            variant="outlined"
            onClick={logOut}
            >
              <Typography className={classes.whiteButtonText}>
                Log Out
              </Typography>
            </Button>
        </Box>
    </div>
    )
}