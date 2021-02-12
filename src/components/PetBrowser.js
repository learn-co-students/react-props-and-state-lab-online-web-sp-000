import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePetsCards = () => {
    return this.props.pets.map( petData => <Pet pet={petData} onAdoptPet={this.props.onAdoptPet} />)
  }

  render() {
    return <div className="ui cards">
      { this.generatePetsCards() }
    </div>
  }
}

export default PetBrowser