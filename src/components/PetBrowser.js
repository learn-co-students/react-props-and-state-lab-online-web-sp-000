import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const newPet = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
    ));

    return <div className="ui cards"> {newPet} </div> 
  }
}

export default PetBrowser
