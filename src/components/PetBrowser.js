import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let pets = this.props.pets.map(pet => <div className="ui cards"><Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/></div>)
    return pets
  }
}

export default PetBrowser
