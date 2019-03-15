import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petProps = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
    ))

    return <div className="ui cards">{petProps}</div>
      
  }
}

export default PetBrowser
