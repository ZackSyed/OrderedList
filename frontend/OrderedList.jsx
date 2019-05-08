import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import Root from './components/root';
import 'typeface-roboto';




document.addEventListener("DOMContentLoaded", () => {

    let store = configureStore();

    // TESTING START
    // TESTING END 

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});