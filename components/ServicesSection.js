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
import SvgIcon from '@material-ui/core/SvgIcon';
import ButtonBase from '@material-ui/core/ButtonBase';

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
        margin: 'theme.spacing.unit * 2',
      },
      iconHover: {
        margin: 'theme.spacing.unit * 2',
        '&:hover': {
          color: 'red[800]',
        },
      },
};

function IconOne(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

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
                      <Grid container spacing={16}>
                        <Grid item>
                          <ButtonBase className={classes.image}>
                            <IconOne className={classes.icon} color="secondary" />
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={16}>
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                Standard license
                              </Typography>
                              <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                            </Grid>
                            <Grid item>
                              <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                            </Grid>
                          </Grid>
                          <Grid item>
                                <Button variant="outlined" color="primary" onClick={this.handleClickOpenOne}>
                                  Open simple dialog
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
                    <Grid container spacing={16}>
                        <Grid item>
                          <ButtonBase className={classes.image}>
                            <IconOne className={classes.icon} color="secondary" />
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={16}>
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                Standard license
                              </Typography>
                              <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                            </Grid>
                            <Grid item>
                              <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                            </Grid>
                          </Grid>
                          <Grid item>
                                <Button variant="outlined" color="primary" onClick={this.handleClickOpenTwo}>
                                  Open simple dialog
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
                    <Grid container spacing={16}>
                        <Grid item>
                          <ButtonBase className={classes.image}>
                            <IconOne className={classes.icon} color="secondary" />
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={16}>
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                Standard license
                              </Typography>
                              <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                            </Grid>
                            <Grid item>
                              <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                            </Grid>
                          </Grid>
                          <Grid item>
                                <Button variant="outlined" color="primary" onClick={this.handleClickOpenThree}>
                                  Open simple dialog
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
                    <Grid container spacing={16}>
                        <Grid item>
                          <ButtonBase className={classes.image}>
                            <IconOne className={classes.icon} color="secondary" />
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={16}>
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                Standard license
                              </Typography>
                              <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                            </Grid>
                            <Grid item>
                              <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                            </Grid>
                          </Grid>
                          <Grid item>
                                <Button variant="outlined" color="primary" onClick={this.handleClickOpenFour}>
                                  Open simple dialog
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
                    <Grid container spacing={16}>
                        <Grid item>
                          <ButtonBase className={classes.image}>
                            <IconOne className={classes.icon} color="secondary" />
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={16}>
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                Standard license
                              </Typography>
                              <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                            </Grid>
                            <Grid item>
                              <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                            </Grid>
                          </Grid>
                          <Grid item>
                                <Button variant="outlined" color="primary" onClick={this.handleClickOpenFive}>
                                  Open simple dialog
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
                    <Grid container spacing={16}>
                        <Grid item>
                          <ButtonBase className={classes.image}>
                            <IconOne className={classes.icon} color="secondary" />
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={16}>
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                Standard license
                              </Typography>
                              <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                            </Grid>
                            <Grid item>
                              <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                            </Grid>
                          </Grid>
                          <Grid item>
                                <Button variant="outlined" color="primary" onClick={this.handleClickOpenSix}>
                                  Open simple dialog
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