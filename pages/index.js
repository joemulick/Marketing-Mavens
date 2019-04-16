import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import NavbarHeightSpacer from '../components/NavbarHeightSpacer'
import Footer from '../components/Footer';
// import MainFeatures from '../components/MainFeatures';
import ServicesSection from '../components/ServicesSection';
import OurServicesAndForm from '../components/OurServicesAndForm';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  // mainGrid: {
  //   minHeight: '70vmin',
  //   width: 'auto',
  //   background:'url(https://res.cloudinary.com/ddsihrmda/image/upload/v1551161156/rawpixel-653764-unsplash-edited_ezhadt.jpg) no-repeat fixed',
  //   position: 'relative',
  //   webkitBackgroundSize: 'cover',
  //   mozBackgroundSize: 'cover',
  //   oBackgroundSize: 'cover',
  //   backgroundSize: 'cover',
  // },
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
});

class Index extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
          <Navbar />
          {/* <NavbarHeightSpacer /> */}
            
          {/* <MainFeatures /> */}

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