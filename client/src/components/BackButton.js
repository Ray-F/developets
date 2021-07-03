import { makeStyles } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((themes) => ({
button: {
    position: 'absolute',
    color: '#FFFFFF',
    border: '4px solid #7289DA',
    borderRadius: '16px',
    backgroundColor: 'transparent',
    marginTop: 780,
    width: 140,
    left: '50%',
    transform: 'translateX(-50%)',
    
  
    
    
    }
 

}));

export default function BackButton(){
    const classes = useStyles();
    return(
        <Button className={classes.button} 
        onClick={() => (window.location = '/pet')}>
        <b>Back</b>
        </Button>

    )

}



