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

  onChangeType = (selectedType) => {
    this.setState({
      filters: {
        type: selectedType.target.value
      }
    })
  }

  onFindPetsClick = () => {
    let endpoint = '/api/pets'
    if (this.state.filters.type !== "all") {
      endpoint += `?type=${this.state.filters.type}`
    }
    fetch(endpoint)
      .then (res => res.json())
      .then (pets => this.setState({
        pets: pets
      }))
  }

  onAdoptPet = (id) => {
    this.setState({
      pets: this.state.pets.map(pet => pet.id === id ? Object.assign({}, pet, {isAdopted: true}) : pet)
    })
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
