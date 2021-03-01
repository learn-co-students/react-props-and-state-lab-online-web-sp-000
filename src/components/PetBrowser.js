import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  createPetCards = () => {
    return(
      this.props.pets.map(pet =>
        <Pet key={pet.id.toString()}
        pet={pet}
        onAdoptPet={this.props.onAdoptPet} />
      )
    )
  }

  render() {
    const petCards = this.createPetCards()
    return(
    <div className="ui cards">
      {petCards}
      </div> 
    )
  }
}

export default PetBrowser
