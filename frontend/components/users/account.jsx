import React from 'react';
import { connect } from 'react-redux';

class Account extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const { currentUser } = this.props;
        return (
            <>
                <h1>Username: {currentUser.username}</h1>
                <h2>Email: {currentUser.email}</h2>
            </>
        )
    }
}

const msp = (state) => {
    return {
        currentUser: (state.users[state.session.id])
    };
};

export default connect(msp, null)(Account);