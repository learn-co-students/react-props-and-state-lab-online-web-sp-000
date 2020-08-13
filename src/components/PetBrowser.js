import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let petCards = this.props.pets.map(pet => 
      <Pet 
      onAdoptPet={this.props.onAdoptPet}
      pet={pet}
      id={pet.id}/> )

    return <div className="ui cards">
        {petCards}
      </div>
  }
}

export default PetBrowser
