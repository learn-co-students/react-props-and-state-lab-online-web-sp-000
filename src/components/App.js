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

  changeFilterType = (type) => (
    this.setState({
      filters: {
        type: type
      }
    })
  )

  getPets = () => {
    let filterType = this.state.filters.type
    if (filterType === 'all') {
      fetch('/api/pets')
      .then( response => response.json() )
      .then( data => this.setState({
        pets: data,
        filters: {
          type: filterType
          }
        })
      )
    } else {
      fetch(`/api/pets?type=${filterType}`)
      .then( response => response.json() )
      .then( data => this.setState({
        pets: data,
        filters: {
          type: filterType
          }
        })
      )
    }
  }

  adoptPet = (petId) => {
    let thesePets = this.state.pets
    let thisPet = thesePets.find(pet => pet.id = petId)
    thisPet.isAdopted = true
    console.log(thisPet)
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
              <Filters onChangeType={this.changeFilterType} onFindPetsClick={this.getPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
