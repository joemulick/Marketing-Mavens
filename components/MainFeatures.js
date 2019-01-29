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
    minHeight: '350px',
  }, 
  card2: {
    margin: '15vh 5% 15vh 5%',
    border: '1px black solid',
    minHeight: '350px',
  },
  card3: {
    margin: '15vh 10% 15vh 0%',
    border: '1px black solid',
    minHeight: '350px',
  },
  media: {
    height: 140,
  },
  cardText: {
    height: '163px',
  }
};

function FormRow(props) {
  const { classes } = props;

  return (
    <React.Fragment>
        <Grid item sm={12} md={4}>
              <Card className={classes.card1}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://res.cloudinary.com/ddsihrmda/image/upload/v1548226401/shutterstock_tjrhg5.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent className={classes.cardText}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Thing One
                    </Typography>
                    <Typography component="p">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
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

        <Grid item sm={12} md={4}>
            <Card className={classes.card2}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://res.cloudinary.com/ddsihrmda/image/upload/v1548226401/shutterstock_tjrhg5.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent className={classes.cardText}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Thing Two
                    </Typography>
                    <Typography component="p">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
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

        <Grid item sm={12} md={4}>
            <Card className={classes.card3}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://res.cloudinary.com/ddsihrmda/image/upload/v1548226401/shutterstock_tjrhg5.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent className={classes.cardText}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Thing Three
                    </Typography>
                    <Typography component="p">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
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