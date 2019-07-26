import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  createPetComponents = () => {
    return this.props.pets.map((pet, i) => {
      return <Pet pet={pet} key={i} onAdoptPet={this.props.onAdoptPet}/>
    });
  }

  render() {
    return <div className="ui cards">
      {this.createPetComponents()}
    </div>
  }
}

export default PetBrowser
