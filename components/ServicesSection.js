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
import Email from '@material-ui/icons/Email';
import Web from '@material-ui/icons/Web';
import BorderColor from '@material-ui/icons/BorderColor';
import FontDownload from '@material-ui/icons/FontDownload';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Search from '@material-ui/icons/Search';



const styles = {
  root: {
    flexGrow: 1,
  },
  sectionTwoMainContainerHead: {
      background:'rgba(239, 239, 239)',
      height: '125px',
      width: 'auto',
  },
  sectionTwoInnerContainer: {
      backgroundColor: 'rgba(239, 239, 239, 0.7)',
      height: '200px',
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
    backgroundColor: 'rgba(239, 239, 239, 0.7)',
    height: '200px',
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
                  {/*  ///////////////////////////////////////////////////////////////////////// */}
                  {/*  ////////////////////////////     Services 1  //////////////////////////// */}
                  {/*  ///////////////////////////////////////////////////////////////////////// */}
                  <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                    <Grid className={classes.innerGridHeightAdjust} container>
                      <Grid className={classes.innerGridHeightAdjustTwo} item>
                        <ButtonBase>
                          <Email className={classes.icon}/>
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column">
                          <Grid className={classes.innerGridHeightAdjustTwoText} item xs>
                            <Typography style={{ marginTop: '8%'}} variant="h6">
                              Email Services
                            </Typography>
                            <Typography>
                              Strategy, Website development services, Solutions Engineering, Deliverability, Lifecycle Emails, ESP specialists. 
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                              <Button style={{ marginTop: '128%' }} variant="outlined" onClick={this.handleClickOpenOne}>
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
                  {/*  ///////////////////////////////////////////////////////////////////////// */}
                  {/*  ////////////////////////////     Services 2  //////////////////////////// */}
                  {/*  ///////////////////////////////////////////////////////////////////////// */}
                  <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                  <Grid className={classes.innerGridHeightAdjust} container>
                      <Grid className={classes.innerGridHeightAdjustTwo} item>
                        <ButtonBase>
                          <Web className={classes.icon}/>
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                          <Grid item xs>
                            <Typography style={{ marginTop: '8%'}} variant="h6">
                              Website Design and Development 
                            </Typography>
                            <Typography>
                              From Website design consultation to entire website devlopment and hosting services.
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                              <Button style={{ marginTop: '128%' }} variant="outlined" onClick={this.handleClickOpenTwo}>
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
                  {/*  ///////////////////////////////////////////////////////////////////////// */}
                  {/*  ////////////////////////////     Services 3  //////////////////////////// */}
                  {/*  ///////////////////////////////////////////////////////////////////////// */}
                  <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                  <Grid container className={classes.innerGridHeightAdjust}>
                      <Grid className={classes.innerGridHeightAdjustTwo} item>
                        <ButtonBase>
                          <BorderColor className={classes.icon}/>
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                          <Grid item xs>
                            <Typography style={{ marginTop: '8%'}} variant="h6">
                              Graphic & Logo Design
                            </Typography>
                            <Typography>
                              Web Design, Social Posts, Email layouts and assets, Pring Marketing Material, Logos, Signage
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                              <Button style={{ marginTop: '128%' }} variant="outlined" onClick={this.handleClickOpenThree}>
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
                  {/*  ///////////////////////////////////////////////////////////////////////// */}
                  {/*  ////////////////////////////     Services 3  //////////////////////////// */}
                  {/*  ///////////////////////////////////////////////////////////////////////// */}
                  {/*/////////////////// Second Row ///////////////////////////// */}
                  {/*/////////////////// Second Row ///////////////////////////// */} 
                  {/*  ///////////////////////////////////////////////////////////////////////// */}
                  {/*  ////////////////////////////     Services 4  //////////////////////////// */}
                  {/*  ///////////////////////////////////////////////////////////////////////// */}
                  <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                  <Grid container className={classes.innerGridHeightAdjust}>
                      <Grid className={classes.innerGridHeightAdjustTwo} item>
                        <ButtonBase>
                          <FontDownload className={classes.icon}/>
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                          <Grid item xs>
                            <Typography style={{ marginTop: '8%'}} variant="h6">
                              Content Management
                            </Typography>
                            <Typography>
                              Create: Articles, Blogs, Infographis, Social Media Posts, Webinars and more.
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                              <Button style={{ marginTop: '128%' }} variant="outlined" onClick={this.handleClickOpenFour}>
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
                  {/*  ///////////////////////////////////////////////////////////////////////// */}
                  {/*  ////////////////////////////     Services 5  //////////////////////////// */}
                  {/*  ///////////////////////////////////////////////////////////////////////// */} 
                  <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                  <Grid container className={classes.innerGridHeightAdjust}>
                      <Grid className={classes.innerGridHeightAdjustTwo} item>
                        <ButtonBase>
                          <PersonAdd className={classes.icon}/>
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                          <Grid item xs>
                            <Typography style={{ marginTop: '8%'}} variant="h6">
                              Social Media
                            </Typography>
                            <Typography>
                              Pinterest, Instagram, Facebook, Twitter
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                              <Button style={{ marginTop: '128%' }} variant="outlined" onClick={this.handleClickOpenFive}>
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
                  {/*  ///////////////////////////////////////////////////////////////////////// */}
                  {/*  ////////////////////////////     Services 6  //////////////////////////// */}
                  {/*  ///////////////////////////////////////////////////////////////////////// */}
                  <Grid className={classes.sectionTwoInnerContainer} item sm={12} md={4}>
                  <Grid container className={classes.innerGridHeightAdjust}>
                      <Grid className={classes.innerGridHeightAdjustTwo} item>
                        <ButtonBase>
                          <Search className={classes.icon}/>
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                          <Grid item xs>
                            <Typography style={{ marginTop: '8%'}} variant="h6">
                              Search Engine Optimization and PPC 
                            </Typography>
                            <Typography>
                              We can search engine optimze your existing website, or manage your PPC campaigns to maximize returns. 
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                              <Button style={{ marginTop: '128%' }} variant="outlined" onClick={this.handleClickOpenSix}>
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