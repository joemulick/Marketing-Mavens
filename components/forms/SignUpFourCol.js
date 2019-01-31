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

  formTitle: {
    margin: '25px 0'
  }
  
};



class SignUpFourCol extends React.Component {

    state = {
        name: '',
        age: '',
        multiline: '',
        currency: '',
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

                            <form noValidate autoComplete="off">

                                <Typography className={classes.formTitle} variant="h4" align="center" m={2}>
                                    Lets work together
                                </Typography>

                                <Typography variant="h6" gutterBottom>
                                    Organization
                                </Typography>

                                <TextField
                                    id="outlined-organization"
                                    label="Organization"
                                    className={classes.textField}
                                    value={this.state.organization}
                                    onChange={this.handleChange('organization')}
                                    variant="outlined"
                                />

                                <Typography variant="h6" gutterBottom>
                                    Email
                                </Typography>
                                                                
                                <TextField
                                    label="Email"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    fullWidth
                                    variant="outlined"
                                />

                                <Typography variant="h6" gutterBottom>
                                    Name
                                </Typography>

                                <TextField
                                    id="outlined-name"
                                    label="Name"
                                    className={classes.textField}
                                    value={this.state.name}
                                    onChange={this.handleChange('name')}
                                    variant="outlined"
                                />

                                <Typography variant="h6" gutterBottom>
                                    Preffered method of contact: radio choice
                                </Typography>

                                <Typography variant="h6" gutterBottom>
                                    Can also add phone number
                                </Typography>






                
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