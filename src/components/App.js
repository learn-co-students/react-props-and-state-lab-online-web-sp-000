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

  handleTypeChange = (e) => {
    this.setState({filters: {type: e.target.value}})
  }

  getPets = () => {
    const filter = this.state.filters.type
    let url = '/api/pets'
    if (filter !== 'all') {
      url += ('?type=' + filter)
    }
    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets: pets }))
  }

  adoptPet = (id) => {
    this.state.pets.find(pet => pet.id === id).isAdopted = true
    this.setState({pets: this.state.pets})
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
              <Filters onChangeType={this.handleTypeChange} onFindPetsClick={this.getPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
