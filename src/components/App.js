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

  onChangeType = event => {
    this.setState({
      ...this.state.pets,
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type != 'all') {
      return fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(res => res.json())
        .then(res => this.setState({
          pets: res,
        }))
    }
    else {
      return fetch('/api/pets')
        .then(res => res.json())
        .then(res => this.setState({
          pets: res,
        }))
    }
  }

  onAdoptPet = (id) => {
    const pet = this.state.pets.find(pet => pet.id === id)
    pet.isAdopted = true;
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
