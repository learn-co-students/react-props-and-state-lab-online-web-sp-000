import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  makePetCards = () => {
    return this.props.pets.map(pet => {
      return <Pet pet={pet} />
    })
  }
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(animal => {
          return <Pet pet={animal} isAdopted={animal.isAdopted} onAdoptPet={this.props.onAdoptPet} />
        })}
      </div>
    )
  }
}

export default PetBrowser
