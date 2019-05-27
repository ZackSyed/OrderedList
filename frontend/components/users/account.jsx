import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    mainPaper: {
        margin: 30,
        backgroundColor: theme.palette.primary.light,
        padding: 20,
    },
    sidePaper: {
        margin: 30,
        padding: 20,
    },
    avatar: {
        margin: 10,
        color: '#f9f9f9',
        fontSize: 30,
        backgroundColor: theme.palette.secondary.dark,
        height: 60,
        width: 60,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 100,
            height: 100,
            fontSize: 60,
        },
        marginBottom: 20,
    },
    info: {
        margin: 10, 
        color: '#ffffff',
        fontSize: '1.8rem',
        [theme.breakpoints.up(400)]: {
            fontSize: '2.5rem',
        },
        [theme.breakpoints.up(600)]: {
            fontSize: '3.5rem',
        },
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
            <Grid container>
                <Grid item xs={12}>
                    <Paper elevation={12} className={classes.mainPaper}>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Avatar className={classes.avatar}>{currentUser.username[1]}</Avatar>
                            <Typography variant='h5' className={classes.info}>Username: {currentUser.username}</Typography>
                            <Typography variant='h5' className={classes.info}>Email: {currentUser.email}</Typography>

                            <Grid item md={8}>
                                <Paper elevation={6} className={classes.sidePaper}>

                                </Paper>
                            </Grid>
                        </Grid>
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