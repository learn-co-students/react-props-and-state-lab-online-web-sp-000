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

  changeType = (animal) => {
    setState=({
     filters: {
      ...this.state.filters, 
      type: animal 
     }   
    })
  }

  fetchPets = () => {
    let filterType = this.state.filters.type 
    if (filterType === 'all'){
      fetch('/api/pets')
      .then(resp => resp.json())
      .then(data => this.setState({
        pets: data, 
        filters: {
          type: filterType
        }
      }))
    }
    else {
      fetch(`/api/pets?type=${filterType}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        pets: data, 
        filters: {
          type: filterType 
        }
      }))
    }
  }

  adoptPet = (Id) => {
    let currentPets = this.state.pets 
    let thisPet = currentPets.find(pet => pet.id = Id)
    thisPet.isAdopted = true 
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
