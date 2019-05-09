import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import Login from '../users/log_in';
import Signup from '../users/sign_up';
import Demo from '../users/demo_log_in';

const styles = ({
  root: {
    width: '50%',
    maxWidth: 360,
    backgroundColor: 'whitesmoke',
  },
  hidden: {
      display: 'none',
  },
  shown: {
      marginBottom: '2px',
  }
});

class SplashList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          checked: '',
        };
    }

  handleToggle(value){
    if (this.state.checked === value) {
      value = '';
    }
    this.setState({
      checked: value,
    });
  };

  renderForm(){
    const { checked } = this.state;
    switch (checked) {
      case 'Log In':
        return <Login />
      case 'Sign up':
        return <Signup />
      case 'Demo Log In':
        return <Demo />
      case '':
        return <Typography variant="h5" gutterBottom>
          Pick a Todo Item to start!
        </Typography>
      default:
        break;
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <List className={classes.root}>
          <ListItem className={this.state.checked === 'Log In' || this.state.checked === '' ? 
          classes.shown : classes.hidden} 
          key='Log In' role={undefined} dense button 
          onClick={() => this.handleToggle('Log In')}>
          <ListItemText primary={`Log In!`} />
          <Checkbox
              checked={this.state.checked === 'Log In'}
              tabIndex={-1}
              disableRipple
          />
          </ListItem>

          <ListItem className={this.state.checked === 'Sign up' || this.state.checked === '' ? 
          classes.shown : classes.hidden} 
          key='Sign Up' role={undefined} dense button 
          onClick={() => this.handleToggle('Sign up')}>
          <ListItemText primary={`Sign Up!`} />
          <Checkbox
          checked={this.state.checked === 'Sign up'}
          tabIndex={-1}
          disableRipple
          />
          </ListItem>

          <ListItem className={this.state.checked === 'Demo Log In' || this.state.checked === '' ? 
          classes.shown : classes.hidden}  
          key='Demo Log In' role={undefined} dense button 
          onClick={() => this.handleToggle('Demo Log In')}>
          <ListItemText primary={`Demo Log In!`} />
          <Checkbox
            checked={this.state.checked === 'Demo Log In'}
            tabIndex={-1}
            disableRipple
          />
        </ListItem>
        </List>

        <div>
          {this.renderForm()}
        </div>
      </>
    );
  }
}

SplashList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SplashList);