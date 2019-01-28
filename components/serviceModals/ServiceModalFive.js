import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';



const styles = {
  card: {
    height:'100%',
    width:'100%',
  },
  media: {
    height: '20vmin',
    width:'auto',
  },
  smMainSection: {
    height:'60vmin',
    width:'auto',
  },
};


class ServiceModalFive extends React.Component {
    handleClose = () => {
        this.props.onClose(this.props.selectedValue);
      };
    
      handleListItemClick = valueFive => {
        this.props.onClose(valueFive);
      };
    
    render() {
        const { classes, onClose, selectedValue, ...other } = this.props;
    
        return (
          <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent  className={classes.media}>
                  <Typography gutterBottom variant="h2" component="h2">
                    Service 5
                  </Typography>
                </CardContent>
                <CardContent className={classes.smMainSection}>
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
          </Dialog>
        );
    }
}

ServiceModalFive.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ServiceModalFive);