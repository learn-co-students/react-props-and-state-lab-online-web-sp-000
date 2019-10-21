import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">{this.props.pets.map(pet => <Pet onAdoptPet={this.props.onAdoptPet} key={pet.id}
    pet={pet} />)}</div>
  }
  // ovdje saljemo sve iz APP.js u Pet.js
}

export default PetBrowser
