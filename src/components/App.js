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

  handleAdoptPet = (id) => {
    const updatedPets = this.state.pets;
    for (let i = 0; i < updatedPets.length; i++) {
      if (updatedPets[i].id === id) {
        updatedPets[i].isAdopted = true;
      }
    }
    this.setState({
      pets: updatedPets
    })
  }

  handleChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  updatePetState = (petJson) => {
    this.setState({
      pets: petJson
    })
  }

  fetchPets = () => {
    let linkLocation = '/api/pets';
    if (this.state.filters.type !== 'all') {
      linkLocation = `/api/pets?type=${this.state.filters.type}`;
    }
    fetch(linkLocation)
    .then(response => response.json())
    .then(petJson => this.updatePetState(petJson))
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.fetchPets} filters={this.state.filters.type}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
