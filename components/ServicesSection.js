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
import ButtonBase from '@material-ui/core/ButtonBase';
import HourglassEmpty from '@material-ui/icons/HourglassEmpty';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
// import HourglassEmpty from '@material-ui/icons/HourglassEmpty';
// import HourglassEmpty from '@material-ui/icons/HourglassEmpty';


const styles = {
  root: {
    flexGrow: 1,
  },
  sectionTwoMainContainerHead: {
      background:'#fff2e6',
      height: '125px',
      width: 'auto',
  },
  // sectionTwoInnerContainerHead: {

  // },
  sectionTwoInnerContainer: {
      backgroundColor: 'rgba(248, 247, 216, 0.7)',
      height: '200px',
      border: '1px grey dotted',
      flexWrap: 'nowrap',
  },
  sectionTwoMainContainer: {
      width: 'auto',
      background: '#fff2e6',
  },
  sectionTwoInnerContainerMainText: {
      height: '450px',
  },
  icon: {
      fontSize: 68,
      margin: 'auto',
  },
  innerGridHeightAdjust: {
      minHeight:'100%',
  },
  innerGridHeightAdjustTwo: {
      minHeight:'100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '25%',
  },
  sectionThreeMainContainerHead: {
    backgroundColor: 'rgba(248, 247, 216, 0.7)',
    height: '200px',
    border: '1px grey dotted',
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
          <div className={classes.root}>
              <Grid className={classes.sectionTwoMainContainerHead} container justify="center">
                  <Typography style={{ margin: 'auto' }}  variant="h3" color="inherit">
                      Services
                  </Typography>
              </Grid>
              <Grid className={classes.sectionTwoMainContainer} container spacing={8}>
                  <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                    <Grid className={classes.innerGridHeightAdjust} container>
                      <Grid className={classes.innerGridHeightAdjustTwo} item>
                        <ButtonBase>
                          <AssignmentTurnedIn className={classes.icon} color="primary" />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column">
                          <Grid className={classes.innerGridHeightAdjustTwoText} item xs>
                            <Typography style={{ marginTop: '8%'}} variant="h6">
                              Service One
                            </Typography>
                            <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                              <Button style={{ marginTop: '128%' }} variant="outlined" color="primary" onClick={this.handleClickOpenOne}>
                                learn more
                                </Button>
                                <ServiceModalOne
                                open={this.state.openOne}
                                onClose={this.handleCloseOne}
                              />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid> 
                  <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                  <Grid className={classes.innerGridHeightAdjust} container>
                      <Grid className={classes.innerGridHeightAdjustTwo} item>
                        <ButtonBase>
                          <AssignmentTurnedIn className={classes.icon} color="primary" />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                          <Grid item xs>
                            <Typography style={{ marginTop: '8%'}} variant="h6">
                              Service Two
                            </Typography>
                            <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                              <Button style={{ marginTop: '128%' }} variant="outlined" color="primary" onClick={this.handleClickOpenTwo}>
                                learn more
                                </Button>
                                <ServiceModalTwo
                                open={this.state.openTwo}
                                onClose={this.handleCloseTwo}
                              />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid> 
                  <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                  <Grid container className={classes.innerGridHeightAdjust}>
                      <Grid className={classes.innerGridHeightAdjustTwo} item>
                        <ButtonBase>
                          <AssignmentTurnedIn className={classes.icon} color="primary" />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                          <Grid item xs>
                            <Typography style={{ marginTop: '8%'}} variant="h6">
                              Service Three
                            </Typography>
                            <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                              <Button style={{ marginTop: '128%' }} variant="outlined" color="primary" onClick={this.handleClickOpenThree}>
                                learn more
                                </Button>
                                <ServiceModalThree
                                open={this.state.openThree}
                                onClose={this.handleCloseThree}
                              />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/*/////////////////// Second Row ///////////////////////////// */}
                  {/*/////////////////// Second Row ///////////////////////////// */} 
                  <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                  <Grid container className={classes.innerGridHeightAdjust}>
                      <Grid className={classes.innerGridHeightAdjustTwo} item>
                        <ButtonBase>
                          <AssignmentTurnedIn className={classes.icon} color="primary" />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                          <Grid item xs>
                            <Typography style={{ marginTop: '8%'}} variant="h6">
                              Service Four
                            </Typography>
                            <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                              <Button style={{ marginTop: '128%' }} variant="outlined" color="primary" onClick={this.handleClickOpenFour}>
                                learn more
                                </Button>
                                <ServiceModalFour
                                open={this.state.openFour}
                                onClose={this.handleCloseFour}
                              />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid> 
                  <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                  <Grid container className={classes.innerGridHeightAdjust}>
                      <Grid className={classes.innerGridHeightAdjustTwo} item>
                        <ButtonBase>
                          <AssignmentTurnedIn className={classes.icon} color="primary" />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                          <Grid item xs>
                            <Typography style={{ marginTop: '8%'}} variant="h6">
                              Service Five
                            </Typography>
                            <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                              <Button style={{ marginTop: '128%' }} variant="outlined" color="primary" onClick={this.handleClickOpenFive}>
                                learn more
                                </Button>
                                <ServiceModalFive
                                open={this.state.openFive}
                                onClose={this.handleCloseFive}
                              />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid> 
                  <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                  <Grid container className={classes.innerGridHeightAdjust}>
                      <Grid className={classes.innerGridHeightAdjustTwo} item>
                        <ButtonBase>
                          <AssignmentTurnedIn className={classes.icon} color="primary" />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                          <Grid item xs>
                            <Typography style={{ marginTop: '8%'}} variant="h6">
                              Service Six
                            </Typography>
                            <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                              <Button style={{ marginTop: '128%' }} variant="outlined" color="primary" onClick={this.handleClickOpenSix}>
                                learn more
                                </Button>
                                <ServiceModalSix
                                open={this.state.openSix}
                                onClose={this.handleCloseSix}
                              />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/*/////////// Main Text Section Below Services Tile Set ///////////*/}
                  {/*/////////// Main Text Section Below Services Tile Set ///////////*/}          
              </Grid>
              <Grid className={classes.sectionThreeMainContainerHead} container justify="center">
                <Typography style={{ margin: 'auto' }}  variant="h3" color="inherit">
                  Section Three
                </Typography>
              </Grid>               
          </div>
      );
    }
  }
  


ServicesSection.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ServicesSection);