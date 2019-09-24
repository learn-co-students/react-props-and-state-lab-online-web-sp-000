import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  createPetCards = () =>{
    // console.log(this.props.pets)
    return this.props.pets.map(petData => <Pet key={petData.id} pet={petData} onAdoptPet={this.props.onAdoptPet}/>)
  }

  //handleOnAdoptPet = petId => this.props.onAdoptPet(petId)
  

  render() {
    return (
      <div className="ui cards">
        {this.createPetCards()}
      </div>
    )  
  }
}

export default PetBrowser
