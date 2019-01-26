import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';

const styles = {
  card1: {
    margin: '15vh 0% 15vh 10%',
    border: '1px black solid',
    height: '35vh',
  },
  card2: {
    margin: '15vh 5% 15vh 5%',
    border: '1px black solid',
    height: '35vh',
  },
  card3: {
    margin: '15vh 10% 15vh 0%',
    border: '1px black solid',
    height: '35vh',
  },
};

function FormRow(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid item xs={12} sm={4}>
          <Card className={classes.card1}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card className={classes.card2}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card className={classes.card3}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
}

FormRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

function MainFeatures(props) {
  const { classes } = props;

  return (

      <Grid container spacing={8}>
        <Grid container item xs={12} spacing={24}>
          <FormRow classes={classes} />
        </Grid>
      </Grid>

  );
}

MainFeatures.propTypes = {
  classes: PropTypes.object.isRequired,
};

  export default withStyles(styles)(MainFeatures);