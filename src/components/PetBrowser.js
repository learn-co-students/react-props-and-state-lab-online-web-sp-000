import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() { //map over pets prop, for each pet create new pet component & onAdoptPet function
    const petCards = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
      ));
    return <div 
      className="ui cards">
      {petCards}  
    </div> 
  }
}

export default PetBrowser

//in react and doing .map, always have to have a key!!