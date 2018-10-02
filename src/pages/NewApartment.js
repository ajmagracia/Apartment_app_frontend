import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { createApartment } from '../api'
import withAuth from '../components/withAuth'
import AuthService from '../services'

class NewApartment extends Component {
	constructor(props) {
		super(props)
        this.auth = new AuthService()
		this.state = {
			apartment: {
				street1: "",
				street2: "",
				city: "",
				state: "",
				postal_code: "",
				country: "",
				manager_name: "",
				phone_number: "",
				contact_hours: ""
			}
		}
        // this.state.apartment.user_id = this.auth.getUserId()
	}

	handleChange(e){
		let { apartment } = this.state
		apartment[e.target.name] = e.target.value
	  	this.setState({ apartment })
	}

	handleFormSubmit(e){
		e.preventDefault()
		let { apartment } = this.state
		apartment.user_id = this.props.userId
		console.log(apartment)
		createApartment(apartment)
		.then(res =>{
			console.log(this.props.history)
			this.props.history.replace('/apartments')
		})
		.catch(err =>{ alert(err) })
	}

	render() {
		let {
            street1,
    		street2,
    		city,
    		state,
    		postal_code,
    		country,
    		manager_name,
    		phone_number,
    		contact_hours
        } = this.state.apartment
		let {
		  userId
		} = this.props
		return (
			<div className="center">
				<div className="card">
					<h1>Add an Apartment</h1>
					<form onSubmit={this.handleFormSubmit.bind(this)}>
						<input
						className="form-item"
						placeholder="Street goes here..."
						name="street1"
						type="text"
						onChange={this.handleChange.bind(this)}
						value={street1}
						/>
						<input
						className="form-item"
						placeholder="Apartment #, etc. goes here..."
						name="street2"
						type="text"
						onChange={this.handleChange.bind(this)}
						value={street2}
						/>
						<input
						className="form-item"
						placeholder="city goes here..."
						name="city"
						type="text"
						onChange={this.handleChange.bind(this)}
						value={city}
						/>
						<input
						className="form-item"
						placeholder="Postal code goes here..."
						name="postal_code"
						type="integer"
						onChange={this.handleChange.bind(this)}
						value={postal_code}
						/>
						<input
						className="form-item"
						placeholder="State goes here..."
						name="state"
						type="text"
						onChange={this.handleChange.bind(this)}
						value={state}
						/>
						<input
						className="form-item"
						placeholder="Country goes here..."
						name="country"
						type="text"
						onChange={this.handleChange.bind(this)}
						value={country}
						/>
						<input
						className="form-item"
						placeholder="Manager name goes here..."
						name="manager_name"
						type="text"
						onChange={this.handleChange.bind(this)}
						value={manager_name}
						/>
						<input
						className="form-item"
						placeholder="Phone number goes here..."
						name="phone_number"
						type="text"
						onChange={this.handleChange.bind(this)}
						value={phone_number}
						/>
						<input
						className="form-item"
						placeholder="Contact hours go here..."
						name="contact_hours"
						type="text"
						onChange={this.handleChange.bind(this)}
						value={contact_hours}
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

export default withAuth(NewApartment)
