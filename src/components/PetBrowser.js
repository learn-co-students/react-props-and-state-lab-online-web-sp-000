import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // passing pets props 
    const petCards = this.props.pets.map( pet => (
      //pet state and onAdoptPet function created in App.js and getting passed to Pet child component  
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ))
    return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
