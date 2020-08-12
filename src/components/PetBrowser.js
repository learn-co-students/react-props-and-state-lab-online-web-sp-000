import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  craftPets = () => {
    return this.props.pets.map(petInfo => (
        <Pet
          pet={petInfo}
          onAdoptPet={this.props.onAdoptPet}
          key={petInfo.id}
        />
      ))
  }

  render() {
    return <div className="ui cards">{this.craftPets()}</div>
  }
}

export default PetBrowser
