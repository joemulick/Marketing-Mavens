import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ServiceModalOne from './ServiceModalOne';

const styles = {
    sectionTwoMainContainerHead: {
        background:'#fff2e6',
        height: '90px',
        width: 'auto',
    },
    // sectionTwoInnerContainerHead: {

    // },
    sectionTwoInnerContainer: {
        backgroundColor: 'rgba(248, 247, 216, 0.7)',
        height: '200px',
        border: '1px black solid',
    },
    sectionTwoMainContainer: {
        width: 'auto',
        background: '#fff2e6',
    },
    sectionTwoInnerContainerMainText: {
        height: '450px',
    },
};

class ServicesSection extends React.Component {

    state = {
        open: false,
      };
    
      handleClickOpen = () => {
        this.setState({
          open: true,
        });
      };
    
      handleClose = value => {
        this.setState({ selectedValue: value, open: false });
      };

    render() {
        const { classes, onClose, selectedValue, ...other } = this.props;
    
        return (
            <div>
                 <Grid className={classes.sectionTwoMainContainerHead} container justify="center" spacing={8}>
                    <Typography variant="h3" color="inherit">
                        News
                    </Typography>
                </Grid>
                <Grid className={classes.sectionTwoMainContainer} container spacing={8}>
                    <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                        <div>
                            <Typography variant="subtitle1">Selected: {this.state.selectedValue}</Typography>
                            <br />
                            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                            Open simple dialog
                            </Button>
                            <ServiceModalOne
                            selectedValue={this.state.selectedValue}
                            open={this.state.open}
                            onClose={this.handleClose}
                            />
                        </div>
                    </Grid> 
                    <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                        <div>
                            <Typography variant="subtitle1">Selected: {this.state.selectedValue}</Typography>
                            <br />
                            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                            Open simple dialog
                            </Button>
                            <ServiceModalOne
                            selectedValue={this.state.selectedValue}
                            open={this.state.open}
                            onClose={this.handleClose}
                            />
                        </div>
                    </Grid> 
                    <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                        <div>
                            <Typography variant="subtitle1">Selected: {this.state.selectedValue}</Typography>
                            <br />
                            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                            Open simple dialog
                            </Button>
                            <ServiceModalOne
                            selectedValue={this.state.selectedValue}
                            open={this.state.open}
                            onClose={this.handleClose}
                            />
                        </div>
                    </Grid>
                    {/*/////////////////// Second Row ///////////////////////////// */}
                    {/*/////////////////// Second Row ///////////////////////////// */} 
                    <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                        <div>
                            <Typography variant="subtitle1">Selected: {this.state.selectedValue}</Typography>
                            <br />
                            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                            Open simple dialog
                            </Button>
                            <ServiceModalOne
                            selectedValue={this.state.selectedValue}
                            open={this.state.open}
                            onClose={this.handleClose}
                            />
                        </div>
                    </Grid> 
                    <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                        <div>
                            <Typography variant="subtitle1">Selected: {this.state.selectedValue}</Typography>
                            <br />
                            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                            Open simple dialog
                            </Button>
                            <ServiceModalOne
                            selectedValue={this.state.selectedValue}
                            open={this.state.open}
                            onClose={this.handleClose}
                            />
                        </div>
                    </Grid> 
                    <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                    <div>
                            <Typography variant="subtitle1">Selected: {this.state.selectedValue}</Typography>
                            <br />
                            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                            Open simple dialog
                            </Button>
                            <ServiceModalOne
                            selectedValue={this.state.selectedValue}
                            open={this.state.open}
                            onClose={this.handleClose}
                            />
                        </div>
                    </Grid>
                    {/*/////////// Main Text Section Below Services Tile Set ///////////*/}
                    {/*/////////// Main Text Section Below Services Tile Set ///////////*/}
                    <Grid className={classes.sectionTwoInnerContainerMainText} item xs={12}>
                        <Typography variant="h1" color="inherit">
                        What we Do
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