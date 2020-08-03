import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let petCards = this.props.pets.map(element => (
      <Pet
      key={element.id}
      pet={element}
      onAdoptPet={this.props.onAdoptPet}
      />
    ))
    return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
