import tokens from './images/tokens.png';
import { Typography, makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  tokensPNG: {
    position: 'fixed',
    top: 70,
    right: 155,
  },

  tokensNumber: {
    position: 'fixed',
    top: 80,
    right: 215,
    color: 'white',
    fontWeight: 600,
    fontFamily: 'Rubik',
  },
}));

export default function Tokens({ nTokens }) {
  const classes = useStyles();
  return (
    <div>
      <img
        src={tokens}
        alt="Tokens"
        width="60"
        height="60"
        className={classes.tokensPNG}
      />
      <Typography className={classes.tokensNumber} variant="h4">
        {nTokens === null ? <CircularProgress /> : nTokens}
      </Typography>
    </div>
  );
}
