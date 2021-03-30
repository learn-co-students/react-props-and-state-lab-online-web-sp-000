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
  onChangeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }
  fetchPets = () => {
    let link = '/api/pets';
    if (this.state.filters.type !== 'all') {
      link += `?type=${this.state.filters.type}`;
    }


    fetch(link)
    .then(response => response.json())
    .then(data => this.setState({ pets: data }));
  }
  //had to take this from solution. It was too hard to figure on my own
  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
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
              onChangeType={this.onChangeType}
              onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              onAdoptPet={this.onAdoptPet}
              pets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
