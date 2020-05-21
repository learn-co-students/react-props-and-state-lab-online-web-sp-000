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

  setType = (newType) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: newType
      }
    })
  }

  setPets = (newPets) => {
    this.setState({
      pets: newPets
    })
  }

  findPetsClick = () => {
    let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }
      fetch(endpoint)
      .then(response => response.json())
      .then(pets => () => this.setPets(pets))
    // if (this.state.type === 'all') {
    //   fetch('/api/pets')
    //   .then(response => response.json())
    //   .then(pets => () => this.setPets(pets))
    // } else {
    //   fetch(`/api/pets?type=${this.state.filters.type}`)
    //   .then(response => response.json())
    //   .then(pets => this.setPets(pets))
    // }
  }

  handleAdpotPet = (petId) => {
    for (let pet of this.state.pets) {
      if (pet.id === petId) {
        pet.isAdopted = true
      }
    }
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
              <Filters onChangeType={this.setType} onFindPetsClick={this.findPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdpotPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
