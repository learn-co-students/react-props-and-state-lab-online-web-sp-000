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

  handleFilterChange = event => {
    this.setState = {
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    }
  }

  onAdoptPet = petId => {
    let pets = this.state.pets.map(pet => {
      return pet.id === petId ? { ...pet, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
  };

  fetchPets = () => {
    let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }
    fetch(endpoint)
      .then(response => response.json())
      .then(pets => this.setState({pets: pets }))
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
              onChangeType={this.type}
              onFindPetsClick={this.fetchPets}
              />
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
