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

  // onChangeType callback needs to update App's `state.filters.type`
  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  // When the <Filters /> component calls onFindPetsClick,
  // <App /> should fetch a list of pets using fetch()
  onFindPetsClick = () => {
    if (this.state.filters.type !== 'all'){
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(r => r.json())
      .then(pets => this.setState({pets}));
    } else {
      fetch('/api/pets')
      .then(r => r.json())
      .then(pets => this.setState({pets}));
    }
  };

  // This callback should take in an id for a pet, find the matching pet
  // in state.pets and set the isAdopted property to true
  onAdoptPet = (id) => {
    for (var i = 0; i < this.state.pets.length; i++) {
      let chosenPet = this.state.pets[i];
      if (chosenPet.id === id) {
          chosenPet.isAdopted = true;
          this.setState({
            pets: [...this.state.pets]
          });
      }
    }

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
