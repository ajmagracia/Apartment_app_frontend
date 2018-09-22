import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';
import NewApartment from './pages/NewApartment';
import ApartmentIndex from './pages/ApartmentIndex';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header'

ReactDOM.render(
    <Router>
        <div>
            <Route component={Header}/>
            <Route
             exact
             path='/'
             component={App}
            />
            <Route
             exact
             path="/login"
             component={Login}
            />
            <Route
             exact
             path="/register"
             component={Register}
            />
            <Route
             exact
             path="/apartments/new"
             component={NewApartment}
            />
            <Route
             exact
             path="/apartments"
             component={ApartmentIndex}
            />
        </div>
    </Router>, document.getElementById('root'));
registerServiceWorker();
