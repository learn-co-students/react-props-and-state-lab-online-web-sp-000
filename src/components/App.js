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

  onChangeType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  handleFindPetsFetch = (json) => {
    this.setState({
      pets: json
    })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
        .then(resp => resp.json())
        .then(json => this.handleFindPetsFetch(json))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(resp => resp.json())
        .then(json => this.handleFindPetsFetch(json))
    }
  }

  findPet = (petId) => {
    const pet = this.state.pets.find(({ id }) => petId === id);
    pet.isAdopted = true;
    this.setState({
      pets: [...this.state.pets]
    })
  }

  onAdoptPet = (petId) => {
    this.setState({
      pets: this.findPet(petId)
    })
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.findPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
