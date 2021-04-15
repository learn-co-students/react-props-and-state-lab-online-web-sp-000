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

  onFindPetsClick = () => {
    let baseURL = '/api/pets';
    let endPoint = this.state.filters.type !== 'all' ? baseURL += `?type=${this.state.filters.type}` : baseURL;

    fetch(endPoint)
      .then(res => res.json())
      .then(pets => this.setState({pets: pets}));
  };

  onChangeType = event => {
    this.setState({filters: {...this.state.filters, type: event.target.value}})
  };

  onAdoptPet = petID => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petID ? {...pet, isAdopted: true} : pet;
    });

    this.setState({pets: pets})
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
              <Filters 
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets} 
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
