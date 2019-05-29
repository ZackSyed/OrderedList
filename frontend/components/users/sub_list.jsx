import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    paper: {
        margin: 30,
        padding: 20,
    },
    catNames: {
        fontSize: '1rem',
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up(1000 + theme.spacing.unit * 3 * 2)]: {
            fontSize: '3rem',
        },
    }
});

class SubList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            checked: {
                work: false,
                exercise: false,
                garden: false,
                groceries: false,
            }
        }

        this.handleToggle = this.handleToggle.bind(this);
    }

    //when the state is changed run componentDidUpdate,
    //to send the state to backend catagories table to update.
    // componentDidUpdate(prevProps, prevState) {

    // }

    handleToggle(value) {
        const { checked } = this.state;
        const currentSub = checked[value];
        const newChecked = checked;
    
        if (currentSub === false) {
          newChecked[value] = true;
        } else {
            newChecked[value] = false;
        }

        this.setState({
            checked: newChecked
        });
      };

    render(){
        const { classes } = this.props;
        const { checked } = this.state;

        return (
            <>
                <Paper className={classes.paper}>
                    <Grid container direction='column' justify="center">
                        <Typography align='center' variant='h4'>Category selection</Typography>
                        <Grid container direction='column' justify="center" alignItems='center' >
                            <List className={classes.root}>
                            {Object.keys(checked).map(value => (
                                <ListItem key={value} role={undefined} dense button divider onClick={() => this.handleToggle(value)}>
                                <ListItemIcon>
                                    <Checkbox
                                    edge="start"
                                    checked={checked[value] !== false}
                                    tabIndex={-1}
                                    disableRipple
                                    />
                                </ListItemIcon>
                                <ListItemText className={classes.catNames} primary={value} />
                                </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Paper>
            </>
        )
    }
}

export default withStyles(styles)(SubList);