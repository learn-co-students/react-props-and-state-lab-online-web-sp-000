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

  adoptPet = petId => {
    let allPets = this.state.pets
    console.log(petId)
    let adoptedPet = allPets.find( pet => pet.id == petId )
    adoptedPet.isAdopted = true;
    this.setState({ 
      pets: allPets
    })
  }

  changeType = event => {
    console.log(`changed to ${event.target.value}`)
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  findPets = () => {
    const type = this.state.filters.type
    let url = '/api/pets'
    if(type !== 'all'){
      url = `${url}?type=${type}`
    } 

    fetch(url)
    .then(response => response.json())
    .then(object => {
      this.updatePets(object)
    })    
  }

  updatePets = petsArray => {
    console.log(`updating pet list with ${petsArray.length} pets`)
    this.setState({
      pets: petsArray
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPets} />
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
