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

  onChangeType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  onAdoptPet = (id) => {
    let pets = [...this.state.pets]
    let adoptedPet = pets.find(pet => pet.id === id)
    adoptedPet.isAdopted = true
  }

  onFindPetsClick = () => {
    let query = ""
    if (!(this.state.filters.type === 'all')) {
      query = `?type=${this.state.filters.type}`
    }
    const url = `/api/pets${query}`
    fetch(url)
    .then(res => res.json())
    .then(pets =>
      {this.setState({pets})})
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
