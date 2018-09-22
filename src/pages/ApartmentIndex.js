import React, { Component } from 'react'
import Apartment from '../components/Apartment'
import { getApartments } from '../api'

class ApartmentIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
            apartments: []
        }
    }
    componentWillMount() {
        getApartments()
        .then(APIapartments => {
            this.setState({
                apartments: APIapartments
            })
        })
    }

    render() {
        let apartmentList
        let { apartments } = this.state
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
