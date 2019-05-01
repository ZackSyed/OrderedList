import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// import Modal from '../components/modal/modal';
import Splash from './splash_page/splash'


const App = () => (
    <div>    
        {/* <Modal /> */}

        <Route exact path='/' component={Splash}/>
        
    </div>
);

export default App; 