import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER_ERRORS } from '../actions/user_actions';


export default (oldState = [], action) => {
    Object.freeze(oldState);
    if (action.errors === 'undefined') return state;
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_USER_ERRORS:
            return action.errors;
        default:
            return oldState;
    }
}