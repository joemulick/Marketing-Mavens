import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SignUpFourCol from './forms/SignUpFourCol';
import { StickyContainer } from 'react-sticky';



const styles = {

  root: {
    flexGrow: 1,
  },
  sectionalBackground3: {
    minHeight: '70vmin',
    width: 'auto',
  },
  contentSectionOurServicesStepOne: {
    minHeight: '400px',
    minWidth: '100%',
    backgroundColor:'#b9ce92',
    padding: '8% 15%',
  },


  

};


class OurServicesAndForm extends React.Component {


    render() {

        const { classes } = this.props;

        return (

            <div className={classes.root}>
              <StickyContainer>
                <Grid container className={classes.sectionalBackground3}>
                    <Grid item xs={12} md={8}>
                        <div className={classes.contentSectionOurServicesStepOne}>                          
                          <Typography  variant="h4" gutterBottom>
                            Step 1
                          </Typography>
                          <Typography variant="subtitle1" gutterBottom>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.  
                        </Typography>
                        </div>
                        <div className={classes.contentSectionOurServicesStepOne}>
                        <Typography  variant="h4" gutterBottom>
                            Step 2
                          </Typography>
                          <Typography variant="subtitle1" gutterBottom>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.  
                        </Typography>
                        </div>
                        <div className={classes.contentSectionOurServicesStepOne}>
                        <Typography  variant="h4" gutterBottom>
                            Step 3
                          </Typography>
                          <Typography variant="subtitle1" gutterBottom>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.  
                        </Typography>
                        </div>
                        <div className={classes.contentSectionOurServicesStepOne}>
                        <Typography  variant="h4" gutterBottom>
                            Step 4
                          </Typography>
                          <Typography variant="subtitle1" gutterBottom>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.  
                        </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div>
                          <SignUpFourCol />
                        </div>
                    </Grid>
                </Grid>
              </StickyContainer>
            </div>

      );
    }
  }
  


OurServicesAndForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(OurServicesAndForm);