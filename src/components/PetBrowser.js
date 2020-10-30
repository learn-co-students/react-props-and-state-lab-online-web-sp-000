import React from 'react'

import Pet from './Pet'


class PetBrowser extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      pets: this.props.pets
    }

    this.adoptPet = this.adoptPet.bind(this)
  }

  adoptPet = (pet_id) => {
   
    
  }

  genPets = () => {
    
    
     return (
       this.props.pets.map(pet => {
        return <Pet  pet={pet} onAdoptPet={pet.id}/>
       })
     )
  }

  render() {
  return <div className="ui cards">{this.genPets()}</div>
  }
}

export default PetBrowser
