import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petComponents = this.props.pets.map(pet => <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />)

    return <div className="ui cards">{petComponents}</div>;
  }
}

export default PetBrowser
