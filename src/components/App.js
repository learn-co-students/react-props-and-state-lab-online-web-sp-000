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

  handleOnChangeType = event => {
    const selectedType = event.target.options[event.target.selectedIndex].value
    this.setState({ filters: {...this.state.filters, type: selectedType}})
    // this.setState((previousState) => ({
    //   ...previousState,
    //   [previousState.filters.type]: selectedType
    // }));
  } 

  setPetsUrl = () => {
    if (this.state.filters.type === 'all') {
      return '/api/pets'
    } else {
      return `/api/pets?type=${this.state.filters.type}`
    }
  }

  fetchPets = (petsUrl) => {
    fetch(petsUrl)
    .then(response => response.json())
    .then(petsData => {
      this.setState({
        pets: petsData
      })
    })
  }

  handleOnFindPetsClick = event => {
    const petsUrl = this.setPetsUrl()

    this.fetchPets(petsUrl)
  }

  handleOnAdoptPet = event => {
     const pet = this.state.pets.find(pet => pet.id === event)

     return pet.isAdopted
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
              <Filters onChangeType={this.handleOnChangeType} 
                       onFindPetsClick={this.handleOnFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleOnAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
