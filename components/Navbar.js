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
    menuColor: {
      background: '#FFF',
    },
    menuText: {
      color: '#000'
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
            <AppBar position="fixed" className={classes.menuColor}>
              <Toolbar>
                <IconButton className={classes.menuButton}  aria-label="Menu">
                  <MenuIcon className={classes.menuText} />
                </IconButton>
                <Typography variant="h6"  className={classes.grow}>
                  <span className={classes.menuText} >News</span>
                </Typography>

                <Link href="/about">
                  <Button className={classes.menuText}>About Us</Button>
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