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

  handleFindPets = (type) => {
    if(type === "all"){
      fetch('/api/pets')
        .then(resp => resp.json())
        .then(data => console.log(data))
    }else{
      fetch(`/api/pets?type=${type}`)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
  }

  // handleAdoptPet = (id) => {
  //   return this.state.pets.find(pet => pet.id === id)
  // }



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters />
              // <Filters onChangeType={this.filters.type} onFindPetsClick={this.handleFindPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
