import React from 'react'

import Pet from './Pet'

export default class PetBrowser extends React.Component {
  render() {
    let petz = this.props.pets.map((pet) => (<Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet}/>)
    )
    return (
    <div className="ui cards">
      {petz}
    </div>
    )
  }
}
