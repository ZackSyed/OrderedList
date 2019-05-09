import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'; 
import { merge } from  'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    if (action.user === 'undefined') return state;
    if (action.users === 'undefined') return state;
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.user.id]: action.user });
        case RECEIVE_USER: 
            return merge({}, state, { [action.user.id]: action.user });
        case RECEIVE_USERS:
            return action.users;
        case LOGOUT_CURRENT_USER:
            return state; 
        default:
            return state;
    }
}