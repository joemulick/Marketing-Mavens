import Page from '../layouts/main'
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  sectionMain: {
    backgroundColor: 'green'
  },
  media: {
    height: '70vh',
    filter: 'brightness(50%)',
  },  
  sectionTwo: {
    backgroundColor: 'green',
    height: '70vmin',
  },
};

class Index extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Page>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>

          <div className={classes.sectionMain}>
            <CardMedia
              className={classes.media}
              image="https://res.cloudinary.com/ddsihrmda/image/upload/v1548226609/carlos-muza-84523-unsplash_kcw88s.jpg"
              title="Main Splash"
            />
          </div>
          <div className={classes.sectionTwo}>
          </div>
        </div> 
      </Page>
    );
  }
}



Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);