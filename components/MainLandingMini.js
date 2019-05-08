import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({

    root: {
      flexGrow: 1,
      height: '100px'
    }

  });

class MainLandingMini extends React.Component {
    
    render() {
        const { classes} = this.props;
    
        return (
          <div className={classes.root}>
            <Typography>Main Landing Mini</Typography>
          </div>
        );
    }
}

MainLandingMini.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MainLandingMini);