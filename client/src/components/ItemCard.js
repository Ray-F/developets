import React, {useState, useEffect} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import tokenImg from '../../src/components/images/tokens.png';
import styled from 'styled-components';

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
    color: 'white',
  },
  button: {
    color: 'white',
  }
});

const Simg = styled.img`
  width: 30px;
  
  position: relative;
  top: 8px;
`

export default function ItemCard(props) {

  const classes = useStyles();

  const [amount, setAmount] = useState(props.amount);

  useEffect(() => {
    if (amount === 1) {
      props.handleUnmount(props.index);
    }
  }, [amount])

  const purchaseItem = () => {
    if (props.tokens - props.cost >= 0) {
      props.subtractTokens(props.cost);
      setAmount(amount - 1);

      // todo: need cennznet id
      // const reqOptions = {
      //   method: 'POST',
      //   body: {}
      // };

      // fetch('...', reqOptions)
    } else {
      alert("lmao broke boi");
    }
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Accessory"
          height="140"
          image={props.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div className={classes.details}>
            <Typography variant="h5" component="h2">
              {props.name} x {amount}
            </Typography>
            <Typography variant="h5" component="h2">
              <Simg src={tokenImg}  alt={"token"} />{ props.cost}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.button} onClick={purchaseItem}>
          Purchase
        </Button>
      </CardActions>
    </Card>
  );
}
