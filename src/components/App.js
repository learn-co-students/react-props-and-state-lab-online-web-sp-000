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

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, type: value } });
  };

  fetchPets = () => {
    let url = '/api/pets';
    if (this.state.filters.type !== 'all') {
      url = url + `?type=${this.state.filters.type}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(pets => {
        this.setState({ pets: pets });
      })
  }

  adoptPet = (id) => {
    let newState = Object.assign({}, this.state);
    let pet = newState.pets.find(pet => pet.id === id);
    pet.isAdopted = true;
    this.setState(newState);
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets} />
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
