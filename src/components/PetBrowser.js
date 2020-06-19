import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  genPets = (petArray) => {
    const mapPetArray = petArray.map( pet => {
      return <Pet petObj={pet} onAdoptPet={this.props.onAdoptPet} /> 
    })
    return mapPetArray;
  }

  render() {
    return <div className="ui cards">{this.genPets(this.props.pets)}</div>
  }
}

export default PetBrowser
