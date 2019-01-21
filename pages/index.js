import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
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
  section: {
    height: '70vh',
    backgroundColor: 'green',
  }
};

class Index extends React.Component {

  render() {
    const { classes } = this.props;

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
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <div className={classes.section}>
          <Typography variant="h1" color="inherit" className={classes.grow}>
              News
          </Typography>
        </div>
        <style jsx global>{`
          html {
            line-height: 1.15;
            -webkit-text-size-adjust: 100%;
          }
          body {
            margin: 0;
            background: #000000;
          }
          main {
            display: block;
          }
          h1 {
            font-size: 2em;
            margin: 0.67em 0;
          }
          hr {
            box-sizing: content-box;
            height: 0;
            overflow: visible;
          }
          pre {
            font-family: monospace, monospace;
            font-size: 1em;
          }
          a {
            background-color: transparent;
          }
          abbr[title] {
            border-bottom: none;
            text-decoration: underline;
            text-decoration: underline dotted;
          }
          b,
          strong {
            font-weight: bolder;
          }
          code,
          kbd,
          samp {
            font-family: monospace, monospace;
            font-size: 1em;
          }
          small {
            font-size: 80%;
          }
          sub,
          sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
          }
          sub {
            bottom: -0.25em;
          }
          sup {
            top: -0.5em;
          }
          img {
            border-style: none;
          }
          button,
          input,
          optgroup,
          select,
          textarea {
            font-family: inherit; 
            font-size: 100%;
            line-height: 1.15;
            margin: 0;
          }
          button,
          input { 
            overflow: visible;
          }
          button,
          select { 
            text-transform: none;
          }
          button,
          [type="button"],
          [type="reset"],
          [type="submit"] {
            -webkit-appearance: button;
          }
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner {
            border-style: none;
            padding: 0;
          }
          button:-moz-focusring,
          [type="button"]:-moz-focusring,
          [type="reset"]:-moz-focusring,
          [type="submit"]:-moz-focusring {
            outline: 1px dotted ButtonText;
          }
          fieldset {
            padding: 0.35em 0.75em 0.625em;
          }

          legend {
            box-sizing: border-box;
            color: inherit; 
            display: table; 
            max-width: 100%;
            padding: 0; 
            white-space: normal; 
          }
          progress {
            vertical-align: baseline;
          }
          textarea {
            overflow: auto;
          }
          [type="checkbox"],
          [type="radio"] {
            box-sizing: border-box;
            padding: 0; 
          }
          [type="number"]::-webkit-inner-spin-button,
          [type="number"]::-webkit-outer-spin-button {
            height: auto;
          }
          [type="search"] {
            -webkit-appearance: textfield; 
            outline-offset: -2px;
          }
          [type="search"]::-webkit-search-decoration {
            -webkit-appearance: none;
          }
          ::-webkit-file-upload-button {
            -webkit-appearance: button; 
            font: inherit; 
          }
          details {
            display: block;
          }
          summary {
            display: list-item;
          }
          template {
            display: none;
          }
          [hidden] {
            display: none;
          }
    `}</style>
    </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);