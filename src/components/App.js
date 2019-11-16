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


  handleChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  };

  handleFindPetsClick = () => {
    let url = "/api/pets"
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }
      fetch(url)
      .then (resp => resp.json())
      .then (data => {
        console.log (data)
        this.setState ({
          pets: data
        })
      })
  }

  handleAdoptPet = (id) => {
      //console.log('this.state.pets', this.state.pets)
      let clonePets = [...this.state.pets]
      let foundPet = clonePets.find(pet => pet.id === id)
      foundPet.isAdopted = true
      this.setState({
        pets: clonePets
      })
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
                onChangeType = {this.handleChangeType}
                onFindPetsClick = {this.handleFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets = {this.state.pets}
                onAdoptPet = {this.handleAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
