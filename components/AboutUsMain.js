import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    root: {
      flexGrow: 1,
    },
}

class AboutUsMain extends React.Component {

    render() {

        const { classes } = this.props;

        return (
          <div className={classes.root}>
              <Grid container>
                  <Typography>
                      About Us Main
                  </Typography>
              </Grid>
          </div>
      );
    }
  }
  


AboutUsMain.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AboutUsMain);