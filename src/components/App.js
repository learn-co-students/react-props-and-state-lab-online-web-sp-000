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
    this.setState({ filters: { type: type } });
  }

  onFindPetsClick = () => {
    let url = "/api/pets"
    if (this.state.filters.type !== 'all') {
      url += "?type=" + this.state.filters.type
    }
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({pets: json}));
  }

  onAdoptPet = (petID) => {
    let updatedPets = this.state.pets
    let petIndex = this.state.pets.findIndex(pet => pet.id === petID)
    updatedPets[petIndex].isAdopted = true;
    this.setState({
      pets: updatedPets
    });
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} filters={this.state.filters} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
