import React from 'react';
import Login from '../users/log_in';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const styles = {
    root: {
      width: '100%',
      maxWidth: 500,
    },
  };
  

function Splash(props){
    const { classes } = props;

return ( 
        <>
        <Typography component="h2" variant="h1" gutterBottom>
            Ordered List
        </Typography>
        <div className="container">
            <h2 className="Title">Todo List</h2>
            
            

        </div>
            <Login />
        </>
    )
}

Splash.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Splash);
