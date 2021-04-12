import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  // maps pet array from props & creates pet div for each individual pet, passing in pet & onAdoptPet as props
  renderPetCard = () => {
    return this.props.pets.map(pet => 
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
    )
  }

  render() {
    return <div className="ui cards">{this.renderPetCard()}</div>
  }
}

export default PetBrowser
