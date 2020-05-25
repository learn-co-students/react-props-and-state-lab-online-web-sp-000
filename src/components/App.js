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

  onChangeType = (petType) => {
    this.setState({
      filters: {
        type: petType
      }
    })
  }

  onFindPetsClick = () => {
    let url = "/api/pets"
    if (this.state.filters.type !== 'all'){
      url += `?type=${this.state.filters.type}`
    }
    let self = this
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      self.setState({
        pets: object
      })
    })
    .catch(function(error) {
      console.log(error.message);
    });
  }

  onAdoptPet = (id) => {
    this.state.pets.filter(pet => pet.id === id)[0].isAdopted = true
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
