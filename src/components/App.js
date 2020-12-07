import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

const PETS_URL = '/api/pets'

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

  updateType = (event) => {
    this.setState(
      {
        filters: {
          ...this.state.filters,
          type: event.target.value
        }
      }
    )
  }

  findPets = () => {
    if (this.state.filters.type !== 'all') {
      fetch(PETS_URL + `?type=${this.state.filters.type}`)
        .then(response => response.json())
        .then(object => this.setState({pets: object}))
    }
    else {
      fetch(PETS_URL)
        .then(response => response.json())
        .then(object => this.setState({pets: object}))
    }
  }

  adoptPet = (id) => {
    let updatedPets = this.state.pets.map(pet => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet
    })
    this.setState({pets: updatedPets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.updateType} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
