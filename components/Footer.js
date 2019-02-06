import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';




const styles = {
    root: {
        flexGrow: 1,
    },
    bgtest: {
        backgroundColor: '#afb8c6'
    },
};


class Footer extends React.Component {
    
    render() {
        const { classes} = this.props;
    
        return (
          <div className={classes.bgtest}>
              <Typography gutterBottom variant="h1" component="h1">
                    FOOTER
              </Typography>
          </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Footer);