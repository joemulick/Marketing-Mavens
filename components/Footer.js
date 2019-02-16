import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';





const styles = {
    root: {
        flexGrow: 1,
        backgroundColor: '#afb8c6'
    },
    square: {
        height: '100%',
        width: '100%',
        padding: '20%',
    },
    gridtest: {
        height: '400px',
    },
};


class Footer extends React.Component {
    
    render() {
        const { classes} = this.props;
    
        return (
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                <Grid className={classes.gridtest} item sm={12} md={4}>
                    <div className={classes.square}>
                        <ul>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item sm={12} md={4}>
                <div className={classes.square}>
                        <ul>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item sm={12} md={4}>
                    <div className={classes.square}>
                        <ul>
                            <li>trying Google Map React</li>
                        </ul>
                    </div>
                </Grid>           
            </Grid>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Footer);