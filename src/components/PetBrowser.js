import React from 'react'

import Pet from './Pet'

 // it's going to create pet cards in this pet browser
// need browser to say which pets to display

      // KEY - use map to render this or else it doesn't return anything

class PetBrowser extends React.Component {
  renderPets = () => {
    return this.props.pets.map((pet, i) => {
      return <Pet key={pet.id} pet={pet} isAdopted={this.props.adoptedPets.includes(pet.id)} onAdoptPet={this.props.onAdoptPet} />
    })
  }
// KEEP PASSING IT UP TO THE TOP
  render() {
    return (
      <div className="ui cards">
        {this.renderPets()}
      </div>
    )
  }
}

export default PetBrowser
