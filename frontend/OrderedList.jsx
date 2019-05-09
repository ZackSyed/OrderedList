import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import Root from './components/root';
import 'typeface-roboto';

// test imports 
import { createNewUser } from './actions/session_actions';
import { loginUser, logout } from './actions/session_actions';





document.addEventListener("DOMContentLoaded", () => {

    let store;
    if (window.current_user) {
        const preloadedState = {
            users: { [window.current_user.id]: window.current_user },
            session: { id: window.current_user.id }
        };
        store = configureStore(preloadedState);
        delete window.current_user;
    } else {
        store = configureStore();
    }

    // TESTING START
    window.login = loginUser;
    window.create = createNewUser;
    window.dispatch = store.dispatch;
    window.signout = logout;
    // TESTING END 

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});