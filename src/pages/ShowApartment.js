import React, { Component } from 'react'
import { getApartment } from '../api'

class ShowApartment extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartment: {}
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    getApartment(id)
    .then(apartment => {
      this.setState({apartment})
    })
  }

  render() {
    return(
    <div>{this.state.apartment.city}</div>
    )
  }
}

export default ShowApartment
