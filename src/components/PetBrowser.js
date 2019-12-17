import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  renderPets = () => (
    this.props.pets.map((pet, idx) => <Pet key={idx} onAdoptPet={this.props.onAdoptPet} pet={pet} />)
  )

  render() {
    return <div className="ui cards">{this.renderPets()}</div>
  }
}

export default PetBrowser
