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

    tate = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };
    
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
                    <Grid item>
                        <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            className={classes.textField}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
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