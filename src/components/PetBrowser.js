import React from 'react'

import Pet from './Pet'

// Should receive a pets prop. This is an array of pets that the component uses to render <Pet /> components. App should determine which pets to pass down as props. App should be responsible for filtering this list based on the types of pets the user wants to see.
// Should receive an onAdoptPet prop. This callback prop gets passed to its <Pet /> children components.

class PetBrowser extends React.Component {
  render() {
    // iterate over pets and pull out every pet and set prop pet ={pet}, each of this pet objects that coming through props I am pasing down to pet card
    // from App Iam pasing down to intermideate PetBrowser to child Pet
    return <div className="ui cards">
      {this.props.pets.map(pet => <Pet 
        pet={pet} 
        key={pet.id} 
        onAdoptPet={this.props.onAdoptPet}
      />)}
    </div>
  }
}

export default PetBrowser
