import React from 'react';
import SplashList from './splash_list';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>  ({
    root: {
      padding: '20px 10px',
    },
    mainTitle: {
      fontSize: '400%',
      color: theme.palette.text.secondary,
      textAlign: 'center',
      marginTop: '10px',
    },
    smallTitle: {
      fontSize: '4em',
      color: 'black',
      textAlign: 'center',
      marginTop: '10px',
    }, 
    container: {
       padding: 20,
       marginTop: 20,
       backgroundColor: theme.palette.secondary.light,
       border: 'solid 1px black',
       borderRadius: 30,
       boxShadow: `5px 5px 3px ${theme.palette.secondary.dark}`
    },
  });
  

class Splash extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    
    return ( 
            <Grid container className={classes.root} alignItems='center' justify='center'>
              <Grid item xs={12}>
                <Typography className={classes.mainTitle} component="h2" variant="h1" gutterBottom>
                    OrderedList
                </Typography>
              </Grid>

              <Grid item xs={12} className={classes.container}> 
                  <Grid item>
                    <Typography className={classes.smallTitle} variant="h3" gutterBottom>
                      Todo List
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                      <SplashList />
                  </Grid>
              </Grid>
            </Grid>
        )
  }

}

Splash.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Splash);
