import Page from '../layouts/main'
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  mainGrid: {
    height: '70vmin',
    width: 'auto',
    background:'url(https://res.cloudinary.com/ddsihrmda/image/upload/v1548226609/carlos-muza-84523-unsplash_kcw88s.jpg) no-repeat center center fixed',
    position: 'relative',
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
    backgroundSize: 'cover',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  subGridOne: {
    backgroundColor: 'rgba(248, 247, 216, 0.7)',
    height: '70vmin',
  },
  subGridTwo: {
    backgroundColor: 'rgba(248, 247, 216, 0.7)',
    height: '70vmin',
  },
  subGridThree: {
    backgroundColor: 'rgba(248, 247, 216, 0.7)',
    height: '70vmin',
  },
  mainInnerContainer: {
    height: '100%',
    backgroundColor: 'green',
    opacity: '.5'
  },

};

//  xs={8} sm={4}

class Index extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Page>

        <div className={classes.root}>

            <AppBar position="sticky">
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

          <Grid className={classes.mainGrid} container spacing={8}>

            <Grid className={classes.subGridOne} item xs={12} sm={4}>
                <div className={classes.mainInnerContainer}>

                </div>
            </Grid>

            <Grid className={classes.subGridTwo} item xs={12} sm={4}>
                <div  className={classes.mainInnerContainer}>
                  
                </div>
            </Grid>

            <Grid className={classes.subGridThree} item xs={12} sm={4}>
                <div  className={classes.mainInnerContainer}>
                  
                </div>
            </Grid>
     
          </Grid>
      </div> 
    </Page>
    );
  }
}



Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);