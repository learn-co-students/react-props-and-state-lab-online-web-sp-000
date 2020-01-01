import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType = type => {
    this.setState({
      filters: {...this.state.filters, type: type}
    })
    console.log(this.state.pets)
  }

  findPets = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
        .then(response => response.json())
        .then(pets => this.state.pets = pets)
        .catch(error => console.log(error))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(response => response.json())
        .then(pets => this.state.pets = pets)
        .catch(error => console.log(error))
    }
  }

  adoptPet = petId => {
    let foundPet = Object.assign({}, this.state.pets.find(pet => pet.id === petId))
    foundPet.isAdopted = true
    this.setState({
      {...this.state.pets}
    })
  }

  render() {
    return(
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

// findPets = () => {
//   fetch('/api/pets')
//     .then(response => response.json())
//     .then(pets => {
//       if (this.state.filters.type === "all") {
//         this.setState({ pets: pets})
//       } else {
//         let petArray = []
//         pets.forEach(pet => {
//           if (pet.type === this.state.filters.type) {
//             petArray.push(pet)
//           }
//         })
//         this.setState({ pets: petArray})
//       }
//     })
// }
