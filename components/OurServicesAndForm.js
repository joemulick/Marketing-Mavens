import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SignUpFourCol from './forms/SignUpFourCol';



const styles = {

  root: {
    flexGrow: 1,
  },
  sectionalBackground3: {
    minHeight: '70vmin',
    width: 'auto',
    backgroundColor:'#fff2e6',
  },
  contentSectionOurServices: {
    minHeight: '215px',
  },
  

};


class OurServicesAndForm extends React.Component {


    render() {

        const { classes } = this.props;

        return (

            <div className={classes.root}>
                <Grid container className={classes.sectionalBackground3}>
                    <Grid item md={12} lg={8}>
                        <div className={classes.contentSectionOurServices}>
                          <Typography>8? Collapse @ 1280 to 12</Typography>
                        </div>
                        <div className={classes.contentSectionOurServices}>
                          <Typography>8? Collapse @ 1280 to 12</Typography>
                        </div>
                        <div className={classes.contentSectionOurServices}>
                          <Typography>8? Collapse @ 1280 to 12</Typography>
                        </div>
                        <div className={classes.contentSectionOurServices}>
                          <Typography>8? Collapse @ 1280 to 12</Typography>
                        </div>
                    </Grid>
                    <Grid item md={12} lg={4}>
                        <div>
                          <Typography>Idea: Make Form about 60% height of left component and sticky to top of page?</Typography>
                          <SignUpFourCol />
                        </div>
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