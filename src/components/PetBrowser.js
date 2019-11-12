import React from "react"

import Pet from "./Pet"

class PetBrowser extends React.Component {
  petArray = () =>
    this.props.pets.map(pet => (
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />
    ))
  render() {
    return <div className="ui cards">{this.petArray()}</div>
  }
}

export default PetBrowser
