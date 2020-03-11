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

  handleChangeType = (newType) => {
    this.setState({
      filters: {
        type: newType
      }
    })
  }

  handlePetsClick = () => {
    let url = '/api/pets'
    if(this.state.filters.type !== 'all') {
      url = url.concat(`?type=${this.state.filters.type}`)
    }

    fetch(url)
      .then(res => res.json())
      .then(petInfo => {
        this.setState({
          pets: petInfo
        })
      })
  }

  handleAdopt = (id) => {
    let currentPet = this.state.pets.find(pet => pet.id === id)
    currentPet.isAdopted = true
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handlePetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdopt} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
