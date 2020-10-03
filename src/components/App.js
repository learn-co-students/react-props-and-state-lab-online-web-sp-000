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

  handleUpdateFilter = event => {
    this.setState({
      filters: {type: event.target.value}
    })
  }

  handleFetchPets = event => {
    if ( this.state.filters.type === 'all') {
      fetch('/api/pets')
        .then(response => response.json())
        .then(json => this.setState({
          pets: json
        }))
    } else if ( this.state.filters.type === 'cat') {
      fetch('/api/pets?type=cat')
        .then(response => response.json())
        .then(json => this.setState({
          pets: json
        }))
    } else if ( this.state.filters.type === 'dog') {
      fetch('/api/pets?type=dog')
        .then(response => response.json())
        .then(json => this.setState({
          pets: json
        }))
    } else if ( this.state.filters.type === 'micropig') {
      fetch('/api/pets?type=micropig')
        .then(response => response.json())
        .then(json => this.setState({
          pets: json
        }))
    }
  }

  handleAdoptPet = (id) => {
    let updatedPets = this.state.pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted: true}:false
    })
    this.setState({
      pets: updatedPets
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
              <Filters onChangeType={this.handleUpdateFilter} onFindPetsClick={this.handleFetchPets} />
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
