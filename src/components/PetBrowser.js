import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  getPets = () => {
    return this.props.pets.map(pet => <div><Pet pet={pet} onAdoptPet={this.props.onAdoptPet} /></div>)
  }

  render() {
    return (
      <div className="ui cards">{this.getPets()}</div>
    )
  }
}

export default PetBrowser
