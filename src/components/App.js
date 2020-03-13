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

  onChangeType = (e) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: e.target.value
      }
    })
  }

  onFindPetsClick = () => {
    let url = "/api/pets"

    if (this.state.filters.type !== "all") {
      url = url + `?type=${this.state.filters.type}`
    }
    fetch(url)
    .then(res => res.json())
    .then(fetchedPets => {
      this.setState({pets: fetchedPets})
    })
  }

  onAdoptPet = (id) => {
    const found = this.state.pets.find(pet => pet.id === id)
    found.isAdopted = !found.isAdopted
    console.log(found.isAdopted)
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
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
