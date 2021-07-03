import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  strip: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '20px',
    borderStyle: 'solid',
    borderColor: '#7289DA',
    backgroundColor: '#7289DA',
  },
}))

const Strip = () => {
  const classes = useStyles();

  return (
    <div className={classes.strip} />
  );
};

export default Strip;
