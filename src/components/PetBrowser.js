import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  petDetails = () => {
    return this.props.pets.map(petInfo => (
      <Pet
        pet={petInfo}
        onAdoptPet={this.props.onAdoptPet}
      />
    ))
  }
  render() {
    return <div className="ui cards">{this.petDetails()}</div>
  }
}

export default PetBrowser
