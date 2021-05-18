import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let allPets = []
    if (this.props.pets && this.props.pets.map){
      allPets = this.props.pets.map(selPet => {
        return(
          <Pet pet={selPet} onAdoptPet={this.props.onAdoptPet}/>
      )})
    }
    return(
      <div>{allPets}</div> 
    )
  }
}

export default PetBrowser
