import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import ApartmentIndex from './pages/ApartmentIndex'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import AddApartment from './pages/AddApartment'

import Header from './components/Header'
import AuthService from './services'
import { getApartments, createApartment } from './api'
import './App.css'

class App extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         apartments: [],
    //         newApartmentSuccess: false
    //     }
    // }
    //
    // componentDidMount() {
    //     getApartments()
    //     .then(APIapartments => {
    //         this.setState({
    //             apartments: APIapartments
    //         })
    //     })
    // }
    //
    // handleNewApartment(newApartmentInfo) {
    //     console.log("New Apartment TRY", newApartmentInfo)
    //     createApartment(newApartmentInfo)
    //     .then(successApartment => {
    //         alert("CREATE SUCCESS!", successApartment);
    //         let updatedApartments = this.state.apartments
    //         updatedApartments.push(successApartment)
    //         this.setState({
    //             apartments: updatedApartments,
    //             newApartmentSuccess: true
    //         })
    //     })
    // }

    render() {
  		// creates new instance of AuthService class
  		let auth = new AuthService()
  		return (
  			<div>
  				<Header />
  				<Router>
  					{(auth.loggedIn())
  					// if logged in
  					? <Switch>
  						<Route exact path="/" component={Homepage} />
                        <Route exact path="/apartment-index" component={ApartmentIndex} />
  						<Route exact path="/add-apartment" component={AddApartment} />
                        <Redirect from="/register" to="/" />
                        <Redirect from="/login" to="/" />
  					</Switch>
  					// if not logged in (ie Guest User)
  					: <Switch>
                        <Route exact path="/" component={Homepage} />
  						<Route exact path="/apartment-index" component={ApartmentIndex} />
  						<Route exact path="/register" component={Register} />
  						<Route exact path="/login" component={Login} />
                        <Redirect from="/add-apartment" to="/register" />
  					</Switch>}
  				</Router>
  			</div>
  		);
  	}
}

export default App;
