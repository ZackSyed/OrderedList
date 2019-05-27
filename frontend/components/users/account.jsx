import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';


const styles = theme => ({
    root: {
        margin: 30,
        backgroundColor: theme.palette.primary.light,
        padding: 20,
    },
    avatar: {
        margin: 10,
    },
    orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
});


class Account extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const { currentUser, classes } = this.props;
        return (
            <>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Paper className={classes.root}>
                        <Avatar className={classes.avatar}>{currentUser.username[1]}</Avatar>
                        <Typography variant='h5'>Username: {currentUser.username}</Typography>
                        <Typography variant='h5'>Email: {currentUser.email}</Typography>
                    </Paper>
                </Grid>
            </Grid>
            </>
        )
    }
}

const msp = (state) => {
    return {
        currentUser: (state.users[state.session.id])
    };
};

export default connect(msp, null)(withStyles(styles)(Account));