import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GoogleMapReact from 'google-map-react';





const styles = {
    root: {
        flexGrow: 1,
        backgroundColor: '#afb8c6'
    },
    square: {
        height: '100%',
        width: '100%',
        padding: '20%',
    },
    square2: {
        height: '300px',
        width: '300px',
        padding: '45px',
    },
    gridtest: {
        height: '400px',
    },
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Footer extends React.Component {

    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 11
    };
    
    render() {
        const { classes} = this.props;
    
        return (
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                <Grid className={classes.gridtest} item sm={12} md={4}>
                    <div className={classes.square}>
                        <ul>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item sm={12} md={4}>
                <div className={classes.square2}>
                <GoogleMapReact
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                        <AnyReactComponent 
                            lat={59.955413} 
                            lng={30.337844} 
                            text={'Kreyser Avrora'} 
                        />
                        </GoogleMapReact>
                    </div>
                </Grid>
                <Grid item sm={12} md={4}>
                    <div className={classes.square}>
                        <GoogleMapReact
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                        <AnyReactComponent 
                            lat={59.955413} 
                            lng={30.337844} 
                            text={'Kreyser Avrora'} 
                        />
                        </GoogleMapReact>
                    </div>
                </Grid>           
            </Grid>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Footer);