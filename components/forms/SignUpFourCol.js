import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Sticky } from 'react-sticky';



const styles = {

  root: {
    flexGrow: 1,
  },
  formTitle: {
    margin: '65px 0 25px'
  },
  fieldWidth: {
      maxWidth: '375px',
      padding: '15px',
  }
  
};



class SignUpFourCol extends React.Component {

    state = {
        organization: '',
        email: '',
        name: '',
        contactNumber: '',
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
                    <Grid xs={12} item>

                        
                    <Sticky>
                        {({
                            style
                        }) => (

                            <div className={classes.fieldWidth} style={style}>
                        
                            <form noValidate autoComplete="off">

                                <Typography className={classes.formTitle} variant="h3" align="center" m={6}>
                                    Lets work together
                                </Typography>


                                        <TextField
                                            id="outlined-organization-input"
                                            label="Organization"
                                            className={classes.textField}
                                            name="organization"
                                            autoComplete="organization"
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                        />

                                        <br />

                                        <TextField
                                            id="outlined-email-input"
                                            label="Email"
                                            className={classes.textField}
                                            type="email"
                                            name="email"
                                            autoComplete="email"
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                        />

                                        <br />

                                        <TextField
                                            id="outlined-name-input"
                                            label="Name"
                                            className={classes.textField}
                                            autoComplete="name"
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                        />

                                        <br />

                                        <TextField
                                            id="outlined-contact-input"
                                            label="Contact Number"
                                            className={classes.textField}
                                            name="contactNumber"
                                            autoComplete="tel"
                                            variant="outlined"
                                            margin="normal"
                                        />

                            </form>

                            </div>
                            
                        )}

                        </Sticky>                  
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