import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = theme => ({

    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  
  });

class Navbar extends React.Component {

    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 11
    };
    
    render() {
        const { classes} = this.props;
    
        return (
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                  News
                </Typography>

                <Link href="/about">
                  <Button color="inherit">About Us</Button>
                </Link>
                
              </Toolbar>
            </AppBar>
          </div>
        );
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Navbar);