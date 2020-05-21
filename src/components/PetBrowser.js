import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  buildPets = () => {
    return this.props.pets.map((pet, ix) => <Pet key={ix} pet={pet} onAdoptPet={this.props.onAdoptPet} />)
  }
  render() {
    return <div className="ui cards">{this.buildPets()}</div>
  }
}

export default PetBrowser
