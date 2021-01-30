import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petsToAdopt = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ));

    return <div className="ui cards">{petsToAdopt}</div>
  }
}

// need to map the pet from the array to the prop passed into onAdoptPet callback prop; first define a variable to contain map result; pass in that variable into ui cards

export default PetBrowser
