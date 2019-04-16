import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  
  navBarHeightTemp: {
    height: 140,
  }
};

function NavbarHeightSpacer(props) {
    
  const { classes } = props;
  
  return (
        <div className={classes.navBarHeightTemp}>
            
        </div>
  );
}



NavbarHeightSpacer.propTypes = {
  classes: PropTypes.object.isRequired,
};

  export default withStyles(styles)(NavbarHeightSpacer);