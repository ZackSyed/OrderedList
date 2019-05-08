import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import CssBaseline from '@material-ui/core/CssBaseline';

// import Modal from '../components/modal/modal';
import Splash from './splash_page/splash'


const App = () => (
    <div>
        <React.Fragment>
            <CssBaseline />
        {/* <Modal /> */}

        <AuthRoute exact path='/' component={Splash}/>
        </React.Fragment>
    </div>
);

export default App; 