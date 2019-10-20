import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

// filtering of the pets
    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    });
  }

  onFindPetsClick = () => {
      let query = ""
      if (this.state.filters.type !== 'all') {
        query = "?type=" + this.state.filters.type
      }
    fetch('/api/pets' + query)
      .then(response => response.json())
      .then(data => this.setState({ pets: data }))
  }

  onAdoptPet = (petId) => {
    // how to use the ID and keep the previous state
    this.setState({ adoptedPets: [...this.state.adoptedPets, petId] });

    let pets = this.state.pets.map(p => {
      if (p.id === petId) {
        return { ...p, isAdopted: true }
      } else {
        return p
      }
    });
    this.setState({ pets });
    // need to figure out how to permanently update
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
