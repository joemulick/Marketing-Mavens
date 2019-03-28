import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutUsMain from '../components/AboutUsMain';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class About extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
          <Navbar />
            
            <AboutUsMain />
         
          <Footer />
      </div> 
    );
  }
}



About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);