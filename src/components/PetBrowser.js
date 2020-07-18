import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  renderPets = () => {
    return this.props.pets.map((pet) =>
      <div>{<Pet onAdoptPet={this.props.onAdoptPet} pet={pet} />}</div>
    );
  }

  render() {
    return (
    <div className="ui cards">{this.renderPets()}</div>
    )
  }
}

export default PetBrowser
