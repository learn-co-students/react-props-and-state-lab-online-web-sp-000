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

  changeType = (newType) => {
    this.setState({
      filters: {
        type: newType
      }
    })
  }

  findPetsClick = () => {
    if (this.state.filters.type === 'all'){
      fetch("/api/pets")
      .then(resp => resp.json())
      .then(object => {
        this.setState({
          pets: object
        })
      })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then(object => {
        this.setState({
          pets: object
        })
      })
    }
  }

  adoptPet = (petId) => {
    let adoptedPet = this.state.pets.find(pet => pet.id === petId)
    adoptedPet.isAdopted = true
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
                onChangeType={this.changeType}
                onFindPetsClick={this.findPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
