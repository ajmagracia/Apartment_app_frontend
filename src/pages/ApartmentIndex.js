import React, { Component } from 'react'
import Apartment from '../components/Apartment'

class ApartmentIndex extends Component {
    render() {
        let apartmentList
        let apartments = ["apartment"]
        // let { apartments } = this.props
        if(apartments.length === 0 || apartments === "undefined") {
            apartmentList = "No recipes found"
        } else {
            apartmentList = apartments.map(apartment=> {
                return(<Apartment apartment={apartment} />)
            })
        }
        return(
            <div>{apartmentList}</div>
        )
    }
}

export default ApartmentIndex
