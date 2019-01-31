import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const styles = {

  root: {
    flexGrow: 1,
  },
  
};


class SignUpFourCol extends React.Component {
    
    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };


    render() {

        const { classes } = this.props;

        return (

            <div className={classes.root}>
                <Grid container >
                    <Grid xs={12} item>
                        <form className={classes.container}  noValidate autoComplete="off">
                            <TextField
                                label="Email"
                                className={classes.inputwidthtest}
                                type="email"
                                name="email"
                                autoComplete="email"
                                fullWidth
                                variant="outlined"
                            />
                        </form>                       
                    </Grid>
                </Grid>
            </div>

      );
    }
  }
  


  SignUpFourCol.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SignUpFourCol);