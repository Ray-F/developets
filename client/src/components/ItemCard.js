import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#7289DA',
  },
  title: {
    fontSize: 14,
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default function ItemCard(props) {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <div className={classes.details}>
            <Typography variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="h5" component="h2">
              {props.cost}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Button size="small" color="#FFFFFF">
            Purchase
          </Button>
      </CardActions>
    </Card>
  );
}
