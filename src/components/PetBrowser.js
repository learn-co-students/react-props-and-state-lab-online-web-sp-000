import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petsAmswer = this.props.pets.map(pet => (
      <Pet id={pet.id} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ))
    return <div className="ui cards">PET COMPONENT SHOULD GO HERE {petsAnswer}</div>
  }
}

export default PetBrowser
