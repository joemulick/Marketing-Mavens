import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Grid from '@material-ui/core/Grid';
import MainFeatures from '../components/MainFeatures';
import ServicesSection from '../components/ServicesSection';
import OurServicesAndForm from '../components/OurServicesAndForm';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  mainGrid: {
    minHeight: '70vmin',
    width: 'auto',
    background:'url(https://res.cloudinary.com/ddsihrmda/image/upload/v1548226609/carlos-muza-84523-unsplash_kcw88s.jpg) no-repeat center center fixed',
    position: 'relative',
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
    backgroundSize: 'cover',
    
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  subGridOne: {
    backgroundColor: 'rgba(248, 247, 216, 0.7)',
    minHeight: '70vmin',
  },
  mainInnerContainerOne: {
    height: '100%',
    backgroundColor: 'green',
    opacity: '.5'
  },
  mainInnerContainerTwo: {
    height: '100%',
    backgroundColor: 'green',
    opacity: '.5'
  },
  mainInnerContainerThree: {
    height: '100%',
    backgroundColor: 'green',
    opacity: '.5'
  },
});

class Index extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>

          <Navbar />
            
          <Grid className={classes.mainGrid} container>
            {/* <video className={classes.AppBarfullscreenVideo} loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video> */}
            <Grid className={classes.subGridOne} item xs={12}>
                <MainFeatures />
            </Grid>   
          </Grid>


          <ServicesSection />

          <OurServicesAndForm />

          <Footer />
      </div> 
    );
  }
}



Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);