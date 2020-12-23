import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    };
  }

  onChangeType = (newType) => {
    this.setState({
      filters: {
        ...this.filters,
        type: newType
      }
    });
  };

  onFindPetsClick = () => {
    const url = (this.state.filters.type === 'all') ?
      '/api/pets' : `/api/pets?type=${this.state.filters.type}`;
    fetch(url)
      .then(resp => resp.json())
      .then(petData => this.setState({
        pets: petData
      }));
  };

  onAdoptPet = (petId) => {
    const index = this.state.pets.findIndex(pet => pet.id === petId);
    this.setState(previousState => {
      return {
        pets:
          previousState.pets,
        ...previousState.pets[index].isAdopted = true,
      };
    });
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
