import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePetComponents = () => {
    return this.props.pets.map(pet => {
      return <Pet pet={pet} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet} />
    })
  }

  render() {
    return (
      <div className="ui cards">
        {this.generatePetComponents()}
      </div>
    )
  }
}

export default PetBrowser
