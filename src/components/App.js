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

  changeFilterType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  fetchPets = () => {
      fetch('/api/pets')
      .then(res => res.json())
      .then(json => {
        this.setState({
          pets: json
        })
      })
  if (this.state.filters.type !== 'all') { 
    const url = `/api/pets?type=${this.state.filters.type}`
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          pets: json
        })
      })
    }
  }

  handleAdoptPet = (id) => {
    const adoptedPet = this.state.pets.find(pet => pet.id === id)
    const index = this.state.pets.findIndex(pet => pet.id === id)
    adoptedPet.isAdopted = true
    this.setState({
      pets: [
        ...this.state.pets.slice(0, index),
        adoptedPet,
        ...this.state.pets.slice(index + 1)
              
      ]
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
              <Filters onChangeType={this.changeFilterType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
