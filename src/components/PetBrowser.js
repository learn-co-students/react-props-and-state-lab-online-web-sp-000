import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePets = () => {
    //
    return this.props.pets.map( pet => {
      // let callback = () => this.props.onAdoptPet(pet.id);
      console.log(pet)
      return  (<Pet
        key={pet.id}
        pet={pet}
        onAdoptPet={this.props.onAdoptPet}
        />)
    })

  }

  render() {
    return (
      <div className="ui cards">
        this is the pet browser component
        {this.generatePets()}
    </div>)
  }
}

export default PetBrowser
