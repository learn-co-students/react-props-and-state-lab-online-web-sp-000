import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  showPets = (array) => (
    array.map(petInfo => {
      return <Pet pet={petInfo} onAdoptPet={this.props.onAdoptPet}/>
    })
  )

  render() {
    return <div className="ui cards">{this.showPets(this.props.pets)}</div>
  }
}

export default PetBrowser
