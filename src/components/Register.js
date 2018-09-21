import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

import AuthService from '../services'

class Register extends Component {
	constructor(props) {
		super(props)

		this.auth = new AuthService()
		this.state = {
			user: {
				first_name: "",
				last_name: "",
				email: "",
				password: "",
			}
		}
	}

	handleChange(e){
		let { user } = this.state
		user[e.target.name] = e.target.value
	  	this.setState({ user })
	}

	handleFormSubmit(e){
		e.preventDefault()
		this.auth.register(this.state)
		.then(res =>{
			console.log(this.props.history)
			this.props.history.replace('/')
		})
		.catch(err =>{ alert(err) })
	}

	render() {
		let { first_name, last_name, email, password } = this.state.user
		return (
			<div className="center">
				<div className="card">
					<h1>Register</h1>
					<form onSubmit={this.handleFormSubmit.bind(this)}>
						<input
						className="form-item"
						placeholder="First name goes here..."
						name="first_name"
						type="text"
						onChange={this.handleChange.bind(this)}
						value={first_name}
						/>
						<input
						className="form-item"
						placeholder="Last name goes here..."
						name="last_name"
						type="text"
						onChange={this.handleChange.bind(this)}
						value={last_name}
						/>
						<input
						className="form-item"
						placeholder="email goes here..."
						name="email"
						type="email"
						onChange={this.handleChange.bind(this)}
						value={email}
						/>
						<input
						className="form-item"
						placeholder="Password goes here..."
						name="password"
						type="password"
						onChange={this.handleChange.bind(this)}
						value={password}
						/>
						<input
						className="form-submit"
						value="SUBMIT"
						type="submit"
						/>
					</form>
				</div>
			</div>
		)
	}
}

export default Register
