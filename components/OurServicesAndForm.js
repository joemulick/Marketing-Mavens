import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SignUpFourCol from './forms/SignUpFourCol';
import { StickyContainer } from 'react-sticky';



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
    minHeight: '400px',
    backgroundColor:'#ddd2e6',
  },
  

};


class OurServicesAndForm extends React.Component {


    render() {

        const { classes } = this.props;

        return (

            <div className={classes.root}>
              <StickyContainer>
                <Grid container className={classes.sectionalBackground3}>
                    <Grid item xs={12} md={8}>
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
                    <Grid item xs={12} md={4}>
                        <div>
                          <SignUpFourCol />
                        </div>
                    </Grid>
                </Grid>
              </StickyContainer>
            </div>

      );
    }
  }
  


OurServicesAndForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(OurServicesAndForm);