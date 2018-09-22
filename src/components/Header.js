import React, { Component } from 'react'
import '../css/App.css';
import AuthService from '../services'
import { Link } from 'react-router-dom'

const Auth = new AuthService() // <- Create a new instance of the Auth service

class Header extends Component {

    handleLogout(){ // <- Remove local storage, and redirect the user
      Auth.logout()
      this.props.history.replace('/login');
    }

    render() {
        return(
            (Auth.loggedIn())
            ? <button type="button" className="form-navbutton" onClick={this.handleLogout.bind(this)}>Logout</button>

            : <Link to='/register'>
            <button type="button" className="form-navbutton"> New to this site?  Register Here </button>
            </Link>
        )
    }
}

export default Header
