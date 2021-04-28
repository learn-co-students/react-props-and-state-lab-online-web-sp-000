import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {





  
  genAllPets = (pets) => {
    
    return(
      pets.map((pet, idx) => <Pet key={idx} pet={pet} isAdopted={pet.isAdopted}   onAdoptPet={this.props.onAdoptPet}/>)
    )
  }

  render() {
    return (
      <div className="ui cards">{this.genAllPets(this.props.pets)}</div>  
    )
  }
}

export default PetBrowser
