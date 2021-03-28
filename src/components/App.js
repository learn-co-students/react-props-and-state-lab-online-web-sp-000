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
    this.setState({
      filters: { ...this.state.filters, type: value }
    });
  };

  fetchPets = () => {
    const state = this.state.filters.type

    if (state === 'all') {
      fetch('/api/pets')
      .then(resp => resp.json())
      .then(data => this.setState({pets: data}))
    } else {
      fetch(`/api/pets?type=${state}`)
      .then(resp => resp.json())
      .then(data => this.setState({pets: data}))
    }
  };

  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? {...p, isAdopted:true} : p;
    });
    this.setState({ pets: pets});
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
