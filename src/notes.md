import React, { Component } from 'react'
import Apartment from '../components/Apartment'
import { getApartments } from '../api'

class ApartmentIndex extends Component {


    mapApartments(APIapartments,apartmentList) {
        if(APIapartments.length === 0 || APIapartments === "undefined") {
            apartmentList = "No recipes found"
        } else {
            apartmentList = APIapartments.map(apartment=> {
                return(<Apartment key={apartment.id} apartment={apartment} />)
            })
        }
    }

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
        let APIapartments = getApartments()
        .then(this.mapApartments(APIapartments,apartmentList).bind(this))
        return(
            <ul>{apartmentList}</ul>
        )
    }
}

export default ApartmentIndex
