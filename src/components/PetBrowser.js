import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  makePets = (petArray) => (
    petArray.map((pet, index) => <Pet key={index} pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted='' />)
  )

  render() {
    return <div className="ui cards">{this.makePets(this.props.pets)}></div>
  }
}

export default PetBrowser
