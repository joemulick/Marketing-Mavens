import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const styles = {

  root: {
    flexGrow: 1,
  },
  sectionalBackground3: {
    minHeight: '70vmin',
    width: 'auto',
    backgroundColor:'#fff2e6',
  },

};


class OurServicesAndForm extends React.Component {


    render() {

        const { classes } = this.props;

        return (

            <div className={classes.root}>
                <Grid container className={classes.sectionalBackground3}>
                    <Grid item xs={12}>
                        <Typography className={classes.paper}>xs=12</Typography>
                    </Grid>
                </Grid>
            </div>

      );
    }
  }
  


OurServicesAndForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(OurServicesAndForm);