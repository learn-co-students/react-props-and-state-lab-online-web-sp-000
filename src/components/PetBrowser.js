import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let pets = Array.from(this.props.pets) 
    const petCards = pets.map(pet => (<Pet pet={pet} id={pet.id} onAdoptPet={this.props.onAdoptPet}/>))
    return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
