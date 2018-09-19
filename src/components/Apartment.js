import React, { Component } from 'react'

class Apartment extends Component {
    render() {
        let { street1, postal_code, city, state, country } = this.props.apartment
        return(
            <div>
                <li className="address">
                <img url="/image.jpg" alt="apartment"/>
                <p>Address: {street1}, {city}, {state} {postal_code}, {country}</p>
                </li>
            </div>
        )
    }
}

export default Apartment
