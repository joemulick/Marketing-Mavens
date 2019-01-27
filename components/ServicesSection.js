import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    sectionTwoMainContainerHead: {
        background:'#fff2e6',
        height: '90px',
        width: 'auto',
    },
    sectionTwoInnerContainer: {
        backgroundColor: 'rgba(248, 247, 216, 0.7)',
        height: '70vmin',
    },
    sectionTwoMainContainer: {
        height: '70vmin',
        width: 'auto',
        background:'#fff2e6',
    },
};

class ServicesSection extends React.Component {

    render() {
        const { classes } = this.props;
    
        return (
            <div>
                 <Grid className={classes.sectionTwoMainContainerHead} container justify="center" spacing={8}>
                    <Grid className={classes.sectionTwoInnerContainer} item xs={12}>
                        <Typography align="center" variant="h6" color="inherit">
                        News
                        </Typography>
                    </Grid>
                </Grid>
                <Grid className={classes.sectionTwoMainContainer} container spacing={8}>
                    <Grid className={classes.sectionTwoInnerContainer} item xs={12} sm={4}>
                        <Typography variant="h6" color="inherit">
                        News
                        </Typography>
                    </Grid> 
                    <Grid className={classes.sectionTwoInnerContainer} item xs={12} sm={4}>
                        <Typography variant="h6" color="inherit">
                        News
                        </Typography>
                    </Grid> 
                    <Grid className={classes.sectionTwoInnerContainer} item xs={12} sm={4}>
                        <Typography variant="h6" color="inherit">
                        News
                        </Typography>
                    </Grid>       
                </Grid>
            </div>
        );
      }
    }
    


ServicesSection.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ServicesSection);