import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let petCards = this.props.pets.map(pet =>
      <Pet 
      pet={pet} 
      key={pet.id} 
      onAdoptPet={this.props.onAdoptPet} />
    );
    return <div className="ui cards">{petCards}</div>
  }
}

// create variable called petCards set it equal to one prop to map over, and create a card out of each pet, on the card use onAdoptPet 

// this.props.pets.map(pet => (<Pet />))
/// return {petCards}, pet.id, isadopted, and the pet itself

export default PetBrowser
