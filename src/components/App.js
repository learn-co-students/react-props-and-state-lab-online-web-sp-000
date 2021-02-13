import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      adoptedPets: [],
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

  onFindPetsClick = () => {
    let url = '/api/pets'
    if (this.state.filters.type !== "all") {
      url = `/api/pets?type=${this.state.filters.type}`
    }

    fetch(url)
    .then(res => res.json())
    .then(pets => this.setState({ pets }))
  }

  onAdoptPet = petId => {
    let pets = [...this.state.pets];
    let pet = pets.find(pet => pet.id === petId)
    pet.isAdopted = true
    let ix = pets.findIndex(pet => pet.id === petId)
    pets[ix] = pet
    this.setState({
      pets: pets
    })
    // this.setState({
    //   adoptedPets: [...this.state.adoptedPets, petId]
    // })
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
              filters={this.state.filters}
              onChangeType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser
              pets={this.state.pets}
              onAdoptPet={this.onAdoptPet}
              adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
