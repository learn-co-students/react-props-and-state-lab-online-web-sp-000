import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const petCards = this.props.pets.map(pet => (< Pet key={pet.id} onAdoptPet={this.props.onAdoptPet} pet={pet}/>))

    return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
