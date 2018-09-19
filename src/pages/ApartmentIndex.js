import React, { Component } from 'react'
import Apartment from '../components/Apartment'

class ApartmentIndex extends Component {
    render() {
        let apartmentList
        let apartments = [
            {
                id: 1,
                street1: "street1",
                city: "city",
                postal_code: 23524,
                state: "state",
                country: "country"
            }
        ]
        // let { apartments } = this.props
        if(apartments.length === 0 || apartments === "undefined") {
            apartmentList = "No recipes found"
        } else {
            apartmentList = apartments.map(apartment=> {
                return(<Apartment key={apartment.id} apartment={apartment} />)
            })
        }
        return(
            <ul>{apartmentList}</ul>
        )
    }
}

export default ApartmentIndex
