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
   
    this.setState ({
      filters: {
        type: event.target.value
      }
    })
  }

  handleFindPets = () => {
    let url = "/api/pets"
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }
      fetch(url)
      .then (resp => resp.json())
      .then (petData => {
        console.log (petData)
        this.setState ({
          pets: petData
        })
      })
  }

  handleAdoptPet =(id)=> {
   let petsCopy = [...this.state.pets]
   let newPet = petsCopy.find(pet => pet.id === id)
   newPet.isAdopted = true
   this.setState({
     pets: petsCopy
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
              onFindPetsClick = {this.handleFindPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet = {this.handleAdoptPet} pets = {this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
