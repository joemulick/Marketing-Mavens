import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ServiceModalOne from './serviceModals/ServiceModalOne';
import ServiceModalTwo from './serviceModals/ServiceModalTwo';
import ServiceModalThree from './serviceModals/ServiceModalThree';
import ServiceModalFour from './serviceModals/ServiceModalFour';
import ServiceModalFive from './serviceModals/ServiceModalFive';
import ServiceModalSix from './serviceModals/ServiceModalSix';

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
        openOne: false,
        openTwo: false,
        openThree: false,
        openFour: false,
        openFive: false,
        openSix: false,
      };
    
      handleClickOpenOne = () => {
        this.setState({
          openOne: true,
        });
      };
      handleClickOpenTwo = () => {
        this.setState({
          openTwo: true,
        });
      };
      handleClickOpenThree = () => {
        this.setState({
          openThree: true,
        });
      };
      handleClickOpenFour = () => {
        this.setState({
          openFour: true,
        });
      };
      handleClickOpenFive = () => {
        this.setState({
          openFive: true,
        });
      };
      handleClickOpenSix = () => {
        this.setState({
          openSix: true,
        });
      };
    
      handleCloseOne = valueOne => {
        this.setState({ openOne: false });
      };
      handleCloseTwo = valueTwo => {
        this.setState({ openTwo: false });
      };
      handleCloseThree = valueThree => {
        this.setState({ openThree: false });
      };
      handleCloseFour = valueFour => {
        this.setState({ openFour: false });
      };
      handleCloseFive = valueFive => {
        this.setState({ openFive: false });
      };
      handleCloseSix = valueSix => {
        this.setState({ openSix: false });
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
                            <Typography variant="subtitle1"></Typography>
                            <br />
                            <Button variant="outlined" color="primary" onClick={this.handleClickOpenOne}>
                            Open simple dialog
                            </Button>
                            <ServiceModalOne
                            open={this.state.openOne}
                            onClose={this.handleCloseOne}
                            />
                        </div>
                    </Grid> 
                    <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                        <div>
                            <Typography variant="subtitle1">Selected: {this.state.selectedValue}</Typography>
                            <br />
                            <Button variant="outlined" color="primary" onClick={this.handleClickOpenTwo}>
                            Open simple dialog
                            </Button>
                            <ServiceModalTwo
                            open={this.state.openTwo}
                            onClose={this.handleCloseTwo}
                            />
                        </div>
                    </Grid> 
                    <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                        <div>
                            <Typography variant="subtitle1">Selected: {this.state.selectedValue}</Typography>
                            <br />
                            <Button variant="outlined" color="primary" onClick={this.handleClickOpenThree}>
                            Open simple dialog
                            </Button>
                            <ServiceModalThree
                            open={this.state.openThree}
                            onClose={this.handleCloseThree}
                            />
                        </div>
                    </Grid>
                    {/*/////////////////// Second Row ///////////////////////////// */}
                    {/*/////////////////// Second Row ///////////////////////////// */} 
                    <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                        <div>
                            <Typography variant="subtitle1">Selected: {this.state.selectedValue}</Typography>
                            <br />
                            <Button variant="outlined" color="primary" onClick={this.handleClickOpenFour}>
                            Open simple dialog
                            </Button>
                            <ServiceModalFour
                            open={this.state.openFour}
                            onClose={this.handleCloseFour}
                            />
                        </div>
                    </Grid> 
                    <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                        <div>
                            <Typography variant="subtitle1">Selected: {this.state.selectedValue}</Typography>
                            <br />
                            <Button variant="outlined" color="primary" onClick={this.handleClickOpenFive}>
                            Open simple dialog
                            </Button>
                            <ServiceModalFive
                            open={this.state.openFive}
                            onClose={this.handleCloseFive}
                            />
                        </div>
                    </Grid> 
                    <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                    <div>
                            <Typography variant="subtitle1">Selected: {this.state.selectedValue}</Typography>
                            <br />
                            <Button variant="outlined" color="primary" onClick={this.handleClickOpenSix}>
                            Open simple dialog
                            </Button>
                            <ServiceModalSix
                            open={this.state.openSix}
                            onClose={this.handleCloseSix}
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