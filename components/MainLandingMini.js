import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

const styles = theme => ({

    root: {
      flexGrow: 1,
    }

  });

class MainLandingMini extends React.Component {
    
    render() {
        const { classes} = this.props;
    
        return (
          <div className={classes.root}>
            <Typography>  Main Landing Mini  </Typography>
          </div>
        );
    }
}

MainLandingMini.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MainLandingMini);