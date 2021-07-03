import { makeStyles } from '@material-ui/core'
import React, {useState, useEffect} from 'react'

const useStyles = makeStyles((themes) => ({
    button: {
    color: '#FFFFFF',
    border: '4px solid #7289DA',
    borderRadius: '16px',
    backgroundColor: 'transparent',
    margin: 40,
    marginTop: 40,

    width: 140,

    }
 

}));

export default function BackButton(){

    return(
        <Button className={classes.button} 
        onClick={() => (window.location = '/')}>
        <b>Back</b>
        </Button>

    )

}



