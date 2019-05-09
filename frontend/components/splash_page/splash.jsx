import React from 'react';
import SplashList from './splash_list';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      width: '100%',
      maxWidth: 500,
    },
    mainTitle: {
      fontSize: '400%',
      color: 'black',
      textAlign: 'center',
      marginTop: '10px',
    },
    smallTitle: {
      fontSize: '300%',
      color: 'black',
      textAlign: 'center',
      marginTop: '10px',
    }
  };
  

class Splash extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    
    return ( 
            <div className={classes.root}>
              <Typography className={classes.mainTitle} component="h2" variant="h1" gutterBottom>
                  OrderedList
              </Typography>
                <div className="container">
                  <Typography className={classes.smallTitle} variant="h3" gutterBottom>
                    Todo List
                  </Typography>
                    <SplashList />
                </div>
            </div>
        )
  }

}

Splash.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Splash);
