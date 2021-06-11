import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  petsData = ()=>{
    return this.props.pets.map((pet)=>{
      return  <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet}/>
    })
  }
  render() {
    return <div className="ui cards">PET COMPONENT SHOULD GO HERE
   
    {this.petsData()}
  
    </div>
  }
}

export default PetBrowser
