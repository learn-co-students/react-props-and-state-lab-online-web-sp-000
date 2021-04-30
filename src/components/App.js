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

  handleTypeChange = event => {
    event.persist()
    this.setState(previousState => {
      return {
        filters: Object.assign({}, previousState.filters, {
          type: event.target.value
        })
      }
    })
  }

  fetchPets = () => {
    let url = '/api/pets';
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }

    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({pets: json}))
  }

  adoptPet = (id) => {
    const pets = this.state.pets.map(pet => {
      if (pet.id === id) {
        return Object.assign({}, pet, {isAdopted: true});
      } else {
        return pet;
      }
    })

    this.setState({pets: pets});
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
                onChangeType={this.handleTypeChange}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                onAdoptPet={this.adoptPet}
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
